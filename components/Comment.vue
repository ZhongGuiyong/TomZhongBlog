<template>
  <div class="comments">
    <div>
      <h4 style="margin-bottom: 15px;">文章评论</h4>
      <b-form @submit="onSubmit" @reset="onReset" v-if="showCommentInput">
        <b-form-group id="input-email" label="你的邮箱" label-for="email">
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="输入你的邮箱"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-name" label="你的昵称" label-for="name">
          <b-form-input
            id="name"
            v-model="form.name"
            required
            placeholder="输入你的名字"
          ></b-form-input>
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
          <b-img src="/v1/captcha/comment_captcha" fluid alt="Responsive image" class="mb-10 captcha-img"></b-img>
          <b-form-input
            id="captcha"
            v-model="form.captcha"
            required
            placeholder="输入验证码"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">提交评论</b-button>
      </b-form>


      <b-card class="mt-3" header="评论内容预览" v-if="env === 'development'">
        {{env}}
        <pre class="m-0">{{ form }}</pre>
      </b-card>

    </div>

    <!-- <div class="comments-area mb-50">
      <h4 class="text-center mb-50">5个评论</h4>
      <div class="comment-list-wrapper">
        <div class="comment-list">
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
        </div>
        <div class="comment-list left-padding">
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
        </div>
      </div>
    </div> -->
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
        article_id: '',
      },
      env: this.$$env.NODE_ENV,
      showCommentInput: true
    }
  },
  methods: {
    async onSubmit(evt) {
      const image = document.querySelector('.captcha-img')
      evt.preventDefault()
      // console.log(this)
      this.form.article_id = this.article._id

      try {
        const res = await axios.post('/v1/comment', this.form)

        this.onReset()
        console.log(res)

        this.$bvToast.toast(`添加评论成功`, {
          title: '评论文章成功',
          autoHideDelay: 2000
        })
      } catch (error) {
        console.log(error)
      }
      image.src = `/v1/captcha/comment_captcha?${Math.random()}`
    },
    onReset() {
      this.form = {
        email: '',
        name: '',
        content: '',
        captcha: '',
        article_id: '',
      }
    }
  },
  mounted(){
    // console.log(this.$$env);
  },
  computed: {
    ...mapState({
      article: state => state.article.article
    })
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
