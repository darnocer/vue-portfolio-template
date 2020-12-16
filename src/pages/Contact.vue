<template>
  <section id="contact" class="light-section">
    <div class="container-fluid">
      <h1 class="section-header">{{ heading }}</h1>
      <div class="row">
        <div
          class="col-sm-12 col-md-6 flex-col"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="contact-content">
            <h2>Connect with Me</h2>
            <div class="contact-text">{{ contact.text }}</div>

            <div class="contact-info">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <h3 class="d-inline">
                    <i class="fas fa-map-marker-alt"></i> Location:
                  </h3>
                  <br class="d-md-none" />
                  <span>&nbsp; {{ contact.city }}</span>
                </li>
                <li class="list-group-item">
                  <h3 class="d-inline">
                    <i class="fa fa-envelope"></i> Email:
                  </h3>
                  <br class="d-md-none" />
                  <a href="mailto:hello@dariannocera.com">
                    <span>{{ contact.email }}</span>
                  </a>
                </li>

                <li class="list-group-item">
                  <h3 class="d-inline">
                    <i class="fas fa-phone"></i>  Phone:
                  </h3>
                  <br class="d-md-none" />
                  
                    <span>{{ contact.phone }}</span>
                  
                </li>
                <li class="list-group-item">
                  <h3 class="d-inline">
                    <i class="fas fa-user-plus"></i> Social:
                  </h3>
                  <br class="d-md-none" />

                  <div
                    v-for="(item, i) in social"
                    :key="i"
                    class="social-item social-spacing list-inline-item"
                  >
                    <a :href="item.url" :alt="item.name">
                      <i :class="'fa-lg '+item.faClass"> </i>
                    </a>
                  </div>
                </li>
                <li class="list-group-item">
                  <a :href="contact.resumeLink" target="_blank" alt="resume">
                  <button class="btn btn-resume"  target="_blank">
                    <i class="far fa-file-pdf"></i> Resume
                  </button>
                  </a>
                  <!-- <br class="d-md-none" />
                  <a :href="contact.resumeLink" target="_blank">
                    PDF
                  </a> -->
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="col-sm-12 col-md-6 flex-col"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2>{{contact.formTitle}}</h2>

<!-- DELETE THIS NON-FUNCTIONAL PLACEHOLDER FORM -->
  <form>

     <div class="form-group" style="width:90%; margin:1rem auto;">
    <label for="exampleFormControlTextarea1">Example name</label>
    <input class="form-control" id="exampleFormControlInput1" placeholder="Enter your name here"/>
  </div>

  <div class="form-group" style="width:90%; margin:1rem auto;">
    <label for="exampleFormControlInput1">Example email</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  

  <div class="form-group" style="width:90%; margin:1rem auto;">
    <label for="exampleFormControlTextarea1">Example message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message here"></textarea>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<!-- END OF PLACEHOLDER FORM  -->



      <!-- START OF 99INBOUND CONTACT FORM CODE  -->

          <!-- Place the <div> container from 99inbound here if you so choose. I reccommend adding a style attribute with the following properties to the div: style="height: 60%; width:90%; margin: 0 auto;" -->

        <!-- END OF 99INBOUND CODE  -->

        </div>
      </div>
    </div>

    <div class="row arrow-container">
      <a class="arrow-icon" href="#">
        <i class="fas fa-chevron-up fa-4x"></i>
      </a>
    </div>

  </section>
</template>

<script>
import data from "../data/data.json";

export default {
  name: "Contact",
  props: {},
  components: {},
  data() {
    return {
      contact: data.contact,
      social: data.contact.social,
      heading: data.main.headings.contact,
    };
  },
};
</script>

<style lang="scss"></style>
