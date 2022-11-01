<template>
    <header>
        <nav>
            <div class="nav">
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
    <main>
        <h1 class="titulo-principal"><strong>NUESTROS PROYECTOS</strong></h1>
        <section class="contenedor">
            <figure>
                <img src="../assets/img/casa1.png" alt="">
                <div class="capa">
                    <h3>Titulo del Proyecto</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quod voluptatum eligendi.
                        Eaque.</p>
                </div>
            </figure>
            <figure>
                <img src="../assets/img/casa2.png" alt="">
                <div class="capa">
                    <h3>Titulo del Proyecto</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quod voluptatum eligendi.
                        Eaque.</p>
                </div>
            </figure>
            <figure>
                <img src="../assets/img/casa3.png" alt="">
                <div class="capa">
                    <h3>Titulo del Proyecto</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quod voluptatum eligendi.
                        Eaque.</p>
                </div>
            </figure>
            <figure>
                <img src="../assets/img/casa4.png" alt="">
                <div class="capa">
                    <h3>Titulo del Proyecto</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quod voluptatum eligendi.
                        Eaque.</p>
                </div>
            </figure>
            <figure>
                <img src="../assets/img/casa5.png" alt="">
                <div class="capa">
                    <h3>Titulo del Proyecto</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quod voluptatum eligendi.
                        Eaque.</p>
                </div>
            </figure>
            <figure>
                <img src="../assets/img/casa6.png" alt="">
                <div class="capa">
                    <h3>Titulo del Proyecto</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quod voluptatum eligendi.
                        Eaque.</p>
                </div>
            </figure>
        </section>
    </main>
</template>

<script>
    export default{
        name:'ProyectosComponent',
        props: []
    }
</script>
