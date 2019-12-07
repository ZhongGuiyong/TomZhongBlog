import express from 'express'
import authHandler from './auth'
import articleHandler from './article'
import userHandler from './user'
import seoHandler from './seo'
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
router.use('/seo', seoHandler)

export default router
