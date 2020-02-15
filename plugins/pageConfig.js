import Vue from 'vue'

/**
 * 常用全局配置
 */

export default ({ app }, inject) => {
  inject('$env', {
    ...process.env
  })
}
