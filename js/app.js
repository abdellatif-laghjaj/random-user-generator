const app = Vue.createApp({
    data(){
        return{
            first_name: "Jhon",
            last_name: "Doe",
            email: "jhon.doe@gmail.com",
            gender: "male",
            picture: "https://randomuser.me/api/portraits/men/1.jpg"
        }
    }
}) 

app.mount("#app");