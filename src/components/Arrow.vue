<template>
  <div class="row arrow-container">
      <a href="#about">
    <i class="fas fa-angle-double-down fa-6x"></i></a>
  </div>
 
</template>

<script>
import data from "../data/data.json";

export default {
  name: 'Arrow',
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
