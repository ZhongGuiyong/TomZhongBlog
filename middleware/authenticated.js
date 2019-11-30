export default function ({ store, redirect }) {
  // 如果已经退出，那么将跳转会登录页面
  // console.log(store.state);
  const userInfo = store.state && store.state.auth && store.state.auth.authUser || null;
  if (!userInfo) {
    // console.log(userInfo);
    return redirect('/login')
  }
}