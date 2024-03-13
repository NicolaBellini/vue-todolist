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
      inputTask:null,
      newTask:{
        text: '',
        done: false,
      },
    }
  },

  methods: {
    removeTask(index){
      this.toDoList.splice(index, 1)
    },
    addNewTask(){
      if (this.inputTask.length>4) {
        this.newTask.text = this.inputTask
        this.toDoList.unshift(this.newTask)
        console.log(this.toDoList);
      }
    }
  },

  mounted() {
    console.log('ciao');
  },
}).mount('#app')