<template>
    <div class="slider" ref="slider">
        <figure v-for="image in slides" :key="image.id">
            <img :src="image.url" :alt="image.name"/>
            <div class="capa">
                <p>{{image.name}}</p>
            </div>
        </figure>
    </div>
    <div class="slider-nav">
        <a href="#" v-for="punto in slides.length" :key="punto" @click="moveSlider(punto)" 
        v-bind:class="{'active':punto === puntoActivo}">{{punto}}</a>
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
            this.puntoActivo = n;
            console.log(n, this.width, this.puntoActivo);
            this.slider.scrollTo({
            left: this.width * (n-1),
            behavior: 'smooth'
            })
        }
        },
        setup(){
            const slides = ref([
                {id: 0, url: require("@/assets/img/casa1.png"), name: "Casa 9405"},
                {id: 1, url: require("@/assets/img/casa2.png"), name: "Casa 11502"},
                {id: 2, url: require("@/assets/img/casa3.png"), name: "Casa 5001"},
                {id: 3, url: require("@/assets/img/casa4.png"), name: "Casa 12007"},
                {id: 4, url: require("@/assets/img/casa5.png"), name: "Casa 8050"},
                {id: 5, url: require("@/assets/img/casa6.png"), name: "Casa 4508"}
            ]);
            var puntoActivo = '1';
            return {slides, puntoActivo};
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
    margin-top: 1rem;
}

.slider::-webkit-scrollbar{
    display: none;
}

.slider figure{
    position: relative;
    display: flex;
    scroll-snap-align: center;
    width: 100%;
}

.slider figure .capa{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    align-items: center;
}

.slider figure .capa p{
    margin-top: 35%;
    font-weight: 800;
    font-size: 50px;
    color: goldenrod;
    text-shadow: 2px 1px black;
}

.slider-nav{
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;
    z-index: 1;
}

.slider-nav a{
    background-color: white;
    text-shadow: none;
    text-decoration: none;
    color: transparent;
    border-radius: 100%;
    width: 20px;
}

.active{
    background-color: goldenrod;
}

/*TABLET*/
@media(max-width: 768px){
    .slider{
        width: 60%;
    }
  }
  /*PHONES*/
  @media(max-width: 425px){
    .slider{
        width: 100%;
    }
    .slider figure .capa p{
        font-size: 35px;
        margin-top: 50%;
    }
  }
</style>