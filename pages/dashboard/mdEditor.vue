<template>
  <div>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
          <div>
            <div v-for="(item, key) in form.tags" :key="key">
              <span class="tag label label-info">
                {{item}}
                <span data-role="remove" @click="deleteKeys(key)">删除</span>
              </span>
            </div>
            <b-form-input id="input-2" v-model="tag" placeholder="标签" @keyup.enter="dealTag"></b-form-input>
          </div>
        </b-form-group>

        <markdownEditor @getvalue="getValue" />

        <b-form-group id="input-group-4" class="mt-3">
          <b-form-checkbox id="checkbox-1" v-model="form.publish_status" name="checkbox-1">确认发布</b-form-checkbox>
        </b-form-group>

        <div class="mt-3">
          <b-button type="submit" variant="primary">Submit</b-button>
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
import markdownEditor from '~/components/markdownEditor'
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
        content: ''
      },
      tag: '',
      type: [
        { text: '请选择一个类型咯', value: null },
        '生活杂谈',
        '技术',
        '人生感悟'
      ],

      show: true
    }
  },
  components: {
    markdownEditor
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      const token = Cookie.get('auth')
      this.$axios.setToken(token, 'Bearer', ['post', 'get'])
      const res = this.$axios.$post('http://localhost:3000/v1/article', this.form)
      console.log(res)
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
      console.log(this.tag)
      this.form.tags.push(this.tag)
      this.tag = ''
    },
    deleteKeys(index) {
      this.form.tags.splice(index, 1)
    },
    getValue(payload) {
      console.log(payload.render)
      this.form.mdContent = payload.val
      this.form.parseContent = payload.render
      this.form.content = payload.render
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
</style>
