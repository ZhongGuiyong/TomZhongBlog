import { Router } from 'express'
import svgCaptcha from 'svg-captcha' // 引入验证码

const captcha = Router()

// 评论专用验证码
captcha.get('/comment_captcha', (req, res) => {
  const captcha = svgCaptcha.create()
  req.session.comment_captcha = captcha.text
  res.type('svg')
  res.status(200).send(captcha.data)
})

// 获取session中的会话
captcha.get('/get_all_captcha', (req, res) => {
  res.json({
    session: req.session
  })
})

export default captcha
