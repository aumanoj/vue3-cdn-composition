/* Inside parent component calling child component with props */
export default {
// const GreetingParent = {
  props: {
    message: String,
  },
  template: `
    <div class="pl-2">
      <p>Parent Component</p>
      <h1>{{ message }}</h1>
      <greeting-child :greeting="parentMessage"></greeting-child>
    </div>
  `,
  setup() {
    const parentMessage = Vue.provide('parentMessage', 'Greeting from GreetingParent');
    return { parentMessage };
  },
};

// export default GreetingParent

  