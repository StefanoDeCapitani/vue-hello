Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", () => {
  const app = new Vue({
    el: "#root",
    data: {
      title: "Hello World!",
      urlImage: "img/monitor.jpg",
      altImage: "Postazione desktop con monitor",
    },
  });
});
