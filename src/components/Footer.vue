<template>
<footer class="footer font-small text-center">
  <ul class=" list-inline">
    <li class="list-inline-item">
      <a class="nav-item nav-link active" href="#">
        Home <span class="sr-only">(current)</span>
      </a>
    </li>
    <li class="list-inline-item"><a class="nav-item nav-link" href="#about">About</a></li>
    <li class="list-inline-item"><a class="nav-item nav-link" href="#skills">Skills</a></li>
    <li class="list-inline-item"><a class="nav-item nav-link" href="#projects">Projects</a></li>
    <li class="list-inline-item"><a class="nav-item nav-link" href="#contact">Contact</a></li>
  </ul>


  <ul class="list-inline">
    <li v-for="(item,i) in social" :key="i" class="social-item list-inline-item">
      <a :href= item.url :alt= item.name>
        <i :class= item.faClass > </i>
      </a>
    </li>
  </ul>

  <div class="copyright">
    Copyright © {{ new Date().getFullYear() }} {{data.name.fullName}} {{data.footer.copyrightText}}
  </div>
</footer>


</template>

<script>

import data from "../data/data.json";

export default {
  name: 'Footer',
  components: {
  },
  props: {
  },
  data() {
    return {
      data: data,
      social: data.social
      }
    }
}
</script>

<style lang="scss">
@import "../styles/scss/_variables.scss";

</style>
