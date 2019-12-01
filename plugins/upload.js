import * as qiniu from 'qiniu-js'
// import { hashPWd } from '@/plugins/serverPlugins/dealPwd'

import Vue from 'vue'
const upload = {}
upload.install = function(Vue) {
  Vue.prototype.$upload = (file, token) => {
    console.log('yeah')
    const config = {
      useCdnDomain: true,
      region: qiniu.region.z0
    }
    const putExtra = {
      fname: ''
    }
    // console.log(token)
    const key = null
    // console.log(file)

    return new Promise((resolve, reject) => {
      const observable = qiniu.upload(file, key, token, putExtra, config)
      observable.subscribe({
        next: result => {
          // 主要用来展示进度
          console.warn(result)
        },
        error: err => {
          console.log(err)
          console.log('上传图片失败')
          reject(err)
        },
        complete: res => {
          console.log(res)
          resolve(res)
        }
      })
    })
  }
}
Vue.use(upload)
