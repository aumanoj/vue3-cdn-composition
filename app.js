/* Include components here */
import Counter from './components/Counter.js';
import GreetingParent from './components/GreetingParent.js';
import GreetingChild from './components/GreetingChild.js';
import GreetingGrandChild from './components/GreetingGrandChild.js';
/* Init app */
const app = Vue.createApp({
    setup() {
      const greetingMessage = Vue.ref('Greeting from parrent app component');
      Vue.provide('parentMessage', greetingMessage);;
    },
  });
  
  /* Register component here */
  app.component('counter', Counter);
  app.component('greeting-parent', GreetingParent);
  app.component('greeting-child', GreetingChild);
  app.component('greeting-grand-child', GreetingGrandChild);

  app.mount('#app');