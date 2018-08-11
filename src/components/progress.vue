<template>
  <div class="progress">
    <div :style="'width:' + value + '%'"></div>
  </div>
</template>
<script>
export default {
  name: 'Progress',
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="stylus" scoped>
.progress
  height 10px
  width 100%
  background-color #DDD
  margin 4px 0
  >div
    height 100%
    background-color #42B983
</style>
