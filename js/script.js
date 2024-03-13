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
      isInputLongEnough:null
    }
  },

  methods: {
    removeTask(element, index){
      if(element.done===true){
        this.toDoList.splice(index, 1)
      }else{
        alert('completa la task prima')
      }
    },
    addNewTask(){
      if (this.inputTask.length>=4) {
        this.newTask.text = this.inputTask;
        this.toDoList.unshift(this.newTask);
        console.log(this.toDoList);
        this.inputTask='';
        this.isInputLongEnough=true
      }else{
        this.isInputLongEnough=false
        this.inputTask='';
      }
    },
 
  },

  mounted() {
    console.log('ciao');
  },
}).mount('#app')