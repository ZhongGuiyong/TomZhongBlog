// 这里是数据库连接后做一些数据库初始化的工作
import Setting from '../../models/setting'
import SEO from '../../models/seo'

import mongoose from 'mongoose'

// 初始化网站设置
const initlizeSetting = async () => {
  let setting = await Setting.findOne().exec()
  let saveRes = null
  if (!setting) {
    setting = await new Setting({
      _id: new mongoose.Types.ObjectId(),
    })
    saveRes = await setting.save()
    console.log(saveRes)
  } else {
    // console.log(setting)
  }
}

// 初始化SEO选项
const initlizeSeo = async () => {
  let seo = await SEO.findOne().exec()
  let saveRes = null
  if (!seo) {
    seo = await new SEO({
      _id: new mongoose.Types.ObjectId(),
      seoArrays: [{
        name: 'index',
        tdk: {
          title: 'My blog | blog',
          description: 'wow'
        }
      }]
    })
    saveRes = await seo.save()
    console.log(saveRes)
  } else {
    // console.log(seo)
  }
}


export default async function initlizeMongoData () {
  await initlizeSetting()
  await initlizeSeo()
}