

<template>
  <div class="banner">
    <div class="banner-text">
      <h1 class="display-text">
        {{ data.fullName }}
      </h1>
      <h2 id="typewriter"></h2>
    </div>
  </div>
</template>

<script>
  import data from "../data/data.json";
  import Typewriter from "typewriter-effect/dist/core";

  export default {
    name: "Banner",
    data(){
      return {
        data: data.name,
        }
      },
    mounted: function() {
      new Typewriter('#typewriter', {
      strings: ['Web Designer.', 'Web Developer.', 'Technical Expert.'],
      autoStart: true,
      loop: true,
          deleteSpeed:5,
      });
    }
}
</script>

<style lang="scss">
@import "../styles/scss/_variables.scss";
</style>
