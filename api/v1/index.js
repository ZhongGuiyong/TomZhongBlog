import express from 'express'
import LoginRouter from './login'
// Create express router
const router = express.Router()

router.get('/', function(req, res){
  res.json({
    apiVersion: 'v1',
    status: 'ok'
  })
  res.end(200)
})
router.use(LoginRouter);

export default router
