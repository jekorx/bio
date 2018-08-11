<template>
  <section>
    <h2 class="icon icon-user">基本信息</h2>
    <ul>
      <li>
        <label>性别</label>
        <span v-text="basic.sex"></span>
      </li>
      <li>
        <label>出生年月</label>
        <span v-text="basic.birthday"></span>
      </li>
      <li>
        <label>学历</label>
        <span v-text="basic.edu"></span>
      </li>
      <li>
        <label>专业</label>
        <span v-text="basic.major"></span>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'Basic',
  props: {
    basic: {
      type: Object,
      required: true
    }
  }
}
</script>
