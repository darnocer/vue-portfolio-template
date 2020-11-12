<template>
  <div>
  <h1 class="display-1">{{data.two.b}}</h1>
  </div>
</template>

<script>
import data from "../data/data.json";

export default {
  name: 'HelloWorld',
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

@import "../../css/style.css";

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
