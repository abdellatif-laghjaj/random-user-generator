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
            const res = await fetch('https://randomuser.me/api/');
            const { results } = await res.json();

            console.log(results);

            this.first_name = results[0].name.first;
            this.last_name = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
        }
    },
}) 

app.mount("#app");