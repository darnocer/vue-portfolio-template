<template>
  <section id="skills">
    <div class="container test">
      <h1>Skills</h1>
    </div>
  </section>
</template>

<script>
import data from "../data/data.json";


export default {
  name: 'Skills',
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
