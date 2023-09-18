

import GreetingParent from './components/GreetingParent.js';
import GreetingChild from './components/GreetingChild.js';
import GreetingGrandChild from './components/GreetingGrandChild.js';
const app = Vue.createApp({
    setup() {
      const count = Vue.ref(0);
      const greetingMessage = 'Greeting from parrent app component';
      return {
        count,
        greetingMessage,
      };
    },
  });
  
  /* Register component here */
  app.component('greeting-parent', GreetingParent);
  app.component('greeting-child', GreetingChild);
  app.component('greeting-grand-child', GreetingGrandChild);

  app.mount('#app');