<template>
  <section id="contact">
    <div class="container-fluid">
      <h1>Contact</h1>
      <div class="row">
        <div class="col-sm-12 col-md-6 flex-col test">
          <ul>
          <li>
            <i class="fas fa-map-marker-alt fa-lg"></i>
            <span>&nbsp; Denver, Colorado</span>
          </li>
          <li>
            <i class="fa fa-envelope fa-lg"></i>&nbsp;
            <a href="mailto:hello@dariannocera.com">
                <span>hello@dariannocera.com</span>
            </a>
            </li>
            <li v-for="(item,i) in social" :key="i" class="social-item list-inline-item">
              <a :href= item.url :alt= item.name>
                <i :class= item.faClass > </i>
              </a>
            </li>
        </ul>

        <a href=# class="btn btn-primary" target="_blank">
          <i class="far fa-file-pdf"></i>
          Resume
        </a>




        </div>
        <div class="col-sm-12 col-md-6 flex-col test">
          <form>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Name">
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
            </div>
          <div class="form-group">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
        </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../data/data.json";


export default {
  name: 'Contact',
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
