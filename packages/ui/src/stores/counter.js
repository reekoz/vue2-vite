import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++;
    },
  },
});

export default useCounterStore;
