export const state = () => ({
  seo: null
})
export const mutations = {
  setNav(state, nav) {
    state.nav = nav
  }
}
export const actions = {
  async getSeo({ commit }) {
    let navData = null
    return new Promise(resolve => {
      setTimeout(() => {
        navData = [
          { name: '首页', url: '/' },
          { name: '博客', url: '/blog_home' },
          { name: '文章后台', url: '/dashboard' }
        ]
        commit('setNav', navData)
        resolve()
      }, 0)
    })
  }
}
