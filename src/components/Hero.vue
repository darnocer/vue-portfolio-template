<template>
  
  <Banner />
 
</template>

<script>
import Banner from '../components/Banner.vue'
import data from "../data/data.json";


export default {
  name: 'Hero',
  props: {
  },
  components: {
    Banner,
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
