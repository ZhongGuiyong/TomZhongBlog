// const cookieparser = process.server ? require("cookieparser") : undefined
export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req }) {
    // let auth = null
    // if (req.headers.cookie) {
    //   const parsed = cookieparser.parse(req.headers.cookie)
    //   try {
    //     auth = parsed.authUser
    //   } catch (err) {
    //     // No valid cookie found
    //   }
    // }
    // console.log(req.session);
    if (req.session.authUser) {
      commit("auth/setAuth", req.session.authUser)
      // console.log(req.session.authUser)
    }
    await dispatch('nav/getNav')
  }
}
