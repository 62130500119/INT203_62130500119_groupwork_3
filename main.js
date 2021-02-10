    const app = {
        data() {
            return {
                images: [{src:'images/image1.jpg',title:'Shiba, Hungry',done: false},
                         {src:'images/image2.jpg',title:'Shiba, Smile',done: false},
                         {src:'images/image3.jpg',title:'Shiba, Serious',done: false}]
            }
        },
    }
    Vue.createApp(app).mount('#app')