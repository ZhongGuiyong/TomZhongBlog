<template>
  <div class="post-content-area">
    <div class="single-post row">

      <!-- 文章封面图 -->
      <div class="col-lg-12">
        <div class="feature-img">
          <img
            class="img-fluid"
            :src="
              article.poster ? article.poster : '/img/blog/feature-img1.jpg'
            "
            :alt="article.title ? article.title : ''"
            style="border: 1px solid #eee;"
          />
        </div>
      </div>

      <!-- 文章标题 -->
      <div class="col-lg-12 col-md-12 mt-20 mb-20">
        <div class="posts-title">
          <h3 class="font-weight-bold">{{ article.title ? article.title : '未知标题' }}</h3>
        </div>
      </div>

      <!-- 文章相关信息 -->
      <div class="col-lg-12 col-md-12 meta-details">
        <div class="article-tags d-flex flex-row align-items-center mb-30">
          <font-awesome-icon icon="tag" class="icon mr-10"/>
          <ul class="tags">
            <li v-for="(item, index) in article.tags" :key="index" style="margin-right: 3px;">
              <a href="#">{{ item }}</a>
            </li>
            <!-- <li>
              <a href="#">旅行,</a>
            </li>
            <li>
              <a href="#">旅行</a>
            </li>-->
          </ul>
        </div>
        <div class="user-details row">
          <p class="user-name col-lg-3 col-md-3 col-6 mb-10">
            <font-awesome-icon icon="user" class="icon" />
            <a href="#" class="ml-10">{{ article.author.name }}</a>
          </p>
          <p class="user-name col-lg-3 col-md-3 col-6 mb-10">
            <font-awesome-icon icon="calendar-day" class="icon" />
            <a href="#" class="ml-10">{{ article.updateTime | formateDate }}</a>
          </p>
          <p class="user-name col-lg-3 col-md-3 col-6 mb-10">
            <font-awesome-icon icon="eye" class="icon" />
            <a href="#" class="ml-10">{{ article.view_count || 0 }}次被浏览</a>
          </p>
          <p class="user-name col-lg-3 col-md-3 col-6 mb-10">
            <font-awesome-icon icon="comment" class="icon" />
            <a href="#" class="ml-10">{{ article.comment_count || 0 }}次评论</a>
          </p>
        </div>
      </div>

      <!-- 文章描述 -->
      <div class="col-lg-12 col-md-12">
        <div class="excert">{{ article.desc || '' }}</div>
      </div>

      <!-- 文章内容 -->
      <div class="col-lg-12 content" v-html="article.content"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { getYYMMDD } from '@/utils/formatDate'
export default {
  // 使用head方法更好处理meta标签
  head() {
    // console.log(this.$router.history.current)
    const article = this.article
    // console.log(metaInfo)
    return {
      title: '大贵 | 生活与技术分享 | ' + article.title || '',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: article.desc || ''
        },
        { charset: 'utf-8' },
        { 'http-equiv': 'pragma', content: 'no-cache' },
        { 'http-equiv': 'cache-control', content: 'no-cache' },
        { 'http-equiv': 'expires', content: '0' },
        { content: 'telephone=no', name: 'format-detection' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href:
            '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/styles/atom-one-dark.min.css'
        }
      ],
      script: [
        {
          src:
            '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/highlight.min.js',
          async: true,
          defer: true
        },
      ]
    }
  },
  data() {
    return {
      showNavBtn: true
    }
  },
  mounted() {
    // console.log(this)
    window.addEventListener('load', event => {
      console.log('Render the script')
      document.querySelectorAll('pre code').forEach(block => {
        hljs.highlightBlock(block)
      })
    })
  },
  filters: {
    formateDate(date) {
      return getYYMMDD(date)
    }
  },
  computed: {
    ...mapState({
      article: state => state.article.article
    })
  },
}
</script>
<style>
/* post-content */
.post-content-area {
  background-color: #f9f9ff;
  /* padding-bottom: 80px; */
}
.post-content-area .single-post a:hover {
  color: #8490ff;
}
.post-content-area .single-post .meta-details {
  text-align: left;
}
@media screen and (min-width: 991px) {
  .post-content-area .single-post .meta-details {
    /* text-align: right; */
  }
}
/* .post-content-area .single-post .meta-details .tags {
  font-size: 0;
} */
.post-content-area .single-post .meta-details .tags li {
  display: inline-block;
  font-size: 14px;
}
.post-content-area .single-post a {
  color: #777;
}
.post-content-area .single-post .meta-details .tags li a {
  color: #222;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.post-content-area img {
  max-width: 100%;
  height: auto;
  border: 1px solid #eee;
}
.post-content-area .single-post .quotes {
  margin-top: 20px;
  padding: 30px;
  background-color: white;
  box-shadow: -20.84px 21.58px 30px 0px rgba(176, 176, 176, 0.1);
}
.post-content-area .excert {
  background: #2d2d2d;
  color: #fff;
  padding: 10px 10px;
  border-radius: 3px;
  margin: 10px 0 30px 0;
  -webkit-font-smoothing: antialiased;
}
.post-content-area .content p {
  font-size: 16px;
}
@media screen and (min-width: 991px) {
  .post-content-area .single-post .user-details p {
    display: flex;
    /* flex-direction: row-reverse; */
    justify-content: flex-start;
    align-items: center;
    /* text-align: right; */
  }
}
</style>
