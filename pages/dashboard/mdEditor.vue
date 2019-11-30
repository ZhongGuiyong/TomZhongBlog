<template>
  <div>
    <div>
      <b-form @submit.stop.prevent @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="文章标题"
          label-for="input-1"
          description="请输入您的文章标题"
        >
          <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            placeholder="文章标题"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="文章描述" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.desc"
            placeholder="文章描述"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="文章类型" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.type"
            :options="type"
          ></b-form-select>
        </b-form-group>

        <b-form-group label="输入你想要的标签" label-for="input-3">
          <!-- <div>
            <div v-for="(item, key) in form.tags" :key="key">
              <span class="tag label label-info">
                {{item}}
                <span data-role="remove" @click="deleteKeys(key)">删除</span>
              </span>
            </div>
            <b-form-input id="input-2" v-model="tag" placeholder="标签" @keydown.enter="dealTag"></b-form-input>
          </div> -->
          <no-ssr>
            <vue-tags-input
              v-model="tag"
              :tags="form.tags"
              @tags-changed="newTags => (form.tags = newTags)"
            />
          </no-ssr>
        </b-form-group>

        <!-- <markdownEditor @getvalue="getValue" />
        <client-only>
          <ckeditor
            :editor="editor"
            v-model="form.content"
            :config="editorConfig"
          ></ckeditor>
        </client-only> -->
        <div class="hello">
          <vue-ueditor-wrap
            v-model="form.content"
            :config="config"
            :key="ueditor"
            @ready="ready"
          />
          <div class="preview" @click="showData" v-html="form.content" />
        </div>
        <b-form-group id="input-group-4" class="mt-3">
          <b-form-checkbox
            id="checkbox-1"
            v-model="form.publish_status"
            name="checkbox-1"
            >确认发布</b-form-checkbox
          >
        </b-form-group>

        <div class="mt-3">
          <b-button type="submit" variant="primary" @click="onSubmit"
            >提交</b-button
          >
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
      </b-form>

      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </div>
</template>

<script>
// import markdownEditor from '~/components/markdownEditor'

// let ClassicEditor
// if (process.browser) {
//   ClassicEditor = require('@ckeditor/ckeditor5-build-decoupled-document')
// }
import VueUeditorWrap from 'vue-ueditor-wrap' // ES6 Module
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  data() {
    return {
      form: {
        author: '5d3fe975e5097b17097fa118',
        title: '',
        desc: '',
        type: null,
        publish_status: false,
        tags: [],
        mdContent: '',
        parseContent: '',
        content: '<p>Content of the editor.</p>'
      },
      tag: '',
      type: [
        { text: '请选择一个类型咯', value: null },
        '生活杂谈',
        '技术',
        '人生感悟'
      ],

      show: true,

      // editor: ClassicEditor || null,
      // editorData: '',
      // editorConfig: {
      //   // The configuration of the editor.
      // }
      msg:
        '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
      // 4、根据项目需求自行配置,具体配置参见ueditor.config.js源码或 http://fex.baidu.com/ueditor/#start-start
      config: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 240,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: 'http://35.201.165.105:8000/controller.php',
        // UEditor 资源文件的存放路径，通常Nuxt项目设置为/UEditor/即可，但是由于这个演示项目需要部署至GitHub Pages，需要区分构建情景
        // 这里的process.env.BASE_URL是通过cross-env和webpack.DefinePlugin定义的，具体查看 package.json中的scripts和nuxt.config.js
        // 如果你的项目像 GitHub Pages 这样，不是在网站根目录下，可以借鉴这种做法，参考链接 https://zh.nuxtjs.org/faq/github-pages
        UEDITOR_HOME_URL: `${process.env.BASE_URL}UEditor/`
        // 配合最新编译的资源文件，你可以实现添加自定义Request Headers,详情https://github.com/HaoChuan9421/ueditor/commits/dev-1.4.3.3
        // headers: {
        //   access_token: '37e7c9e3fda54cca94b8c88a4b5ddbf3'
        // }
      }
    }
  },
  mounted() {},
  destroyed() {},
  components: {
    // // markdownEditor,
    // ClassicEditor,
    VueUeditorWrap
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      // alert(JSON.stringify(this.form))
      this.form.tags = this.form.tags.map(item => item.text || '')
      const token = Cookie.get('auth')
      this.$axios.setToken(token, 'Bearer', ['post', 'get'])
      const res = this.$axios.$post('/v1/article', this.form)
      // console.log(res)
      return false
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    dealTag(evt) {
      // if (this.tag === '') {
      //   return
      // }
      evt.preventDefault()
      // console.log(this.tag)
      this.form.tags.push(this.tag)
      this.tag = ''
      return false
    },
    deleteKeys(index) {
      this.form.tags.splice(index, 1)
    },
    getValue(payload) {
      // console.log(payload.render)
      this.form.mdContent = payload.val
      this.form.parseContent = payload.render
      this.form.content = payload.render
    },
    ready(editorInstance) {
      // console.log(`实例${editorInstance.key}已经初始化:`, editorInstance)
    },
    showData() {
      // console.log(this.msg)
    },
  }
}
</script>

<style>
.label {
  display: inline;
  padding: 0.2em 0.6em 0.3em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;
}
.tag {
  margin-right: 2px;
  color: white;
}
.tag [data-role='remove'] {
  margin-left: 8px;
  cursor: pointer;
}
.label-info {
  background-color: #5bc0de;
}
.preview {
  min-height: 150px;
}
</style>
