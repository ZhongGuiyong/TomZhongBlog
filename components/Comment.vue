<template>
  <div class="comments">
    <div>
      <h4 style="margin-bottom: 15px;">文章评论</h4>
      <b-form @submit="onSubmit" @reset="onReset" v-if="showCommentInput">
        <b-form-group id="input-email" label="你的邮箱" label-for="email">
          <b-form-input
            id="email"
            :state="emailState"
            v-model="form.email"
            type="email"
            required
            placeholder="输入你的邮箱"
            aria-describedby="input-live-help input-live-feedback-email"
            trim
          ></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback-email">
           请输入正确的邮箱
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="input-name" label="你的昵称" label-for="name">
          <b-form-input
            id="name"
            :state="nameState"
            v-model="form.name"
            required
            placeholder="输入你的昵称"
            aria-describedby="input-live-help input-live-feedback-name"
          ></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
           请至少输入3个字符
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="input-comment" label="你的评论" label-for="textarea">
          <b-form-textarea
            id="textarea"
            v-model="form.content"
            placeholder="输入你的评论"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <!-- 验证码 -->
        <b-form-group id="input-captcha" label="验证码" label-for="captcha">
          <b-img
            src="/v1/captcha/comment_captcha"
            fluid
            alt="Responsive image"
            class="mb-10 captcha-img"
          ></b-img>
          <b-form-input
            id="captcha"
            v-model="form.captcha"
            required
            placeholder="输入验证码"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" :disabled="uiControl.disableSubmitBtn">提交评论</b-button>
      </b-form>

      <b-card class="mt-3" header="评论内容预览" v-if="env === 'development'">
        {{ env }}
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>

    <!-- 已产生评论区 -->
    <div class="comments-area mb-50">
      <h4 class="text-center mb-50">{{ pagination.total }}个评论</h4>
      <div class="comment-list-wrapper">
        <div class="comment-list">
          <div
            class="single-comment d-flex justify-content-between"
            v-for="(item, index) in commentArr"
            :key="index"
          >
            <div class="user d-flex justify-content-between">
              <div class="thumb mr-20">
                <img src="/img/blog/c1.jpg" alt />
              </div>
              <div class="desc">
                <h5>
                  <a href="#">{{ item.name || '匿名用户' }}</a>
                </h5>
                <p>2018年12月12日</p>
                <p class="comment">{{ item.content }}</p>
              </div>
            </div>
            <!-- <div>
              <a href="#" class="btn-reply">快速回复</a>
            </div> -->
          </div>
        </div>
        <!-- <div class="comment-list left-padding">
          <div class="single-comment d-flex justify-content-between">
            <div class="user d-flex justify-content-between">
              <div class="thumb mr-20">
                <img src="/img/blog/c1.jpg" alt />
              </div>
              <div class="desc">
                <h5>
                  <a href="#">大贵</a>
                </h5>
                <p>2018年12月12日</p>
                <p class="comment">永远不要轻易说再见</p>
              </div>
            </div>
            <div>
              <a href="#" class="btn-reply">快速回复</a>
            </div>
          </div>
        </div> -->
      </div>
      <b-button @click="loadMoreComment" v-if="!uiControl.hideLoadMoreBtn"
        >加载更多评论</b-button
      >
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        content: '',
        captcha: '',
        article_id: ''
      },
      env: this.$$env.NODE_ENV,
      showCommentInput: true,
      pagination: {
        page: 1,
        limit: 3,
        total: 0
      },
      commentArr: [],
      uiControl: {
        hideLoadMoreBtn: false,
        disableSubmitBtn: false,
      }
    }
  },
  methods: {
    async onSubmit(evt) {
      const image = document.querySelector('.captcha-img') // 获取验证码图片用以更新url
      evt.preventDefault()

      const { email, name, content, captcha } = this.form
      if (!email || !name || !content || !captcha) {
        this.$bvToast.toast(`请输入正确的评论内容`, {
          title: '没有输入正确的评论内容噢亲！',
          autoHideDelay: 2000,
          toaster: 'b-toaster-bottom-center'
        })
        return
      }

      this.uiControl.disableSubmitBtn = true

      // console.log(this)
      this.form.article_id = this.article._id

      try {
        const res = await axios.post('/v1/comment', this.form)

        this.onReset()
        // console.log(res)

        this.$bvToast.toast(`添加评论成功`, {
          title: '评论文章成功',
          autoHideDelay: 2000
        })
        this.$store.commit('article/updateArticle', { commentCount: 1 })
        this.pagination.total += 1
        // console.log(res.data.result);
        // 创建结果直接插入评论第一条
        this.commentArr.unshift(res.data.result)
      } catch (error) {
        if(error.message.indexOf('406') !== -1) {
          this.$bvToast.toast(`请输入正确的验证码`, {
            title: '验证码输错了亲！',
            autoHideDelay: 2000,
            toaster: 'b-toaster-bottom-center',
          })
        } else {
          this.$bvToast.toast(`服务器错误`, {
            title: '请稍后再试，亲！',
            autoHideDelay: 2000,
            toaster: 'b-toaster-bottom-center',
          })
        }
      }

      this.uiControl.disableSubmitBtn = false

      image.src = `/v1/captcha/comment_captcha?${Math.random()}`
    },
    onReset() {
      this.form = {
        email: '',
        name: '',
        content: '',
        captcha: '',
        article_id: ''
      }
    },
    // 加载评论
    async getCommnets(page, limit) {
      try {
        const res = await axios.get(
          `/v1/comment/${this.article._id}?pageIndex=${page}&pageLimit=${limit}`
        )
        // console.log(res)
        const { pagination = null, commentArray = [] } = res.data || {}
        if (commentArray.length === 0) {
          this.$bvToast.toast(`评论已经全部加载完毕`, {
            title: '没有评论可加载了亲(づ￣3￣)づ╭❤～！',
            autoHideDelay: 2000
          })
          this.uiControl.hideLoadMoreBtn = true
          return
        }
        this.commentArr = this.commentArr.concat(commentArray)
        pagination && (this.pagination = { ...pagination })
      } catch (error) {
        alert(error)
      }
    },
    // 加载更多评论
    loadMoreComment() {
      let { page, limit, total } = this.pagination

      // 如果连续两个数都大于总和，那么就不再请求了
      if ((page + 1) * limit > total && page * limit > total) {
        this.$bvToast.toast(`评论已经全部加载完毕`, {
          title: '没有评论可加载了亲(づ￣3￣)づ╭❤～！',
          autoHideDelay: 2000,
          toaster: 'b-toaster-bottom-center'
        })
        this.uiControl.hideLoadMoreBtn = true
        return
      }

      this.pagination.page = page + 1
      this.getCommnets(this.pagination.page, limit)
    }
  },
  async mounted() {
    const { page, limit } = this.pagination
    this.getCommnets(page, limit)
  },
  computed: {
    ...mapState({
      article: state => state.article.article
    }),
    nameState() {
      if (this.form.name === '') return null
      return this.form.name.length > 2 ? true : false
    },
    emailState() {
      if (this.form.email === '') return null
      return this.form.email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) ? true : false
    },
  }
}
</script>
<style>
.comments-area {
  background: #fafaff;
  border: 1px solid #eee;
  padding: 50px 20px;
  margin-top: 50px;
}
.comments-area .comment-list {
  padding-bottom: 30px;
}
.comments-area .single-comment h5 > a {
  color: #222;
}
.comments-area .single-comment .comment {
  color: #777;
}
.comments-area .btn-reply {
  background-color: #fff;
  color: #222;
  border: 1px solid #eee;
  padding: 8px 20px;
  display: block;
  font-weight: 600;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.comments-area .btn-reply:hover {
  background-color: #8490ff;
  color: #fff;
}
.comments-area .comment-list.left-padding {
  padding-left: 25px;
}
</style>
