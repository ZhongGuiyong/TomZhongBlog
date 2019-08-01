export default function ({ store, redirect }) {
  // 如果已经退出，那么将跳转会登录页面
  if (!store.state.auth) {
    return redirect('/login')
  }
}