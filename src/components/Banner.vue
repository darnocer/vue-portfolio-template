<template>
  <div class="banner test">
    <div class="banner-text">
      <h2>I'm a</h2>
      <h1 id="typewriter"></h1>
    </div>
  </div>
</template>

<script>
import data from "../data/data.json";
import Typewriter from 'typewriter-effect/dist/core';
 


export default {
  name: 'Banner',
  props: {
  },
  data() {
    return {
      data: data,
      }
    },
// how to get these values from json? 
mounted: function() {
    new Typewriter('#typewriter', {
    strings: ['Web Designer.', 'Web Developer.', 'Technical Expert.', 'Soul Scientist'],
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
