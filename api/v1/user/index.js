import { Router } from 'express'
import mongoose from 'mongoose'
import User from '../../../models/user'
import { hashPwd, comparePwd } from '../../../plugins/serverPlugins/dealPwd'
const user = Router()

user.get('/', function(req, res, next) {
  User.find()
    .exec()
    .then(docs => {
      // console.log(docs)
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          return {
            name: doc.name,
            age: doc.age,
            _id: doc._id,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/v1/user/' + doc._id
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
user.get('/:id', function(req, res, next) {
  let id = req.params.id
  console.log(id)
  User.findById(id)
    .exec()
    .then(result => {
      // console.log(result)
      const response = {
        role: result.role,
        name: result.name,
        age: result.age,
        user_profile_photo: result.user_profile_photo,
        tel: result.tel,
        nickname: result.nickname
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
user.post('/reg', async function(req, res, next) {
  let name = req.body.name || ''
  let age = req.body.age || ''
  let email = req.body.email || ''
  let pwd = req.body.pwd || ''

  if (!email || !pwd ) {
    return res.status(403).json({
      message: '邮件或者密码未填写',
      status: 'failed'
    })
  }
  try {
    const users = await User.find({ email: email }).exec()
    // console.log(users)
    if (users && users.length >= 1) {
      res.status(409).json({
        message: '邮件已存在，请更换邮件再试',
        status: 'failed'
      })
      return
    } else {
      const hashedPwd = await hashPwd(pwd)
      const user = await new User({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        age: age,
        email: email,
        pwd: hashedPwd
      })
      const saveResult = await user.save()
      if (saveResult) {
        res.status(201).json({
          message: '创建用户成功',
          createUser: saveResult,
          status: 'ok'
        })
        return
      }
    }
    res.status(500).json({
      error: 'unknow error'
    })
  } catch (error) {
    res.status(500).json({
      error: error
    })
  }
})
user.post('/login', async function(req, res, next) {
  let email = req.body.email
  let pwd = req.body.pwd

  try {
    const userInfo = await User.find({ email: email }).select('role name age email pwd nickname user_profile_photo').exec()
    // console.log(userInfo);
    if (userInfo && userInfo.length < 1) {
      return res.status(401).json({
        message: '用户不存在或者用户密码填写错误，请重试！'
      })
    }
    const compareResult = await comparePwd(pwd, userInfo[0].pwd || '') // 对比数据库存储的密码，符合数据库的hash密码，返回true
    // console.log(compareResult);
    if (compareResult) {
      const { role, name, age, email, nickname, user_profile_photo } = (userInfo && userInfo[0]) || {};
      return res.status(200).json({
        message: 'Auth successful',
        status: 'ok',
        userProfile: {
          role,
          name,
          age,
          email,
          nickname,
          user_profile_photo
        }
      })
    } else {
      return res.status(401).json({
        message: '认证失败'
      })
    }
  } catch (error) {
    // console.log(error)
    return res.status(401).json({
      message: '认证失败',
      error: error,
    })
  }
})
user.delete('/:userId', (req, res, next) => {
  User.deleteOne({ _id: req.params.userId })
    .exec()
    .then(result => {
      console.log(result)
      res.status(200).json({
        message: 'User deleted!'
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
})
export default user
