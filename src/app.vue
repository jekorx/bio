<template>
  <article id="app">
    <Info :info="info" :github="github" />
    <Detail :detail="detail" :github="github" />
    <Code :url="code" />
    <Tip />
  </article>
</template>
<script>
import infoData from '@/data/info.json'

import Info from '@views/info'
import Detail from '@views/detail'
import Code from '@components/code'
import Tip from '@components/tip'

export default {
  name: 'App',
  components: {
    Info,
    Detail,
    Code,
    Tip
  },
  data () {
    return {
      github: infoData.github,
      info: infoData.info,
      detail: infoData.detail,
      code: infoData.code
    }
  }
}
</script>
<style lang="stylus">
#app
  position relative
  >section
    padding 0 15px 15px
    border-radius 5px
    box-shadow 0 5px 20px #CCC
    background-color #FFF
    margin-bottom 20px
    box-sizing border-box
</style>
