/* Counter component */
const counter = {
  template: `
  <div class="counter">
    <p>Count: {{ count }}</p>
    <label for="increment">Increment Value:</label>
    <input type="number" id="increment" v-model="incrementValue" />
    <button @click="incrementCounter(incrementValue)">Increment</button>
  </div>
  `,
  setup() {
    const count = Vue.ref(0)
    const incrementValue = Vue.ref(1)
    const incrementCounter = increment => count.value += increment
    return{
      count,
      incrementCounter,
      incrementValue
    }
  }
}
  
export default counter
  
    