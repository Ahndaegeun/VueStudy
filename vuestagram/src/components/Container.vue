<template>
  <div>
    <div v-if="step == 0">
      <Post v-for="(a, i) in article"
            :key="i"
            :article="a"/>
    </div>

    <div v-if="step == 1">
      <div :class="`${filterId}`" class="upload-image" :style='{backgroundImage : `url(${objectUrl})`}'></div>
      <div class="filters">
        <FilterBox :objectUrl="objectUrl"
                    v-for="i in imgFilter" 
                    :key="i"
                    :filterName="i">
          <template v-slot:fName>{{i}}</template>
          <!-- <template v-slot:default="i">{{i.msg}}</template> -->
        </FilterBox>
      </div>
    </div>

    <div v-if="step == 2">
      <div :class="`${filterId}`" class="upload-image" :style='{backgroundImage : `url(${objectUrl})`}'></div>
      <div class="write">
        <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
      </div>
    </div>

    <div v-if="step == 3">
      <MyPage :one="1"/>
    </div>

  </div>
</template>

<script>
import Post from "./Post.vue"
import FilterBox from './FilterBox.vue'
import filterData from '../assets/imgFilter.js'
import MyPage from './MyPage.vue'

export default {
  data() {
    return {
      imgFilter: filterData
    }
  },
  components: {
    Post,
    FilterBox,
    MyPage,
  },
  props: {
    article : Array,
    step : Number,
    objectUrl : String,
    filterId : String
  }
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>