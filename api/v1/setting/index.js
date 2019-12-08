import { Router } from 'express'
import mongoose from 'mongoose'
import SETTING from '../../../models/setting'
const setting = Router()

setting.get('/', function(req, res, next) {
  SETTING.find()
    .exec()
    .then(docs => {
      // console.log(docs)
      const response = {
        seo: docs[0],
        status: 'ok'
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
setting.post('/', async function(req, res, next) {
  let articleType = req.body.articleType || []
  let tags = req.body.tags || []
  let saveResult = null
  try {
    let settingDoc = await SETTING.findOne()
    settingDoc.overwrite({
      articleType: articleType,
      tags: tags
    })
    saveResult = await settingDoc.save()
    if (saveResult) {
      res.status(201).json({
        message: '修改SEO成功',
        updateResult: saveResult,
        status: 'ok'
      })
      return
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
export default setting
