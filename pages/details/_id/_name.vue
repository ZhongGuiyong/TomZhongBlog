<template>
  <div>
    <AboutBanner />
    <section class="post-content-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8" style="padding-top:80px;">
            <Article />
            <!-- <PageNavigationArea /> -->
            <!-- <Comment /> -->
          </div>
          <div class="col-lg-4 mb-30" style="padding-top:80px;">
            <SideBar />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AboutBanner from '@/components/About_Banner'
import Article from '@/components/Article'
import SideBar from '@/components/SideBar'
import PageNavigationArea from '@/components/NavigationArea'
import Comment from '@/components/Comment'
import { getArticleDetails } from '@/utils/getInfo'
export default {
  layout: 'default',
  components: {
    AboutBanner,
    Article,
    SideBar,
    PageNavigationArea,
    Comment
  },
  data() {
    return {
      hasContent: true,
      content: {}
    }
  },
  async fetch ({ store, params, redirect  }) {
    // console.log(params)
    const { id = 0 } = params
    if (!id) {
      redirect(302,'/')
    } else {
      try {
        const res = await getArticleDetails(id)
        store.commit('article/setArticle', res.data)
      } catch (error) {
        redirect(302,'/')
      }
    }
  }
}
</script>
<style>
</style>


