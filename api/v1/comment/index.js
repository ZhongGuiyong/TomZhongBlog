import { Router } from 'express'
import mongoose from 'mongoose'
import Comment from '../../../models/comment'
import Article from '../../../models/article'
import { validateCaptcha } from '../captcha/index'
const comment = Router()


comment.get('/:article_id', async (req, res) => {

  const { article_id = 0 } =  req.params
  const { pageIndex = 1, pageLimit = 5} = req.query || {}

  if (!article_id) return res.status(406).json({
    code: -1,
    message: '没有获取到文章的id'
  })

  

  const result = await Comment.find({article_id: article_id})
                              .sort({ createdAt: -1 })
                              .skip((Number(pageIndex - 1)) * pageLimit)
                              .limit(Number(pageLimit))
  // 所有评论个数
  const totalComment = await Comment.find({ article_id: article_id })
  
  // 更新文章中的评论数量
  const updateRes = await Article.findByIdAndUpdate({ _id: article_id }, { comment_count: totalComment.length || 1 })

  res.json({
    code: 0,
    commentArray: result,
    pagination: {
      page: Number(pageIndex),
      limit: Number(pageLimit),
      total: totalComment.length || 0
    }
  })
})

// 插入评论
comment.post('/', async (req, res) => {
  const { name, email, content, article_id, captcha } = req.body || {}

  // 验证验证码是否正确
  if (!validateCaptcha(req, 'comment_captcha', captcha)) {
    // console.log('验证码通过')
    return res.status(406).json({
      code: -1,
      message: '请输入正确的验证码'
    })
  }

  try {
    const newComment = new Comment({
      _id: new mongoose.Types.ObjectId(),
      article_id: article_id,
      name: name,
      email: email,
      content: content
    })
    const result = await newComment.save()

    // 获取所有评论个数
    const totalComment = await Comment.find({ article_id: article_id })
    
    // 更新文章中的评论数量
    await Article.findByIdAndUpdate({ _id: article_id }, { comment_count: totalComment.length || 0 })

    res.status(201).json({
      message: 'Handling Create Comment.(创建评论成功)',
      result: result
    })

  } catch (error) {
    res.status(500).json({
      code: -1,
      error: error
    })
  }
  // res.json({
  //   form: req.body,
  //   session: req.session,
  //   revlidate: revlidate,
  // })
})

export default comment
