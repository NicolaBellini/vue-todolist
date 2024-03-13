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
          text:'babbo',
          done: false,
        },
        {
          text:'luca',
          done: false,
        },
        {
          text:'quarto',
          done: true,
        },
      ],
      newTask:'',
    }
  },

  methods: {
    removeTask(index){
      this.toDoList.splice(index, 1)
    }
  },

  mounted() {
    console.log('ciao');
  },
}).mount('#app')