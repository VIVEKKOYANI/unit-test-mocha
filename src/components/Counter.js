module.exports = {
  template: `
    <div>
    <span class="count">{{count}}</span>
    <button @click="increment">Increment</button>
    </div>
    `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count = this.count + 1;
    },
  },
};