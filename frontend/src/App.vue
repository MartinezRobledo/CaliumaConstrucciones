<template>
    <header>
        <nav>
        <div class="nav">
            <div class="logo"><p>Caliuma</p></div>
            <input type="checkbox" id="check">
            <label for="check" class="bar-btn"><span class="material-icons">menu</span></label>
            <ul>
                <li><router-link class="nav-link" aria-current="page" to="/">Home</router-link></li>
                <li><router-link class="nav-link" to="acercade">Acerca De</router-link></li>
                <li><router-link class="nav-link" to="proyectos">Proyectos</router-link></li>
                <li><router-link class="nav-link" to="contacto">Contacto</router-link></li>
            </ul>
            <div class="flex"></div>
            <div class="search-bar">
                <input type="text" class="input-search">
                <button><span class="material-icons">search</span></button>
            </div>
        </div>
    </nav>
    </header>
    <div>
        <router-view/>
    </div>
    <footer>
        <p>Caliuma | Todos los derechos reservados</p>
    </footer>
</template>

<script>
export default {
  name: 'App',
  components: {
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
    position: absolute;
    z-index: 9;
    top: 0;
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

nav a.router-link-exact-active {
  color: goldenrod;
  border: 1px solid;
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
