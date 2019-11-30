const cookieparser = process.server ? require("cookieparser") : undefined;
export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = parsed.auth
      } catch (err) {
        // No valid cookie found
      }
    }
    commit("auth/setAuth", auth)
    await dispatch('nav/getNav');
  }
}
