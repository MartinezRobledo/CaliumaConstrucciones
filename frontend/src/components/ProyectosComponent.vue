<template>
    <div class="header"></div>
    <h1 class="titulo-principal"><strong>NUESTROS PROYECTOS</strong></h1>
    <section class="contenedor">
        <figure>
            <img src="../assets/img/casa1.png" alt="">
            <div class="capa">
                <h3>Casa 9405</h3>
                <p>4 ambientes 94mts^2. Esplendida casa muy amplia incluye garage</p>
            </div>
        </figure>
        <figure>
            <img src="../assets/img/casa2.png" alt="">
            <div class="capa">
                <h3>Casa 11502</h3>
                <p>8 ambientes 115mts^2. Esplendida casa muy amplia incluye garage</p>
            </div>
        </figure>
        <figure>
            <img src="../assets/img/casa3.png" alt="">
            <div class="capa">
                <h3>Casa 5001</h3>
                <p>3 ambientes 80mts^2. Esplendida casa muy amplia incluye garage</p>
            </div>
        </figure>
        <figure>
            <img src="../assets/img/casa4.png" alt="">
            <div class="capa">
                <h3>Casa 12007</h3>
                <p>2 ambientes 65mts^2. Esplendida casa muy amplia incluye garage</p>
            </div>
        </figure>
        <figure>
            <img src="../assets/img/casa5.png" alt="">
            <div class="capa">
                <h3>Casa 8050</h3>
                <p>4 ambientes 80mts^2. Esplendida casa muy amplia incluye garage</p>
            </div>
        </figure>
        <figure>
            <img src="../assets/img/casa6.png" alt="">
            <div class="capa">
                <h3>Casa 4508</h3>
                <p>2 ambientes 45mts^2. Esplendida casa muy amplia incluye garage</p>
            </div>
        </figure>
    </section>
</template>

<script>
    export default{
        name:'ProyectosComponent',
        props: []
    }
</script>

<style>
.header{
    height: 62px;
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
