/* Child component */
const GreetingChild = {
  template: `
    <div>
      <h1>{{ parentMessage }}</h1>
      <p>Child Component</p>
      <greeting-grand-child></greeting-grand-child>
    </div>
  `,
  setup() {
    const parentMessage = Vue.inject('parentMessage');
    return { parentMessage };
  },
};
