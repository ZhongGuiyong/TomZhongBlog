export const state = () => ({
  setting: null
})
export const mutations = {
  setSetting(state, setting) {
    state.setting = setting
  }
}
export const actions = {
  async getSetting(store) {
    const { commit } = store;
    let query = `/v1/setting`
    let getLatestArticles = `/v1/article/latest/5`
    let res = await this.$axios.$get(query)
    let latestArticles = await this.$axios.$get(getLatestArticles)
    res['latestArticles'] = latestArticles.result
    // console.log(res)
    commit('setSetting', res)
  }
}
