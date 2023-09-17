/* Inside parent component calling child component with props */
const GreetingParent = {
  props: {
    message: String,
  },
  template: `
    <div>
      <h1>{{ message }}</h1>
      <p>Parent Component</p>
      <greeting-child :greeting="parentMessage"></greeting-child>
    </div>
  `,
  setup() {
    const parentMessage = Vue.provide('parentMessage', 'Greeting from GreetingParent');
    return { parentMessage };
  },
};


  