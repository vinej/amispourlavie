import globalAxios from 'axios'
import router from '../router'
import Ads from '../models/ads'

export default {
    namespaced: true,

    state: {
        adsList : Ads[]
    },
    mutations: {
      authUser (state, userData) {
        state.idToken = userData.token
        state.userId = userData.userId
      },
      storeUser (state, user) {
        state.user = user
      },
      clearAuthData (state) {
        state.idToken = null
        state.userId = null
      }
    },
    actions: {
      storeAds ({commit, state}, adsData) {
        if (!state.idToken) {
          return
        }
        globalAxios.post('/ads.json' + '?auth=' + state.idToken, adsData)
          .then(res => console.log(res))
          .catch(error => console.log(error))
      },
      fetchAds ({commit, state}) {
        if (!state.idToken) {
          return
        }
        globalAxios.get('/ads.json' + '?auth=' + state.idToken)
          .then(res => {
            console.log(res)
            const data = res.data
            const ads = []
            for (let key in data) {
              const oneAds = data[key]
              oneAds.id = key
              ads.push(oneAds)
            }
            console.log(ads)
          })
          .catch(error => console.log(error))
      }
    },
    getters: {
      ads (state) {
        return state.ads
      }
    }
  }