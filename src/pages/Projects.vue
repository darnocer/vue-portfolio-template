<template>
  <section id="projects">
    <div class="container test">
      <h1>Projects</h1>
    </div>
  </section>
</template>

<script>
import data from "../data/data.json";


export default {
  name: 'Projects',
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
