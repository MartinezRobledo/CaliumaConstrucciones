<template>
  <HomeComponent msg=""/>
  <ProyectosComponent msg=""/>
  <ContactoComponent msg=""/>
  <AcercaDeComponent msg=""/>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue';
import ContactoComponent from './components/ContactoComponent.vue';
import ProyectosComponent from './components/ProyectosComponent.vue';
import AcercaDeComponent from './components/AcercaDeComponent.vue';

export default {
  name: 'App',
  components: {
    HomeComponent, ContactoComponent, ProyectosComponent, AcercaDeComponent
  }
}
</script>

<style>
  *{margin: 0;padding: 0;box-sizing: border-box;font-family: sans-serif;text-decoration: none;list-style: none;}

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
  
    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
  
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
  
    /* Support for IE. */
    font-feature-settings: 'liga';
  }

body{
    background: linear-gradient(white, rgb(0, 103, 123));
    background-repeat: no-repeat;
    min-height: 100vh;
}

footer{
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0, 103, 123);
    height: 40px;
    width: 100%;
    color: white;
    padding: 10px;
}

/*HEADER*/
header{
    width: 100%;
}

.nav{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    padding: 10px;
    background: rgb(0, 103, 123);
    font-weight: 500;
    flex: auto;
}

.nav ul{
    display: flex;
}

.nav-link{
    background: white;
    color: black;
    padding: 5px 20px;
    text-decoration-line: none;
    border-radius: 2px;
    height: 100%;
    margin: 0 5px;
    transition: all 500ms ease-out;
}

.nav-link:hover{
    background: rgb(80, 160, 177);
    transform: scale(1.05);
}

.search-bar{
    border: 1px solid #ccc;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    gap: 5px;
    background-color: white;
    height: 30px;
}

.search-bar:focus-within{
    border: 1px solid #aaa;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
}

.search-bar input{
    border: none;
    outline: none;
    flex: auto;
    font-size: 16px;
}

.search-bar button{
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    color: #999;
}

.search-bar button:hover{
    color: rgb(0, 103, 123);
}

.nav .flex{
    flex: auto;
}

.logo{
    font-weight: 800;
    font-size: 30px;
    text-decoration: none;
    color: white;
    margin: 0 10px;
    text-shadow: 1px 1px aquamarine;
    transition: all 500ms ease-out;
}

.logo:hover{
    transform: scale(1.1);
}

.bar-btn{
    display: none;
}

#check{
    display: none;
}

/*PROYECTOS*/
.titulo-principal{
    color: black;
    text-align: center;
    padding: 5px 1px;
    margin: 15px;
}

.contenedor{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.contenedor figure{
    position: relative;
    margin-bottom: 30px;
    height: 350px;
    width: 500px;
    border-radius: 6px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    overflow: hidden;
    transition: all 500ms ease-out;
}

.contenedor figure:hover{
    transform: scale(1.1);
}

.contenedor figure img{
    width: 100%;
    height: 100%;
    transition: all 500ms ease-out;
}

.contenedor figure .capa{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 103, 123, 0.5);
    opacity: 0;
    visibility: hidden;
    text-align: center;
    transition: all 500ms ease-out;
}

.contenedor figure:hover > .capa{
    opacity: 1;
    visibility: visible;
}

.contenedor figure .capa h3{
    color: white;
    font-weight: 600;
    margin-bottom: 120px;
    margin-top: 30px;
    transition: all 500ms ease-out;
}

.contenedor figure:hover > .capa h3{
    margin-top: 70px;
    margin-bottom: 15px;
}

.contenedor figure .capa p{
    color: #fff;
    font-size: 15px;
    line-height: 1.5;
    width: 100%;
    max-width: 220px;
    margin: auto;
}

/*HOME*/
.video-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    overflow: hidden;
}

.overlay{
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgb(0, 103, 123);
    opacity: 0.65;
    z-index: -1;
    overflow: hidden;
}

.home-content{
    position: absolute;
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
}

/*CARRUSEL*/
:root {
    --negro: #393939;
    --blanco: #ececec;
    --sombra-ppal: #c9c9c9;
    --sombra-sec: #ffffff;
    --borde-negro: #00000050;
    --marcado: rgb(127, 195, 255);
  }

.carrousel {
    width: 50%;
    max-width: 120em;
    padding: 1em;
    transition: all 0.4s ease;
    border-radius: 1em;
    background-color: transparent;
    border: 10px solid transparent; 
    border-image: linear-gradient(to bottom, rgb(0, 103, 123) 0%, white 100%) 1;
    overflow: hidden;
    margin: 10vh auto;
  }
  
  .carrousel .grande {
    width: 600%;
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
    justify-content: space-around;
    color: transparent;
    transition: all 0.4s ease;
    border-radius: 1em;
    background-color: transparent;
    transition: all 0.5s ease;
    transform: translateX(0%);
  }

  .carrousel img{
    height: 50vh;
    width: 15%;
  }

  .carrousel .img {
    transition: all 0.4s ease;
    border-radius: 1em;
  }
  
  .carrousel .puntos {
    width: 100%;
    margin: 1em 0 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
  
  .carrousel .punto {
    width: 2em;
    height: 2em;
    margin: 0 0.5em;
    color: transparent;
    transition: all 0.4s ease;
    border-radius: 1em;
    background-color: var(--blanco);
    cursor: pointer;
    }
  
  .carrousel .punto.activo {
    background-color: lightblue;
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
