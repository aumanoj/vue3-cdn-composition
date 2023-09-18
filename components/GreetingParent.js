/* Inside parent component calling child component with props */
const GreetingParent = {
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
  setup(props) {
    const parentMessage = Vue.provide('parentMessage', props.message);
    return { parentMessage };
  },
};

export default GreetingParent

  