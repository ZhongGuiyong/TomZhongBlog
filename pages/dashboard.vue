<template>
  <div>
    <div v-if="$store.state.auth">
      <p>You are authenticated. You can see the</p>
      <button @click="logout">Logout</button>
      <button @click="getUserData">拿取用户数据</button>
    </div>
    <p v-else>
      Please
      <NuxtLink to="/login">login</NuxtLink>.
    </p>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'authenticated',
  methods: {
    // 退出登录
    logout() {
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
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
  }
}
</script>
