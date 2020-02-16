import { Router } from 'express'
import mongoose from 'mongoose'
import Comment from '../../../models/comment'
import { validateCaptcha } from '../captcha/index'
const comment = Router()

// 插入评论
comment.post('/', (req, res) => {
  const { name, email, content, article_id, captcha } = req.body || {}
  let revlidate = false
  if (!validateCaptcha(req, 'comment_captcha', captcha)) {
    // console.log('验证码通过')
    return res.status(406).json({
      code: -1,
      message: '请输入正确的验证码'
    })
  }
  const newComment = new Comment({
    _id: new mongoose.Types.ObjectId(),
    article_id: article_id,
    name: name,
    email: email,
    content: content
  })
  newComment
    .save()
    .then(result => {
      // console.log(result)
      res.status(201).json({
        message: 'Handling Create Comment.(创建评论成功)',
        createArticle: result
      })
    })
    .catch(err => {
      // console.log(err)
      res.status(500).json({
        error: err
      })
    })
  // res.json({
  //   form: req.body,
  //   session: req.session,
  //   revlidate: revlidate,
  // })
})

export default comment
