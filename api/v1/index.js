import express from 'express'
import authHandler from './auth'
import articleHandler from './article'
import userHandler from './user'
// Create express router
const router = express.Router()

router.get('/', function(req, res){
  res.json({
    apiVersion: 'v1',
    status: 'ok'
  })
  res.end(200)
})
router.use(authHandler)
router.use('/article', articleHandler)
router.use('/user', userHandler)

export default router
