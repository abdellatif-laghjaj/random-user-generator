const app = Vue.createApp({
    data(){
        return{
            first_name: "Jhon",
            last_name: "Doe",
            email: "jhon.doe@gmail.com",
            gender: "male",
            picture: "https://randomuser.me/api/portraits/men/1.jpg"
        }
    },
    methods: {
        async getRandomUser(){
            const res = await fetch("https://randomuser.me/api/");
            const {data} = await res.json();

            this.first_name = data[0].name.first;
            this.last_name = data[0].name.last;
            this.email = data[0].email;
            this.gender = data[0].gender;
            this.picture = data[0].picture.large;
        }
    },
}) 

app.mount("#app");