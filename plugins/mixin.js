import Vue from 'vue'

/**
 * 这里是常用的一些mixin
 */

export default ({ app }, inject) => {
  inject('seonow', (title, content, payload = []) => {
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content
        }
      ].concat(payload)
    }
  })
}
