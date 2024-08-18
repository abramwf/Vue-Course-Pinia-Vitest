Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
    };
  },
}).mount("#app");

Vue.createApp({
  data() {
    return {
      firstName: "Jane",
      lastName: "Doe",
    };
  },
}).mount("#app2");
