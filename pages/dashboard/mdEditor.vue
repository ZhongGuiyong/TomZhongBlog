<template>
  <div>
    <div>
      <b-form @submit.stop.prevent @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="文章标题" label-for="input-1" description="请输入您的文章标题">
          <b-form-input id="input-1" v-model="form.title" type="text" placeholder="文章标题"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="文章描述" label-for="input-2">
          <b-form-input id="input-2" v-model="form.desc" placeholder="文章描述"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="文章类型" label-for="input-3">
          <b-form-select id="input-3" v-model="form.type" :options="type"></b-form-select>
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
          </div>-->
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
        </client-only>-->
        <div class="hello">
          <vue-ueditor-wrap
            v-model="form.content"
            :config="config"
            @ready="ready"
            @beforeInit="addCustomUI"
          />
          <div class="preview" @click="showData" v-html="getHtml" />
        </div>
        <b-form-group id="input-group-4" class="mt-3">
          <b-form-checkbox id="checkbox-1" v-model="form.publish_status" name="checkbox-1">确认发布</b-form-checkbox>
        </b-form-group>

        <div class="mt-3">
          <b-button type="submit" variant="primary" @click="onSubmit">提交</b-button>
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
import VueUeditorWrap from 'vue-ueditor-wrap' // ES6 Module
const Cookie = process.client ? require('js-cookie') : undefined
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
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
  computed: {
    getHtml() {
      const val = this.form.content

      // 但内容变化时，等待更新后再渲染DOM和高亮代码
      this.$nextTick(() => {
        if (process.client) {
          let blocks = document.querySelectorAll('pre code')
          for (let i = 0; i < blocks.length; i++) {
            hljs.highlightBlock(blocks[i])
          }
        }
      })
      
      return val
    }
  },
  components: {
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

    // 7. 借助 beforeInit 钩子，你可以实现对 UEditor 的二次开发，会在 scripts 加载完毕之后、编辑器初始化之前触发，以 编辑器 id 和 配置参数 作为入参
    addCustomUI(editorId, editorConfig) {
      const _that = this
      console.log(
        editorId + '的配置参数是:',
        JSON.stringify(editorConfig, null, 2)
      )

      // 1. 自定义按钮
      window.UE.registerUI(
        'upload-button' + editorId,
        function(editor, uiName) {
          // 注册按钮执行时的 command 命令，使用命令默认就会带有回退操作
          editor.registerCommand(uiName, {
            execCommand: function() {}
          })
          const timestrap = (+new Date()).toString(36)
          var w = 20,
            h = 20,
            btnStyle =
              'display:none;width:' +
              w +
              'px;height:' +
              h +
              'px;overflow:hidden;border:0;margin:0;padding:0;position:absolute;top:0;left:0;filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity: 0;opacity: 0;cursor:pointer;'
          var form = document.createElement('form')
          var input = document.createElement('input')
          form.id = 'edui_form_' + timestrap
          form.enctype = 'multipart/form-data'
          form.style = btnStyle
          input.id = 'edui_input_' + timestrap
          input.type = 'file'
          input.accept = 'image/*'
          input.name = 'image-upload'
          input.style = btnStyle

          form.appendChild(input)
          // document.appendChild(form);
          // 创建一个 button
          var btn = new window.UE.ui.Button({
            // 按钮的名字
            name: uiName,
            // 提示
            title: '添加图片',
            // 需要添加的额外样式，可指定 icon 图标，图标路径参考常见问题 2
            cssRules: `background-image: url('${process.env.BASE_URL}upload.jpg') !important;background-size: cover;`,
            // 点击时执行的命令
            onclick: function() {
              // 这里可以不用执行命令，做你自己的操作也可
              console.log('打开文件候选框')
              input.click()
              // editor.execCommand(uiName)
            }
          })
          console.log(btn)
          // btn.appendChild(form)

          input.addEventListener('change', async function(event) {
            if (!input.value) return
            const file = this.files[0]
            console.log(file)
            console.log(_that.$upload)
            const tokenQuery = '/api/uptoken'
            const { uptoken } = await _that.$axios.$get(tokenQuery)
            _that.$bvToast.toast(`图片正在上传，请耐心等待`, {
              title: '图片上传中',
              autoHideDelay: 5000
            })
            const { url } = await _that.$upload(file, uptoken)
            // this.$upload(file);
            _that.$bvToast.toast(`上传完成`, {
              title: '图片上传完成',
              autoHideDelay: 5000
            })
            editor.execCommand('inserthtml', `<img src="${url}"/>`)
            // await upload(file)
          })

          // 当点到编辑内容上时，按钮要做的状态反射
          editor.addListener('selectionchange', function() {
            var state = editor.queryCommandState(uiName)
            if (state === -1) {
              btn.setDisabled(true)
              btn.setChecked(false)
            } else {
              btn.setDisabled(false)
              btn.setChecked(state)
            }
          })

          // 因为你是添加 button，所以需要返回这个 button
          return btn
        },
        0 /* 指定添加到工具栏上的哪个位置，默认时追加到最后 */,
        editorId /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */
      )
    }
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
