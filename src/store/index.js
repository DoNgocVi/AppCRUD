import { createStore } from 'vuex'
import citiesColRef from '../firebase'
import { getDocs } from 'firebase/firestore'
const store = createStore({
  state() {
    return {
      cities: [],
    }
  },
  actions: {
    async fetchCities(context) {
      let citiesSnapShot = await getDocs(citiesColRef)
      let cities = []
      citiesSnapShot.forEach(city => {
        let cityData = city.data()
        cityData.id = city.id
        cities.push(cityData)
      })
      context.commit('GET_CITIES', cities)
    },
  },
  mutations: {
    GET_CITIES(state, payload) {
      state.cities = payload
    },
  },
})
export default store
