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
      <li class="list-inline-item">
          <a class="fb-ic" href="#">
            <i class="fab fa-facebook-f fa-lg mr-4"> </i>
          </a></li>
      <li class="list-inline-item"> <a class="tw-ic" href="#">
            <i class="fab fa-twitter fa-lg mr-4"> </i>
          </a></li>
      <li class="list-inline-item"><a class="gplus-ic" href="#">
            <i class="fab fa-google-plus-g fa-lg mr-4"> </i>
          </a></li>
      <li class="list-inline-item"><a class="li-ic" href="#">
            <i class="fab fa-linkedin-in fa-lg mr-4"> </i>
          </a></li>
      <li class="list-inline-item"><a class="pin-ic" href="#">
            <i class="fab fa-pinterest fa-lg"> </i>
          </a></li>
    </ul>

    <div class="copyright">
        © 2020 Copyright Darian Nocera. All Rights Reserved. 
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
      }
    }
}
</script>

<style lang="scss">
@import "../styles/scss/_variables.scss";

</style>
