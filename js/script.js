const { createApp } = Vue;

createApp({
    data(){
        return{
            newToDo: '',
            listToDo: [],
            apiUrl: './server.php'
        }
    },
    methods:{
        getToDoList(){
            axios.get(this.apiUrl).then((response) => {
                this.newToDo = response.data;
            });
        },
        addNewToDo(){
            const data ={
                toDoTxt: this.toDoTxt,
            }
            axios.post(
                this.apiUrl,
                data,
                {headers: {'Content-Type': 'multipart/form-data'} }
            ).then((response) => {
                this.addNewToDo();
                this.newToDo = '';
            });
        },
    },
    mounted(){
        this.getToDoList();
    },
}).mount('#app');