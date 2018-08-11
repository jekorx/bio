<template>
  <section>
      <h1 v-text="name"></h1>
      <p v-text="info"></p>
    </section>
</template>
<script>
export default {
  name: 'Me',
  props: {
    name: {
      type: String,
      required: true
    },
    job: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  },
  computed: {
    info: function() {
      /*
        不应该使用箭头函数来定义计算属性函数
        箭头函数绑定了父级作用域的上下文，
        this 将不会按照期望指向Vue实例
        this.a 将是 undefined
      */
      return `${this.job} / ${this.position}`
    }
  }
}
</script>
<style lang="stylus" scoped>
h1
  font-family 'KaiTi'
  font-size 30px
  margin 0
  padding 20px 0 10px
  @media screen and (max-width: 768px) {
    text-indent 0
  }
  @media screen and (min-width: 769px) {
    text-align center
  }
p
  margin 0 0 30px
  padding-top 10px
  @media screen and (max-width: 768px) {
    text-indent 0
  }
  @media screen and (min-width: 769px) {
    text-align center
  }
</style>
