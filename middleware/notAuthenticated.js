export default function ({ store, redirect }) {
  // 如何已经登录，将直接跳转到后台
  const userInfo = store.state && store.state.auth && store.state.auth.authUser || null;
  console.log(store.state);
  if (userInfo) {
    console.log(userInfo);
    return redirect('/dashboard')
  }
}