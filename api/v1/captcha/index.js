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

// 验证验证码
export const validateCaptcha = (req, key, vlaue) => {
  const sessionCaptcha = req.session[key] || false
  if (!sessionCaptcha) return false

  // 如果验证码没有错、清空验证码，前端重新刷新验证码
  if (sessionCaptcha.toLowerCase() === vlaue.toLowerCase()) {
    return true
  }

  req.session.comment_captcha = ''
}

export default captcha
