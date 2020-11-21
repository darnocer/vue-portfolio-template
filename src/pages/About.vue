<template>
  <section id="about">
    <div class="container-fluid">
      <h1>About Me</h1>
      <div class="row">
        <div class="col-sm-12 col-md-4 flex-col">
          <img class="profile-pic" src="../assets/images/profile-pic.png" alt="profile picture" />
        </div> 
        <div class="col-sm-12 col-md-4 flex-col">
          <p id="about-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste magnam labore dicta amet id autem cumque explicabo dolorem nam quidem rerum inventore, deleniti modi reprehenderit nulla harum quibusdam enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis voluptatibus corrupti temporibus nobis, magni amet adipisci aliquam unde cumque possimus, nisi veritatis ipsa rerum optio, id harum alias porro?
          </p>
        </div>
        <div class="col-sm-12 col-md-4 flex-col">
<ul>
  <li>hello world</li>
  <li>hello world</li>
  <li>hello world</li>
  <li>hello world</li>
  </ul>
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
