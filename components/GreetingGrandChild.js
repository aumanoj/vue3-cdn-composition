/* Grand Child component */
const GreetingGrandChild = {
    template: `
      <div  class="pl-2">
        <p>Grand Child Component</p>
        <h1>{{ parentMessage }}</h1>
      </div>
    `,
    setup() {
        const parentMessage = Vue.inject('parentMessage');
        return { parentMessage };
      },
};
    
export default GreetingGrandChild