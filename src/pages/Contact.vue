<template>

  <section id="contact" class="light-section">
    <div class="container-fluid">
      <h1>{{heading}}</h1>
      <div class="row">
        <div class="col-sm-12 col-md-6 flex-col" data-aos="fade-right" data-aos-duration="1000">
          <div class="contact-content">
            <h2>Connect with Me</h2>
          <div class="contact-text">{{contact.text}} </div>

          <div class="contact-info">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h3 class="d-inline"><i class="fas fa-map-marker-alt"></i> Location: </h3><br class="d-md-none">
              <span>&nbsp; {{contact.city}}</span>
            </li>
            <li class="list-group-item">
              <h3 class="d-inline">
              <i class="fa fa-envelope fa-lg"></i> Email: </h3><br class="d-md-none">
              <a href="mailto:hello@dariannocera.com">
                <span>{{contact.email}}</span>
              </a>
              </li>
              <li class="list-group-item">
                <h3 class="d-inline"><i class="fas fa-user-plus"></i> Social: </h3><br class="d-md-none">
         
            <div v-for="(item,i) in social" :key="i" 
            class="social-item social-spacing list-inline-item">
              <a :href= item.url :alt= item.name>
                <i :class= item.faClass > </i>
              </a>
              </div>
            </li>
            <li class="list-group-item">
              <h3 class="d-inline"> <i class="far fa-file-pdf"></i> Resume: </h3><br class="d-md-none">
          <a :href="contact.resumeLink" target="_blank">
          PDF
        </a>
        </li>
        <li class="list-group-item">
          <h3 class="d-inline"><i class="fas fa-hand-holding-heart"></i> SUPPORT: </h3>
          <a href="http://www.theunderdogfoundation.org" target="_blank">The Underdog Foundation</a>
          </li>
        </ul>
        </div>
        </div>

      </div>
      <div class="col-sm-12 col-md-6 flex-col" data-aos="fade-right" data-aos-duration="1000">
        <h2>Send Me A Message</h2>
<!-- 
        <form method="POST" target="_blank">
          <div class="form-group">
            <input type="text" name="name" class="form-control" placeholder="Name">
          </div>
          <div class="form-group">
            <input type="email" name="email" class="form-control"  aria-describedby="emailHelp" placeholder="Email">
          </div>
          <div class="form-group">
            <textarea name="message" class="form-control" rows="3" placeholder="Message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form> -->

        <div style="height: 60%; width:90%; margin: 0 auto;" class="inbound-form-wrapper" id="form_4095" data-path="https://app.99inbound.com/i/eca66ce0-b392-4bc1-8247-13a69c26139a" data-token="INp921C8buNbYYUrvGBhrwtt"></div>



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
      social: data.contact.social,
      heading: data.main.headings.contact
      }
    }
}
</script>



<style lang="scss">
@import "../styles/scss/_variables.scss";


</style>
