import Vue from "vue";
import App from "./App.vue";
import $ from "jquery";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// HIGHLIGHT NAV MENU ITEM ON SCROLL
// Cache selectors
var lastId,
  topMenu = $("#navbar-nav"),
  topMenuHeight = topMenu.outerHeight() + 1,
  // // All list items
  menuItems = topMenu.find("a"),
  // // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind to scroll
$(window).on("scroll", function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent()
      .removeClass("active")
      .end()
      .filter("[href=\\#" + id + "]")
      .parent()
      .addClass("active");
  }
});
