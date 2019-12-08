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
    const res = await this.$axios.$get(query)
    // console.log(res)
    commit('setSetting', res)
  }
}
