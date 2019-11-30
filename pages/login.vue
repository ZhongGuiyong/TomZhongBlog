<template>
  <div
    class="text-center d-flex justify-content-center align-items-center pt-100 pb-100"
    style="height: 100vh"
  >
    <form class="form-signin" @submit.prevent="login">
      <img class="mb-4" src="/img/logo.png" alt width="72"/> 
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
        v-model="formData.email"
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="formData.pwd"
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">© 2019</p>
    </form>
  </div>
</template>
<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  data() {
      return {
        formData: {
          email: '',
          pwd: ''
        }
      }
  },
  middleware: 'notAuthenticated',
  methods: {
    
    // 登录
    async login() {
      const user = 'http://localhost:3000/v1/user/login'
      try {
        const res = await this.$axios.$post(user, this.formData)
        // console.log(res)
        this.$store.commit('auth/setAuth', res.token)
        Cookie.set('auth', res.token)
        this.$router.push('/dashboard')
        // this.$axios.setToken(res.token, 'Bearer', ['post', 'get'])
        // const data = await this.$axios.$get('http://localhost:3000/v1/user')
        // console.log(data)
      } catch (error) {
        console.log(error.response)
      }
    }
  }
}
</script>
<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
#header-wrapper {
  display: none;
}
.footer-area {
  display: none;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-signin .form-control:focus {
  z-index: 2;
}
</style>
