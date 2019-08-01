export default function ({ store, redirect }) {
  // 如何已经登录，将直接跳转到后台
  if (store.state.auth) {
    return redirect('/dashboard')
  }
}