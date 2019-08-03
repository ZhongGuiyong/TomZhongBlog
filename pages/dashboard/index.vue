<template>
  <div>
    <div class="text-center" style="padding-top: 200px;">
      <h2>欢迎来到TomZhongBlog后台</h2>
      <b-button @click="logout" class="mt-10">退出登录</b-button>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  methods: {
    // 退出登录
    logout() {
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
