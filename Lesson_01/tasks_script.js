const { createApp } = Vue;
createApp({
  data() {
    return {
      passengersAmount: null,
      busPlaces: 20,
      bottlesPerPassenger: 2,
      sandwichesPerPassenger: 3,
    };
  },
  computed: {
    getBusesAmount() {
      return (this.passengersAmount / this.busPlaces).toFixed(1);
    },
    getBottlesAmount() {
      return this.passengersAmount * this.bottlesPerPassenger;
    },
    getSandwichesAmount() {
      return this.passengersAmount * this.sandwichesPerPassenger;
    },
  },
}).mount("#app");

//==================================================================================

createApp({
  data() {
    return {
      month: null,
      imgSource: null,
      imgWidth: 400,
    };
  },
  computed: {
    getSomeClothes() {
      if (this.month !== null) {
        let season;
        switch (this.month) {
          case 12:
          case 1:
          case 2:
            season = "It's Winter, put on a warm Jacket";
            this.imgSource =
              "https://st2.depositphotos.com/3651191/8439/i/450/depositphotos_84390942-stock-photo-winter-in-the-carpathian-mountains.jpg";
            break;
          case 3:
          case 4:
          case 5:
            season = "It's Spring, put on a Sweater";
            this.imgSource =
              "https://photographers.ua/thumbnails/pictures/35076/800ximg_3832.jpg";
            break;
          case 6:
          case 7:
          case 8:
            season = "It's Summer, put on a T-Shirt";
            this.imgSource =
              "https://cdn-pl0.puzzlegarage.com/img/puzzle/1a/3258_preview.v1.webp";
            break;
          case 9:
          case 10:
          case 11:
            season = "It's Autumn, put on a Coat";
            this.imgSource =
              "https://artpriz.com.ua/wp-content/uploads/2020/07/i15242343-8421415a42bd04827400d1b4fec8338b-600x436.jpg";
            break;
          default:
            throw new Error("Incorrect Number");
            break;
        }
        return season;
      } else
        this.imgSource =
          "https://t3.ftcdn.net/jpg/01/76/98/40/240_F_176984023_8I82qQPmKn8TqNAZXIYMCSiwccoUiPBg.jpg";
    },
  },
}).mount("#app2");

//============================================================================

createApp({
  data() {
    return {
      minNumber: 12,
      maxNumber: 100,
      randNum: null,
    };
  },

  methods: {
    onClick() {
      this.randNum =
        this.minNumber +
        Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1));
    },
  },
}).mount("#app3");

//==============================================================================

createApp({
  data() {
    return {
      login: null,
      password: null,
      error: null,
      greeting: null,
      usersAuth: [
        {
          login: "user1",
          password: "111",
        },
        {
          login: "user2",
          password: "222",
        },
        {
          login: "user3",
          password: "333",
        },
      ],
    };
  },
  // methods: {
  //   onClick() {
  //     for (const user of this.usersAuth) {
  //       if (user.login === this.login && user.password === this.password) {
  //         this.greeting = "Welcome on board!";
  //         return
  //       } else {
  //         this.error = "*authorization error";
  //       }
  //     }
  //   },
  // },
  methods: {
    onClick() {
      const user = this.usersAuth.find((elem) => {
        return elem.login === this.login;
      });

      if (!user) {
        this.error = "*authorization error";
      } else if (user.password !== this.password) {
        this.error = "*authorization error";
      } else if (user.password === this.password) {
        this.greeting = "Welcome on board!";
      }
    },
  },
}).mount("#app5");

//============================================================================
const TAX_PERCENTAGE = 3;
const DOLLAR_RATE = 36;
const EURO_RATE = 38;
createApp({
  data() {
    return {
      balance: 0,
      addMoney: null,
      withdrawMoney: null,
      message: "",
    };
  },
  computed: {
    balanceRender() {
      return this.balance.toFixed(2)
    },
    taxDefinition() {
      let sum = (this.addMoney ?? 0) + (this.withdrawMoney ?? 0);
      return (sum * TAX_PERCENTAGE) / 100;
    },
    taxRender() {
      return this.taxDefinition.toFixed(2);
    },
    dollarRateValue() {
      return (this.balance / DOLLAR_RATE).toFixed(2);
    },
    euroRateValue() {
      return (this.balance / EURO_RATE).toFixed(2);
    },
  },
  methods: {
    onAddMoney() {
      (this.balance += this.addMoney - this.taxDefinition);
      this.addMoney = null;
      return
    },
    onWithdrawMoney() {
      let sumSubtract = this.withdrawMoney + this.taxDefinition;
      if (this.balance < sumSubtract) {
        this.message = "Не достатньо коштів";
        return;
      }

      this.balance -= sumSubtract;
      this.withdrawMoney = null;
    },
    onFocus() {
      this.message = null
    },
  },
}).mount("#app4");
