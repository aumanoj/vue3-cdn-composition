/* Child component */
const GreetingChild = {
  template: `
    <div class="pl-2">
      <p>Child Component</p>
      <h1>{{ parentMessage }}</h1>
      <greeting-grand-child></greeting-grand-child>
    </div>
  `,
  setup() {
    const parentMessage = Vue.inject('parentMessage');
    return { parentMessage };
  },
};
export default GreetingChild