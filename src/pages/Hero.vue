<template>
  <div>
  HEY
  </div>
</template>

<script>
import data from "../data/data.json";

export default {
  name: 'Hero',
  props: {
    msg: String
  },
  data() {
    return {
      data: data,
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/css/style.css";
</style>
