<template>
  <div :class="`${filterName} filter-item`" 
        :style="`background-image:url(${objectUrl})`"
        @click="fire">
    <slot name="fName"></slot>
    <!-- <slot :msg="msg"></slot> -->
  </div> 
</template>

<script>
export default {
  name : 'filterbox',
  data() {
    return {
      // msg: 'hello'
    }
  },
  props: {
    objectUrl : String,
    filterName : String
  },
  methods : {
    fire() {
      this.emitter.emit('sendFilterName', this.filterName)
    }
  }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : #000000;
  background-size: cover;
  background-position : center;
}
</style>