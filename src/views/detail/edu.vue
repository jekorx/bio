<template>
  <section>
    <h2 class="icon icon-edu">教育经历</h2>
    <ul>
      <li v-for="(edu, index) in edus"
        :key="index"
        v-text="`
          ${edu.startTime} - ${edu.endTime}
          ${edu.school}
          | ${edu.major}
          | ${edu.record}
          | ${edu.degree}
        `">
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'Edu',
  props: {
    edus: {
      type: Array,
      default: null
    }
  }
}
</script>
<style lang="stylus" scoped>
ul
  list-style disc
  padding-left 20px
  margin-bottom 7px
li
  padding-bottom 8px
  font-size 16px
  color #000
</style>
