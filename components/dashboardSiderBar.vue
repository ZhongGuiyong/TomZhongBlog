<template>
  <div class="wrapper">
    <ul class="vertical-nav-menu mm-show">
      <li class="heading">菜单</li>
      <li class="mm-active">
        <a href="#" aria-expanded="true" v-b-toggle="'collapse-2'" class="text-bold">
          <i class="metismenu-icon pe-7s-rocket"></i>
          文章功能
          <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
        </a>
        <b-collapse id="collapse-2">
          <ul class="mm-collapse mm-show" style>
            <li>
              <!-- <a href="index.html" class="mm-active">
                <i class="metismenu-icon"></i>撰写新文章
              </a> -->
              <nuxt-link to="/dashboard/mdEditor" class="mm-active">发表新文章</nuxt-link>
              <nuxt-link to="/dashboard/articleManage" class="mm-active">管理文章</nuxt-link>
            </li>
          </ul>
        </b-collapse>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.wrapper {
  padding: 2px 1.5rem 1.5rem;
  background-color: #fff;
  min-height: 500px;
  position: fixed;
  top: 80px;
  width: 280px;
  z-index: 2;
}
.vertical-nav-menu {
  margin: 0;
  padding: 0;
  position: relative;
  list-style: none;
}
.vertical-nav-menu ul {
  transition: padding 300ms;
  padding: 0.5em 0 0 2rem;
}
.vertical-nav-menu li a:hover {
  background: #e0f3ff;
  text-decoration: none;
}
ul.mm-show > li > a {
  display: block;
  line-height: 2.4rem;
  height: 2.4rem;
  padding: 0 1.5rem 0 45px;
  position: relative;
  border-radius: 0.25rem;
  color: #343a40;
  white-space: nowrap;
  transition: all 0.2s;
  margin: 0.1rem 0;
  height: 2rem;
  line-height: 2rem;
  padding-left: 1em;
  color: #6c757d;
}
.heading {
  text-transform: uppercase;
  font-size: 0.8rem;
  margin: 0.75rem 0;
  font-weight: bold;
  color: #3f6ad8;
  white-space: nowrap;
  position: relative;
}
</style>


