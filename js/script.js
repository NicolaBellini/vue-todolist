const{createApp}=Vue

createApp({
  data() {
    return {
      toDoList:[
        {
          text:'todo-thing',
          done: true,
        },
        {
          text:'todo-thing',
          done: false,
        },
        {
          text:'todo-thing',
          done: false,
        },
        {
          text:'todo-thing',
          done: true,
        },
      ],
    }
  },

  mounted() {
    console.log('ciao');
  },
}).mount('#app')