import { Router } from 'express'

const comment = Router()

// 插入评论
comment.post('/', (req, res) => {
  res.json({
    form: req.body,
    session: req.session
  })
})


export default comment
