<template>
    <main class="home-content">
        <div class="video-bg"><video src="../assets/video/video-presentacion.mp4" autoplay loop muted></video></div>
        <div class="overlay"></div>
        <div class="carrousel">
            <div class="grande">
                <img src="../assets/img/casa1.png" alt="" class="img">
                <img src="../assets/img/casa2.png" alt="" class="img">
                <img src="../assets/img/casa3.png" alt="" class="img">
                <img src="../assets/img/casa4.png" alt="" class="img">
                <img src="../assets/img/casa5.png" alt="" class="img">
                <img src="../assets/img/casa6.png" alt="" class="img">
            </div>
            <div>
                <ul class="puntos">
                    <li class="punto activo"></li>
                    <li class="punto"></li>
                    <li class="punto"></li>
                    <li class="punto"></li>
                    <li class="punto"></li>
                    <li class="punto"></li>
                </ul>
            </div>
        </div>
        <p>CALIUMA CONSTRUCCIONES</p>
    </main>
</template>

<script>
    export default{
        name:'HomeComponent',
        props:[]
    }

    const grande    = document.querySelector('.grande')
    const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
    punto.forEach( ( cadaPunto , i )=> {
        // Asignamos un CLICK a cadaPunto
        punto[i].addEventListener('click',()=>{

            // Guardar la posición de ese PUNTO
            let posicion  = i
            // Calculando el espacio que debe DESPLAZARSE el GRANDE
            let operacion = posicion * (-100/6)

            // MOVEMOS el grand
            grande.style.transform = `translateX(${ operacion }%)`

            // Recorremos TODOS los punto
            punto.forEach( ( cadaPunto , i )=>{
                // Quitamos la clase ACTIVO a TODOS los punto
                punto[i].classList.remove('activo')
            })
            // Añadir la clase activo en el punto que hemos hecho CLICK
            punto[i].classList.add('activo')

        })
    })
</script>

<style>
</style>