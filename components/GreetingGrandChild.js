/* Grand Child component */
const GreetingGrandChild = {
    template: `
      <div>
        <h1>{{ parentMessage }}</h1>
        <p>Grand Child Component</p>
      </div>
    `,
    setup() {
        const parentMessage = Vue.inject('parentMessage');
        return { parentMessage };
      },
};
    