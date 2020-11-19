<template>
  <section id="about" class="test">
    <div class="container test">
      <h1>About Me</h1>
      <div class="row">
        <div class="col-4">
          <img class="profile-pic" src="../assets/images/profile-pic.png" alt="profile picture" />
        </div> 
        <div class="col-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste magnam labore dicta amet id autem cumque explicabo dolorem nam quidem rerum inventore, deleniti modi reprehenderit nulla harum quibusdam enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis voluptatibus corrupti temporibus nobis, magni amet adipisci aliquam unde cumque possimus, nisi veritatis ipsa rerum optio, id harum alias porro?
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../data/data.json";


export default {
  name: 'About',
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
