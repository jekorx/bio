<template>
  <a :href="url" target="_blank">源代码</a>
</template>
<script>
export default {
  name: '',
  props: {
    url: {
      type: String,
      default: '#'
    }
  }
}
</script>
<style lang="stylus" scoped>
a
  position fixed
  top 30%
  right 0
  background-color #42b983
  color #FFF
  padding 10px 20px 10px 15px
  border-top-left-radius 25px
  border-bottom-left-radius 10px
  box-shadow 0 0 10px #8e8e8e
  animation show .5s
  &:hover
    text-decoration underline
@keyframes show {
  from {
    right -200px
  }
  to {
    right 0
  }
}
</style>
