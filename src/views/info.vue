<template>
  <section class="info">
    <Me :name="info.name"
        :job="info.job"
        :position="info.position" />
    <Basic :basic="info.basic" />
    <Contact :contact="info.contact" :github="github" />
    <Skill :skills="info.skills" />
    <Self :self="info.self" />
  </section>
</template>
<script>
import Me from '@views/info/me'
import Basic from '@views/info/basic'
import Contact from '@views/info/contact'
import Skill from '@views/info/skill'
import Self from '@views/info/self'

export default {
  name: 'Info',
  props: {
    info: {
      type: Object,
      required: true
    },
    github: {
      type: String
    }
  },
  components: {
    Me,
    Basic,
    Contact,
    Skill,
    Self
  }
}
</script>
<style lang="stylus" scoped>
.info
  @media screen and (max-width: 768px)
    width 100%
  @media screen and (min-width: 769px)
    width calc(30% - 20px)
    float left
    margin-right 20px
</style>
