<template>
  <section>
    <h2 class="icon icon-work">工作经历</h2>
    <ul>
      <li v-for="(job, index) in jobs" :key="index">
        <p v-text="`
          ${job.company}
          [ ${job.position} ]
        `"></p>
        <time v-text="`
          ${job.startTime} - ${job.endTime}
        `"></time>
        <ul>
          <li v-for="duty in job.duties"
            :key="duty"
            v-text="duty"></li>
        </ul>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'Job',
  props: {
    jobs: {
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
  ul
    margin 0
    list-style circle
p
  margin 8px 0 0
p, time
  font-size 16px
  color #000
time
  display block
  margin 4px 0 3px
</style>
