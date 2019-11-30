<template>
  <div class="app-body">
    <div v-if="$store.state.auth">
      <!-- <p>You are authenticated. You can see the</p>
      <button @click="logout">Logout</button>
      <button @click="getUserData">拿取用户数据</button> -->
      <!-- <markdownEditor/> -->
      <div class="sider-bar">
        <DashboardSiderBar/>
      </div>
      <div class="app-main" style="padding-left: 280px;" ref="app">
        <div style="padding: 30px 30px;flex: 1;">
          <nuxt-child/>
        </div>
      </div>
    </div>
    <p v-else>
      Please
      <NuxtLink to="/login">login</NuxtLink>.
    </p>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
import DashboardSiderBar from '~/components/dashboardSiderBar'
export default {
  // middleware: 'authenticated',
  components: {
    DashboardSiderBar
  },
  methods: {
    // 退出登录
    logout() {
      Cookie.remove('auth')
      this.$store.commit('nav/setAuth', null)
      this.$router.push('/login')
    },

    // 获取用户数据
    async getUserData() {
      const article = 'http://localhost:3000/v1/user'
      try {
        const token = Cookie.get('auth')
        this.$axios.setToken(token, 'Bearer', ['post', 'get'])

        const res = await this.$axios.$get(article)
        console.log(res)
      } catch (error) {
        console.log(error.response)
      }
    }
  },
  mounted(){
    let viewportHeight = document.body.clientHeight || document.documentElement.clientHeight
    // console.log(viewportHeight)
    this.$refs.app.style.minHeight = viewportHeight - 70 + 'px'
  }
}
</script>
<style>
.app-body {
  background: #f1f4f6;
}
</style>

