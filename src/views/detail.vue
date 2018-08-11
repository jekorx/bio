<template>
  <section class="detail">
    <Edu class="edu" :edus="detail.edus"/>
    <Job :jobs="detail.jobs"/>
    <Project :projects="detail.projects" />
    <Personal :projects="detail.personal" :github="github" />
  </section>
</template>
<script>
import Edu from '@views/detail/edu'
import Job from '@views/detail/job'
import Project from '@views/detail/project'
import Personal from '@views/detail/personal'

export default {
  name: 'Detail',
  props: {
    detail: {
      type: Object,
      required: true
    },
    github: {
      type: String
    }
  },
  components: {
    Edu,
    Job,
    Project,
    Personal
  }
}
</script>
<style lang="stylus" scoped>
.detail
  @media screen and (max-width: 768px)
    width 100%
  @media screen and (min-width: 769px)
    width 70%
    float left
.edu
  padding-top 15px
</style>
