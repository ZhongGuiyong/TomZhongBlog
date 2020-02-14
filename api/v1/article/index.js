import { Router } from 'express'
import mongoose from 'mongoose'
import Article from '../../../models/article'
import checkAuth from '../../../plugins/serverPlugins/checkAuth'
const article = Router()

article.get('/', async function(req, res, next) {
  const tag = req.query.tag || ''
  const title = req.query.title || ''
  const content = req.query.content || ''
  const order = req.query.order || 'desc'
  const pageIndex = parseInt(req.query.pageIndex) || 1
  const pageLimit = parseInt(req.query.pageLimit) || 5
  const totalDocs = await Article.find({
    tags: { $elemMatch: { $regex: tag } }
  })
    .where('title')
    .regex(title)
    .where('content')
    .regex(content)
  // console.log(totalDocs)
  // console.log(getCount)

  Article.find({ tags: { $elemMatch: { $regex: tag } } })
    .where('title')
    .regex(title)
    .where('content')
    .regex(content)
    .skip((pageIndex - 1) * pageLimit)
    .limit(pageLimit)
    .populate('author', 'name -_id')
    .populate('fans')
    .exec()
    .then(docs => {
      // console.log(docs)
      const response = {
        pagination: {
          totalDataCount: totalDocs.length, // 符合条件的总数
          current: pageIndex, // 当前页数
          showDataCount: pageLimit // 每页展示数量
        },
        articles: docs.map(doc => {
          // console.log(doc)
          return {
            title: doc.title,
            content: doc.content,
            _id: doc._id,
            fans: doc.fans,
            doc: doc,
            desc: doc.desc,
            tags: doc.tags,
            read_count: doc.read_count || 0,
            like_count: doc.like_count || 0,
            comment_count: doc.comment_count || 0,
            open: doc.open || false,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/v1/article/' + doc._id
            }
          }
        })
      }
      res.status(200).json(response)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
})
article.get('/latest/:number', async function(req, res) {
  const showNumber = parseInt(req.params.number) || 1
  try {
    const result = await Article.find()
      .sort({ createTime: -1 })
      .limit(showNumber)
    res.send({
      status: 0,
      result: result
    })
  } catch (error) {
    res.status(500).json({
      status: -1,
      result: '获取最新文章失败！',
      error: error
    })
  }
})
article.get('/:id', function(req, res, next) {
  let id = req.params.id
  // console.log(id)
  Article.findByIdAndUpdate(id, { $inc: { 'view_count': 1 }})
    .populate('author', 'name -_id')
    .populate('fans')
    .exec()
    .then(result => {
      // console.log(result)
      // const response = {
      //   title: result.title,
      //   contet: result.content,
      //   fans: result.fans
      // }
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
})
article.post('/', checkAuth, function(req, res, next) {
  let author = req.session.authUser._id ? req.session.authUser._id : ''
  let title = req.body.title ? req.body.title : ''
  let content = req.body.content ? req.body.content : ''
  let fans = req.body.fans ? JSON.parse(req.body.fans) : []
  let desc = req.body.desc ? req.body.desc : ''
  let poster = req.body.poster ? req.body.poster : ''
  let mdContent = req.body.mdContent ? req.body.mdContent : ''
  let parseContent = req.body.parseContent ? req.body.parseContent : ''
  let tags = req.body.tags ? req.body.tags : []
  let type = req.body.type ? req.body.type : ''
  const article = new Article({
    _id: new mongoose.Types.ObjectId(),
    author: author,
    title: title,
    content: content,
    fans: fans,
    desc: desc,
    poster: poster,
    mdContent: mdContent,
    parseContent: parseContent,
    type: type,
    tags: tags
  })
  // console.log(article)
  // res.end(200)
  article
    .save()
    .then(result => {
      // console.log(result)
      res.status(201).json({
        message: 'Handling Create Article',
        createArticle: result
      })
    })
    .catch(err => {
      // console.log(err)
      res.status(500).json({
        error: err
      })
    })
})
article.put('/:id', function(req, res, next) {
  const id = req.params.id
  const updateObj = {
    title: req.body.title ? req.body.title : '',
    content: req.body.content ? req.body.content : '',
    fans: req.body.fans ? JSON.parse(req.body.fans) : [],
    desc: req.body.desc ? req.body.desc : '',
    mdContent: req.body.mdContent ? req.body.mdContent : '',
    parseContent: req.body.parseContent ? req.body.parseContent : '',
    // tags: req.body.tags ? req.body.tags : [],
    type: req.body.type ? req.body.type : '',
    $push: { tags: req.body.tags }
  }

  for (var i in updateObj) {
    if (updateObj[i] === '' || updateObj[i].length === 0) {
      delete updateObj[i]
    }
  }
  console.log(updateObj)
  Article.update({ _id: id }, updateObj)
    .exec()
    .then(result => {
      console.log(result)
      res.status(200).json({ result: result })
    })
    .catch(err => {
      // console.log(err)
      res.status(500).json({
        error: err
      })
    })
})

article.delete('/:id', async (req, res, next) => {
  let id = req.params.id
  // console.log(id)
  try {
    const result = await Article.findByIdAndRemove(id)
    console.log(result)
    res.status(200).json({
      status: 'ok',
      result: result
    })
  } catch (error) {
    res.status(500).json({
      status: 'no ok',
      err: error
    })
  }
})

export default article
