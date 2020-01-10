<template>
  <div>
    <AboutBanner />
    <section class="post-content-area">
      <div class="container">
        <div class="row" style="padding-top: 40px">
          <div class="col-lg-8">
            <Article />
            <!-- <PageNavigationArea /> -->
            <!-- <Comment /> -->
          </div>
          <SideBar />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AboutBanner from '@/components/About_Banner'
import Article from '@/components/article'
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


