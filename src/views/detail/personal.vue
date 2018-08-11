<template>
  <section>
    <h2 class="icon icon-tech">
      部分个人学习研究
      <a :href="`${github}?tab=repositories`" target="_blank">&nbsp;[点此查看更多]</a>
    </h2>
    <ul>
      <li v-for="(project, index) in projects" :key="index">
        <h3>
          {{project.desc}}
          <a v-if="project.display" :href="project.display" target="_blank" class="display">Demo</a>
        </h3>
        <p v-if="project.stack">
          <span class="icon icon-terminal">[技术栈]</span>
          {{project.stack}}
        </p>
        <p v-if="project.url">
          <span class="icon icon-plane">[查看]</span>
          <a :href="project.url" target="_blank" v-text="project.url"></a>
        </p>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'Personal',
  props: {
    projects: {
      type: Array,
      default: null
    },
    github: {
      type: String
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
.display
  border 1px solid
  padding 3px 4px
  border-radius 6px
</style>
