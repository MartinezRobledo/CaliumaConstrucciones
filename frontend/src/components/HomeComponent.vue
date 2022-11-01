<template>
    <main class="home-content">
        <header>
            <nav>
                <div class="nav" style="background-color:transparent;">
                    <div class="logo"><p>Caliuma</p></div>
                    <input type="checkbox" id="check">
                    <label for="check" class="bar-btn"><span class="material-icons">menu</span></label>
                    <ul>
                        <li><a class="nav-link active" aria-current="page" href="index.html">Home</a></li>
                        <li><a class="nav-link" href="acercaDe.html">Acerca De</a></li>
                        <li><a class="nav-link" href="proyectos.html">Proyectos</a></li>
                        <li><a class="nav-link" href="contacto.html">Contacto</a></li>
                    </ul>
                    <div class="flex"></div>
                    <div class="search-bar">
                        <input type="text" class="input-search">
                        <button><span class="material-icons">search</span></button>
                    </div>
                </div>
            </nav>
        </header>
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
</script>

<style>
</style>