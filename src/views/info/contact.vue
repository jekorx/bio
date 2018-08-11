<template>
  <section>
    <h2 class="icon icon-contact">联系方式</h2>
    <ul>
      <li>
        <label>手机</label>
        <a target="_blank" :href="`tel:${contact.phone}`"
          v-text="contact.phone"></a>
      </li>
      <li>
        <label>邮箱</label>
        <a target="_blank" :href="`mailto:${contact.email}`"
          v-text="contact.email"></a>
      </li>
      <li>
        <label>Github</label>
        <a target="_blank" :href="github"
          v-text="github"></a>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'Contact',
  props: {
    contact: {
      type: Object,
      required: true
    },
    github: {
      type: String
    }
  }
}
</script>
