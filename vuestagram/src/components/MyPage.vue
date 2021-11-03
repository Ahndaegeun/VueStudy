<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input @input="searchName($event.target.value)" placeholder="🔍" />
    <div class="post-header"
          v-for="i in follower" :key="i">
      <div class="profile" :style="{backgroundImage : `url(${i.image})`}"></div>
      <span class="profile-name">{{i.name}}</span>{{onee}}
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive, toRefs, watch, computed } from 'vue'
import axios from 'axios'
import {useStore} from 'vuex'

export default {
  name: 'mypage',
  props : {
    one : Number
  },
  setup(props) {
    //ref = 숫자 문자 등 / 이것만 써도 상관은 없음
    let follower = ref([])
    let {onee} = toRefs(props)
    console.log(onee)
    //reactice =  object, array
    let test = reactive({name : 'kim'})

    onMounted(() => {
      axios.get('/follwer.json')
        .then(res => {
          follower.value = res.data
        })
    })

    let re = computed(() => {
      return follower.value.length
    })
    console.log(re)

    let store = useStore()
    console.log(store.state.name)

    watch(onee, () => {

    })

    function searchName(e) {
      let newF = follower.value.filter(a => {
        return a.name.indexOf(e) != -1
      })
      follower.value = [...newF]
    }


    return {follower, test, searchName}
  }
}
</script>

<style>

</style>