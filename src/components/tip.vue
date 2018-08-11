<template>
  <p @click="hide" :class="{'hidden' : isHide}">
    感谢您的观看！部分信息隐藏，请在相关招聘网站查看。[点击关闭]
  </p>
</template>
<script>
export default {
  name: 'Tip',
  data () {
    return {
      isHide: false
    }
  },
  methods: {
    hide () {
      this.isHide = true
    }
  }
}
</script>
<style lang="stylus" scoped>
p
  display inline
  position fixed
  left calc(50% - 220px)
  top 0
  background-color #42b983
  color #fff
  margin 0
  padding 8px 10px
  border-radius 8px
  box-shadow 0 0 6px #777
  cursor pointer
  animation show .5s
.hidden
  top -100px
  animation hide .5s
@keyframes show {
  0% {
    top -200px
  }
  50% {
    top 30px
  }
  100% {
    top 0
  }
}
@keyframes hide {
  0% {
    top 0
  }
  50% {
    top 30px
  }
  100% {
    top -200px
  }
}
</style>
