<template>
  <section>
    <h2 class="icon icon-list">项目经验</h2>
    <ul>
      <li v-for="project in projects" :key="project.name">
        <h3 v-text="`${project.startTime} - ${project.endTime} | ${project.name}`"></h3>
        <p v-if="project.stack"><span class="icon icon-terminal">[技术栈]</span>{{project.stack}}</p>
        <p v-if="project.recom"><span class="icon icon-tech">[项目]</span>{{project.recom}}</p>
        <p v-if="project.desc"><span class="icon icon-plane">[目标]</span>{{project.desc}}</p>
        <p v-if="project.duty"><span class="icon icon-group">[职责]</span>{{project.duty}}</p>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'Project',
  props: {
    projects: {
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
li
  padding-bottom 2px
h3
  margin 8px 0 4px
  font-weight 300
  font-size 16px
  color #000
p
  margin 4px 0
  word-break break-all
span
  color #000
  padding-right 10px
.icon:before
  margin-right 8px
</style>
