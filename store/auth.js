// import Vuex from 'vuex'

// const cookieparser = process.server ? require('cookieparser') : undefined

// const createStore = () => {
//   return new Vuex.Store({
//     state: () => ({
//       auth: null
//     }),
//     mutations: {
//       setAuth(state, auth) {
//         state.auth = auth
//       }
//     },
//     actions: {
//       nuxtServerInit({ commit }, { req }) {
//         let auth = null
//         if (req.headers.cookie) {
//           const parsed = cookieparser.parse(req.headers.cookie)
//           try {
//             auth = parsed.auth
//           } catch (err) {
//             // No valid cookie found
//           }
//         }
//         commit('setAuth', auth)
//       }
//     }
//   })
// }


/* global require, process */
const cookieparser = process.server ? require("cookieparser") : undefined;

export const state = () => {
  return {
    auth: null
  }
}
export const mutations = {
  setAuth(state, auth) {
    state.auth = auth;
  }
}
export const actions = {
}