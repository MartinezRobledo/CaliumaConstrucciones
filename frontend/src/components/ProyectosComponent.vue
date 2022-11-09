<template>
    <div class="header"></div>
    <div class="titulo-principal">
        <h1><strong>NUESTROS PROYECTOS</strong></h1>
    </div>
    <div class="ubicacion">
    <p v-show="permiso">Se muestran resultados para la zona de: {{ubicacion.display_name}}</p>
    <button @click="obtener()">Buscar proyectos disponibles en mi zona</button>
    </div>
    <section class="contenedor" v-show="permiso">
        <figure v-for="casa in slides" :key="casa.id">
            <img :src="casa.url" :alt="casa.name">
            <div class="capa">
                <h3>{{casa.name}}</h3>
                <p>{{casa.description}}</p>
            </div>
        </figure>
    </section>
</template>

<script>
import { ref } from "vue";
    export default{
        name:'ProyectosComponent',
        props: [],
        methods:{
            obtener(){
                console.log(this.permiso);
                if(!this.permiso)
                    navigator.geolocation.getCurrentPosition(this.mostrarPosicion, this.gestionDeErrores);
            },
            async mostrarPosicion(posicion){
                // this.ubicacion += "Latitud: " + posicion.coords.latitude + "\n";
                // this.ubicacion += "Longitud: " + posicion.coords.longitude + "\n";
                // this.ubicacion += "Exactitud: " + posicion.coords.accuracy + "\n";
                const urlApi = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + posicion.coords.latitude + 
                "&lon=" + posicion.coords.longitude + "&zoom=10";
                this.ubicacion = await (await fetch(urlApi)).json();
                console.log(this.ubicacion);
                this.permiso = true;
            },
            gestionDeErrores(error){
                this.permiso = false;
                if(error.code == 1)
                    alert("Debe permitir el uso de su ubicacion para ver el contenido " + error.message);
            }
        },
        data:function(){
            return{
                permiso: false,
                ubicacion: '',
            }
        },
        setup(){
            const slides = ref([
                {id: 0, url: require("@/assets/img/casa1.png"), name: "Casa 9405", description: "4 ambientes 94mts^2. Esplendida casa muy amplia incluye garage"},
                {id: 1, url: require("@/assets/img/casa2.png"), name: "Casa 11502", description: "8 ambientes 115mts^2. Esplendida casa muy amplia incluye garage"},
                {id: 2, url: require("@/assets/img/casa3.png"), name: "Casa 5001", description: "3 ambientes 80mts^2. Esplendida casa muy amplia incluye garage"},
                {id: 3, url: require("@/assets/img/casa4.png"), name: "Casa 12007", description: "2 ambientes 65mts^2. Esplendida casa muy amplia incluye garage"},
                {id: 4, url: require("@/assets/img/casa5.png"), name: "Casa 8050", description: "4 ambientes 80mts^2. Esplendida casa muy amplia incluye garage"},
                {id: 5, url: require("@/assets/img/casa6.png"), name: "Casa 4508", description: "2 ambientes 45mts^2. Esplendida casa muy amplia incluye garage"}
            ]);
            return {slides};
        }
    }
</script>

<style>
.header{
    height: 62px;
}
    /*PROYECTOS*/ 
.titulo-principal{
    color: black;
    padding: 5px 1px;
    margin: 15px;
    text-align: center;
}

.titulo-principal h1{
    display: inline;
    border-bottom: 1px solid goldenrod;
}

.contenedor{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 1rem;
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

.ubicacion{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
}

.ubicacion p{
    font-weight: 400;
    font-size: 20px;
}

.ubicacion button{
    background-color: transparent;
    border-radius: 1px;
    border: 1px solid goldenrod;
    color: goldenrod;
    font-size: 15px;
    padding: 5px;
    margin-top: 2px;
    transition: all 300ms ease-in-out;
    cursor: pointer;
}

.ubicacion button:hover{
    background-color: rgba(0, 103, 123, 0.5);
}
/*PC MD*/
@media(max-width: 1400px){
    .contenedor figure{
        width: 350px;
        height: 320px;
    }
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
