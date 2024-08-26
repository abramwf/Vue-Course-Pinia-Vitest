const app = Vue.createApp({
  data: () => ({
    title: "Hello",
  }),
}).mount("#app");

app.$refs.greeting.innerText = "Another Hello";
