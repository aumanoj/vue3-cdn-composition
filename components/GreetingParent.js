/* Inside parent component calling child component with props */
const GreetingParent = {
  template: `
    <div class="pl-2">
      <p>Parent Component</p>
      <h1>{{ parentMessage }}</h1>
      <greeting-child></greeting-child>
    </div>
  `,
  setup() {
    const parentMessage = Vue.inject('parentMessage')
    return { parentMessage }
  }
}

export default GreetingParent

  