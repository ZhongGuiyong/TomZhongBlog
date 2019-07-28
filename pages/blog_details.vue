<template>
  <div>
    <AboutBanner />
    <section class="post-content-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8" style="padding-top:80px;">
            <Article />
            <PageNavigationArea />
            <Comment />
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
export default {
  layout: 'default',
  components: {
    AboutBanner,
    Article,
    SideBar,
    PageNavigationArea,
    Comment
  }
}
</script>
<style>
</style>


