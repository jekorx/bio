<template>
  <section>
    <h2 class="icon icon-pencil">自我评价</h2>
    <p v-text="self"></p>
  </section>
</template>
<script>
export default {
  name: 'Self',
  props: {
    self: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
p
  text-indent 32px
  margin 8px 0
</style>
