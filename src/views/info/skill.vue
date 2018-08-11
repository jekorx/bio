<template>
  <section>
    <h2 class="icon icon-code">专业技能</h2>
    <ul>
      <li v-for="skill in skills" :key="skill.name">
        <span v-text="skill.name"></span>
        <Progress :value="skill.num" />
      </li>
    </ul>
  </section>
</template>
<script>
import Progress from '@components/progress'

export default {
  name: 'Skill',
  props: {
    skills: {
      type: Array,
      required: true
    }
  },
  components: {
    Progress
  }
}
</script>
<style lang="stylus" scoped>
@media screen and (max-width: 768px)
  li
    font-size 0
    >*
      display inline-block
      vertical-align middle
    span
      font-size 16px
      width 200px
      text-align right
      padding-right 6px
      box-sizing border-box
    .progress
      width calc(100% - 202px)
</style>
