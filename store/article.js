export const state = () => ({
  article: null
})
export const mutations = {
  setArticle(state, nav) {
    state.article = nav
  }
}
