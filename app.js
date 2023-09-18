/* Include components here */
import GreetingParent from './components/GreetingParent.js';
import GreetingChild from './components/GreetingChild.js';
import GreetingGrandChild from './components/GreetingGrandChild.js';
/* Init app */
const app = Vue.createApp({
    setup() {
      const count = Vue.ref(0);
      const greetingMessage = 'Greeting from parrent app component';
      const parentMessage = Vue.provide('parentMessage', greetingMessage);
      return {
        count,
        parentMessage
      };
    },
  });
  
  /* Register component here */
  app.component('greeting-parent', GreetingParent);
  app.component('greeting-child', GreetingChild);
  app.component('greeting-grand-child', GreetingGrandChild);

  app.mount('#app');