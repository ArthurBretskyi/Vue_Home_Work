const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      num1: null,
      num2: null,
      image: "https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg",
      logoWidth: 200,
      attr_name: "href",
      link: "https://ua.vuejs.org/guide/essentials/template-syntax.html#raw-html",
      
      
    };
  },
  methods: {
    onClear() {
      this.num1 = null;
      this.num2 = null;
    },
  },
  
});
app.mount("#myApp");

createApp({
  data() {
    return {
      dollarRate: null,
      grnAmount: null,
    };
  
  },
  computed: {
    dollarAmount() {
      return (this.grnAmount / this.dollarRate).toFixed(2);
    },
  },
  methods: {
    onFocus() {
      this.grnAmount = 0
    }
  }
}).mount("#app2")

