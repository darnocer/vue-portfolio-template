<template>

  <section id="contact" class="light-section">
    <div class="container-fluid">
      <h1>Contact</h1>
      <div class="row">
        <div class="col-sm-12 col-md-6 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h3 class="d-inline"><i class="fas fa-map-marker-alt"></i> Location: </h3>
              <span>&nbsp; {{contact.city}}</span>
            </li>
            <li class="list-group-item">
              <h3 class="d-inline">
              <i class="fa fa-envelope fa-lg"></i> Email: </h3>
              <a href="mailto:hello@dariannocera.com">
                <span>{{contact.email}}</span>
              </a>
              </li>
              <li class="list-group-item">
                <h3 class="d-inline"><i class="fas fa-user-plus"></i> Social: </h3>
         
            <div v-for="(item,i) in social" :key="i" 
            class="social-item social-spacing list-inline-item">
              <a :href= item.url :alt= item.name>
                <i :class= item.faClass > </i>
              </a>
              </div>
            </li>
            <li class="list-group-item">
              <h3 class="d-inline"> <i class="far fa-file-pdf"></i> Resume: </h3>
          <a :href="contact.resumeLink" target="_blank">
          PDF
        </a>
        </li>
        </ul>

      </div>
      <div class="col-sm-12 col-md-6 flex-col" data-aos="fade-right" data-aos-duration="1000">
        <form>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Name">
          </div>
          <div class="form-group">
            <input  id="exampleInputEmail1" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Email">
          </div>
          <div class="form-group">
            <textarea id="exampleFormControlTextarea1" class="form-control" rows="3" placeholder="Message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
   <div class="row arrow-container">
    <a class="arrow" href="#">
      <i class="fas fa-chevron-up fa-4x"></i>
    </a>
  </div>
</section>
</template>

<script>
import data from "../data/data.json";



export default {
  name: 'Contact',
  props: {},
  components: {},
  data() {
    return {
      contact: data.contact,
      social: data.contact.social
      }
    }
}
</script>

<style lang="scss">
@import "../styles/scss/_variables.scss";


</style>
