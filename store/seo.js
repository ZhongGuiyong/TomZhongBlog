export const state = () => ({
  seo: null
})
export const mutations = {
  setSEO(state, seo) {
    state.seo = seo
  }
}
export const actions = {
  async getSEO(store) {
    const { commit } = store;
    let query = `/v1/seo`
    const res = await this.$axios.$get(query)
    commit('setSEO', res.seo)
  }
}
