<template>
  <section id="contact">
    <div class="container test">
      <h1>Contact</h1>
    </div>
  </section>
</template>

<script>
import data from "../data/data.json";


export default {
  name: 'Contact',
  props: {
  },
  data() {
    return {
      data: data,
      }
    }
}
</script>

<style lang="scss">
@import "../styles/scss/_variables.scss";


</style>
