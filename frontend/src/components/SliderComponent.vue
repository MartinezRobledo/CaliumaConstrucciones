<template>
    <div class="slider" ref="slider">
        <img v-for="image in slides" :src="image.url" :alt="image.name" :key="image.id"/>
    </div>
    <div class="slider-nav">
        <a href="#" v-for="n in slides.length" :key="n" @click="moveSlider(n)">{{n}}</a>
    </div>
</template>

<script>
import { ref } from "vue";
export default{
        name:'ProyectosComponent',
        mounted() {
            this.slider = this.$refs.slider;
            this.width = this.slider.offsetWidth;
        },
        methods: {
        moveSlider(n) {
            console.log(n, this.width);
            this.slider.scrollTo({
            left: this.width * (n-1),
            behavior: 'smooth'
            })
        }
        },
        setup(){
            const slides = ref([
                {id: 0, url: require("@/assets/img/casa1.png"), name: "casa 1"},
                {id: 1, url: require("@/assets/img/casa2.png"), name: "casa 2"},
                {id: 2, url: require("@/assets/img/casa3.png"), name: "casa 3"},
                {id: 3, url: require("@/assets/img/casa4.png"), name: "casa 4"},
                {id: 4, url: require("@/assets/img/casa5.png"), name: "casa 5"},
                {id: 5, url: require("@/assets/img/casa6.png"), name: "casa 6"}
            ])

            return {slides};
        }
}
</script>

<style>
.slider{
    display: flex;
    height: 400px;
    width: 40%;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    z-index: 1;
    flex-wrap: nowrap;
    gap: 20px;
}

.slider::-webkit-scrollbar{
    display: none;
}

.slider img{
    scroll-snap-align: center;
    width: 100%;
}

.slider-nav{
    display: flex;
    gap: 2rem;
    z-index: 1;
}

.slider-nav a{
    background-color: brown;
}
</style>