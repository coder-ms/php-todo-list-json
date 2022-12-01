const { createApp } = Vue;

createApp({
    data(){
        return{
            newToDoText: '',
            listToDo: [],
            apiUrl: './server.php'
        }
    },
    methods:{
        getToDoList(){
            axios.get(this.apiUrl).then((response) => {
                this.listToDo = response.data;
            });
        },
        addNewToDo(){
            const data ={
                newToDoText: this.newToDoText,
            }
            axios.post(
                this.apiUrl,
                data,
                {headers: {'Content-Type': 'multipart/form-data'} }
            ).then((response) => {
                this.getToDoList();
                this.newToDoText = '';
            });
        },
    },
    mounted(){
        this.getToDoList();
    },
}).mount('#app');