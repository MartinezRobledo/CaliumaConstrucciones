<template>
    <main class="home-content">
        <div class="header"></div>
        <div class="video-bg"><video src="../assets/video/video-presentacion.mp4" autoplay loop muted></video></div>
        <div class="overlay"></div>
        <p>CALIUMA CONSTRUCCIONES</p>
        <SliderComponent/>
    </main>
</template>

<script>
import SliderComponent from './SliderComponent.vue';

    export default{
    name: "HomeComponent",
    props: [],
    components: { SliderComponent }
}

</script>

<style>
.header{
    height: 62px;
}

/*HOME*/
.video-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.overlay{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    background: rgb(0, 103, 123);
    opacity: 0.65;
    z-index: 0;
    overflow: hidden;
}

.home-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    max-width: 100vw;
}

.home-content > p{
    color: white;
    font-size: 60px;
    font-weight: 900;
    border-bottom: 2px solid black;
    z-index: 1;
}

/*TABLET*/
  @media(max-width: 768px){
    .carrousel{
        width: 100%;
    }
    .home-content> p{
        font-size: 30px;
        font-weight: 300;
    }
    .search-bar{
        display: none;
    }
    .flex{
        display: none;
    }
    .nav{
        justify-content: center;
    }
    
  }
  /*PHONES*/
  @media(max-width: 425px){
    .home-content > p{
        font-size: 20px;
        font-weight: 200;
    }
    .nav{
        justify-content: space-between;
    }
    .bar-btn{
        display: block;
    }
    .nav ul{
        display: block;
        position: fixed;
        width: 100%;
        height: 0vh;
        top: 50px;
        left: 0;
        background: rgba(0, 0, 0, 0.95);
        text-align: center;
        transition: all 0.5s;
        z-index: 3;
    }
    
    .nav ul li{
        display: none;
        line-height: 30px;
        margin: 50px 0;
        transition: all 0.5s;
    }
    
    .nav ul li a{
        color: #fff;
        font-size: 16px;
        background-color: transparent;
        text-transform: uppercase;
        font-weight: 600;
    }
    
    .nav ul li a.active, .nav ul li a:hover{
        color: rgb(127, 195, 255);
        background-color: transparent;
        transition: 0.3s;
    }
    .bar-btn{
        color: #fff;
        font-size: 25px;
        margin-right: 5px;
        cursor: pointer;
    }
    
    #check:checked ~ ul{
        height: 100vh;
    }
    
    #check:checked ~ ul li{
        display: block;
    }

    .carrousel{
        border: none;
    }
  }

</style>