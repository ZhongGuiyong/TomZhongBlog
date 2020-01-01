<template>
  <div>
    <!-- Banner图 -->
    <section class="banner d-flex align-items-center">
      <div class="overlay"></div>
      <div class="container">
        <div class="title row justify-content-center">
          <div class="text-center">
            <h1 class="text-white mb-30">有时间多看看这个世界，而不是宅着。</h1>
            <p class="text-white mt-30">做人总是有感觉无聊和空虚的时候，那么这个时候我们为什么找一些事情来充实自己呢？</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Blog类型 -->
    <!-- <section class="category pt-20 pb-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="mb-20">类型</h2>
          </div>
          <div class="col-lg-4 pb-10">
            <div class="single-cat-widget">
              <div class="relative">
                <div class="overlay overlay-bg"></div>
                <a href="#">
                  <div class="thumb">
                    <img class="w-100" src="/img/blog/cat-widget1.jpg" alt />
                  </div>
                  <div
                    class="content-details d-flex flex-column justify-content-center alig-items-center text-center"
                  >
                    <h4 class="text-white mb-10">旅行日子</h4>
                    <span class="border-1px ml-10 mr-10"></span>
                    <p class="text-white mt-10">每一段旅程，都是值得纪念和回忆的！</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 pb-10">
            <div class="single-cat-widget">
              <div class="relative">
                <div class="overlay overlay-bg"></div>
                <a href="#">
                  <div class="thumb">
                    <img class="w-100" src="/img/blog/cat-widget1.jpg" alt />
                  </div>
                  <div
                    class="content-details d-flex flex-column justify-content-center alig-items-center text-center"
                  >
                    <h4 class="text-white mb-10">旅行日子</h4>
                    <span class="border-1px ml-10 mr-10"></span>
                    <p class="text-white mt-10">每一段旅程，都是值得纪念和回忆的！</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 pb-10">
            <div class="single-cat-widget">
              <div class="relative">
                <div class="overlay overlay-bg"></div>
                <a href="#">
                  <div class="thumb">
                    <img class="w-100" src="/img/blog/cat-widget1.jpg" alt />
                  </div>
                  <div
                    class="content-details d-flex flex-column justify-content-center alig-items-center text-center"
                  >
                    <h4 class="text-white mb-10">旅行日子</h4>
                    <span class="border-1px ml-10 mr-10"></span>
                    <p class="text-white mt-10">每一段旅程，都是值得纪念和回忆的！</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Blog最新内容 -->
    <section class="post-content-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 posts-list">
            <div class="single-post row mb-40" v-for="(item,index) in list.articles" :key="index">
              <div class="col-lg-3 col-md-3 meta-details mt-30">
                <ul class="tags mb-30">
                  <li v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex">
                    <a href="#">{{ tagItem }}</a>,
                  </li>
                  <!-- <li>
                    <a href="#">旅行,</a>
                  </li>
                  <li>
                    <a href="#">旅行</a>
                  </li>-->
                </ul>
                <div class="user-details row">
                  <p class="user-name col-lg-12 col-md-12 col-6 mb-10">
                    <font-awesome-icon icon="user" class="icon" />
                    <a
                      href="#"
                      class="mr-10"
                    >{{ item.doc.author && item.doc.author.name || 'unknown author' }}</a>
                  </p>
                  <p class="user-name col-lg-12 col-md-12 col-6 mb-10">
                    <font-awesome-icon icon="calendar-day" class="icon" />
                    <a href="#" class="mr-10">2018年12月17日</a>
                  </p>
                  <p class="user-name col-lg-12 col-md-12 col-6 mb-10">
                    <font-awesome-icon icon="eye" class="icon" />
                    <a href="#" class="mr-10">{{ item.view_count || item.doc.view_count || 0 }}次被观看</a>
                  </p>
                  <p class="user-name col-lg-12 col-md-12 col-6 mb-10">
                    <font-awesome-icon icon="comment" class="icon" />
                    <a
                      href="#"
                      class="mr-10"
                    >{{ item.comment_count || item.doc.comment_count || 0 }}次评论</a>
                  </p>
                </div>
              </div>
              <div class="col-lg-9 col-md-9">
                <div class="feature-img">
                  <img class="w-100" src="/img/blog/feature-img1.jpg" alt />
                </div>
                <div class="posts-title">
                  <h3 class="font-weight-bold mt-20 mb-20">{{ item.title || '' }}</h3>
                </div>
                <div class="excert">{{ item.desc || '' }}</div>
                <a :href="'/details/' + item._id + '/' + item.title" class="primary-btn mt-20">查看详情</a>
              </div>
            </div>
            <div class="blog-pagination d-flex justify-content-center pt-60 pb-120">
              <b-pagination
                v-model="list.pagination.current"
                :total-rows="list.pagination.totalDataCount"
                :per-page="list.pagination.showDataCount"
                :hide-goto-end-buttons="true"
                class="mt-4"
                @change="changeList"
              >
                <template v-slot:prev-text>
                  <font-awesome-icon icon="chevron-left" class="icon" />
                </template>
                <template v-slot:next-text>
                  <font-awesome-icon icon="chevron-right" class="icon" />
                </template>
                <template v-slot:page="{ page, active }">
                  <b v-if="active">{{ page }}</b>
                  <i v-else>{{ page }}</i>
                </template>
              </b-pagination>
            </div>
          </div>
          <SiderBar />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { getArticleList } from '@/utils/getInfo'
import { mapState } from 'vuex'
import SiderBar from '@/components/SideBar'
export default {
  layout: 'default',
  components: {
    SiderBar
  },
  // watchQuery: true,
  data() {
    return {
      name: 'blog_home',
      totalRows: 100,
      perPage: 10,
      currentPage: 1,
      list: {
        articles: [],
        pagination: {
          totalDataCount: 0,
          current: 1,
          showDataCount: 5
        }
      },
      seoOption: {

      },
    }
  },
  async asyncData(context) {
    // console.log(req)
    const { req = {} } = context
    const { query = {} } = req
    const { p = 1 } = query
    const routePath = context.app.router.history.current.name
    // console.log(context.app.router.history.current.name)
    const seoOption = context.app.store.state && context.app.store.state.seo && context.app.store.state.seo.seo.seoArrays || {}
    // console.log(context.app.store.state.seo.seo)
    let seoResult = {}
    seoOption.map(item=> {
      // console.log(item)
      if (item.name === routePath ) {
        seoResult = item.tdk
      }
    })
    const list = await getArticleList(p, 5, '', '')
    // console.log(list)
    return {
      list: list,
      seoOption: seoResult,
    }
  },
  methods: {
    async changeList(val) {
      location.search = `?p=${val}`
    }
  }
}
</script>
<style lang="less">
.page-item.active .page-link {
  background-color: #8490ff;
  border-color: #eee;
}
/* banner */
.banner {
  height: calc(100vh - 70px);
  background: url('/img/home-bg.jpg') center;
  background-repeat: no-repeat;
  @media screen and (min-width: 1300px) {
    background-size: cover;
  }
}
.banner .overlay {
  /* background: rgba(0, 0, 0, 0.2); */
}
.banner h1 {
  margin: 0 auto;
  font-size: 48px;
  max-width: 500px;
}
.banner .title {
  position: relative;
}
.banner p {
  font-size: 20px;
}
@media screen and (max-width: 576px) {
  .banner {
    background-position: 75% center;
  }
}

/* category */
.category {
  background-color: #f9f9ff;
}
.category .overlay-bg {
  margin: 7%;
  background: rgba(0, 0, 0, 0.85);
}
@media screen and (min-width: 578px) {
  .category {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}

.category .single-cat-widget .content-details {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 7%;
}
.category .single-cat-widget .separator {
  height: 1px;
  background-color: #fff;
}

.border-1px {
  position: relative;
}

.border-1px::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
  border: 1px solid #eee;
  color: #eee;
  height: 200%;
  -webkit-transform-origin: left top;
  transform-origin: left top;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  pointer-events: none; /* 防止点击触发 */
  box-sizing: border-box;
}
@media screen and (min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2) {
  .border-1px::before {
    width: 200%;
    height: 200%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
}
@media screen and (min-device-pixel-ratio: 3),
  (-webkit-min-device-pixel-ratio: 3) {
  .border-1px::before {
    width: 300%;
    height: 300%;
    -webkit-transform: scale(0.33);
    transform: scale(0.33);
  }
}

/* post-content */
.post-content-area {
  background-color: #f9f9ff;
  padding-top: 40px;
}
.post-content-area .single-post a:hover {
  color: #8490ff;
}
.post-content-area .single-post .meta-details {
  text-align: left;
  margin-top: 35px;
}
@media screen and (min-width: 991px) {
  .post-content-area .single-post .meta-details {
    text-align: right;
  }
}
.post-content-area .single-post .meta-details .tags {
  font-size: 0;
}
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
.post-content-area .single-post .primary-btn {
  background: #fff !important;
  color: #222 !important;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  border-radius: 0px !important;
}
.post-content-area .single-post .primary-btn:hover {
  background: #8490ff !important;
  color: #fff !important;
}
.primary-btn {
  background: #8490ff;
  line-height: 42px;
  padding-left: 30px;
  padding-right: 30px;
  border: none;
  color: #fff;
  display: inline-block;
  font-weight: 500;
  position: relative;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  position: relative;
}
@media screen and (min-width: 991px) {
  .post-content-area .single-post .user-details p {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: center;
    text-align: right;
  }
}
.blog-pagination .page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #777777;
  border: none;
  background: transparent;
}
.blog-pagination .page-link .lnr {
  font-weight: 600;
}

.blog-pagination .page-item:last-child .page-link,
.blog-pagination .page-item:first-child .page-link {
  border-radius: 0;
}

.blog-pagination .page-link:hover {
  color: #fff;
  text-decoration: none;
  background-color: #8490ff;
  border-color: #eee;
}

.blog-pagination .page-link:active,
.blog-pagination .page-link:focus,
.blog-pagination .page-link:active {
  outline: none;
}

</style>
