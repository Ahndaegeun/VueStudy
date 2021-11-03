import axios from "axios"
import { createStore } from "vuex"

const store = createStore({
  state () {
    return {
      name : 'kim',
      age : 20,
      likes : 0,
      isClicked : false,
      more : {},
    }
  },
  mutations: {
    changedName(state) {
      state.name = 'park'
    },
    upAge(state, range) {
      state.age += range
    },
    clickLike(state) {
      if(!state.isClicked) {
        state.likes++
      } else {
        state.likes--
      }
      state.isClicked = !state.isClicked
    },
    setMore(state, _data) {
      state.more = _data
    }
  },
  actions : {
    getData(context) {
      axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((a) => {
          context.commit('setMore', a.data)
        })
    },
  }
})

export default store