import { Router } from 'express'
import mongoose from 'mongoose'
import SEO from '../../../models/seo'
const seo = Router()

seo.get('/', function(req, res, next) {
  SEO.find()
    .exec()
    .then(docs => {
      console.log(docs)
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
seo.post('/', async function(req, res, next) {''
  let seo = req.body.seoArrays || {}
  console.log(req.body.seoArrays);
  let saveResult = null
  try {
    let seoDocs = await SEO.findOne()
    // seoDocs.seoArrays = seo;
    // console.log(seoDocs)
    if (!seoDocs) {
      seoDocs = new SEO({
        _id: new mongoose.Types.ObjectId(),
        seoArrays: seo
      })
      saveResult = await seoDocs.save()
      // console.log(saveResult);
    } else {
      // seoDocs.seoArrays = seo
      // saveResult = await seoDocs.save()
      // saveResult = await seoDocs.updateOne({}, { '$push':{ seoArrays : { name: '111', tdk: { title: 'gaga', description: 'wow' } } } });
      // console.log(saveResult)
      seoDocs.overwrite({seoArrays: seo})
      saveResult = await seoDocs.save()
    }
    
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
export default seo
