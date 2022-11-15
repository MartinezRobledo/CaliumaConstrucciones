<template>
  <header>
      <nav>
      <div class="nav" v-bind:style="{background: color}">
          <router-link class="logo" to="/" @click="changeColor('transparent')"><p>Caliuma</p></router-link>
          <input type="checkbox" id="check">
          <label for="check" class="bar-btn"><span class="material-symbols-outlined">menu</span></label>
          <ul>
              <li><router-link class="nav-link" aria-current="page" to="/" @click="changeColor('transparent')">Home</router-link></li>
              <li><router-link class="nav-link" to="acercade" @click="changeColor('rgb(0, 103, 123)')">Acerca De</router-link></li>
              <li><router-link class="nav-link" to="proyectos" @click="changeColor('rgb(0, 103, 123)')">Proyectos</router-link></li>
              <li><router-link class="nav-link" to="contacto" @click="changeColor('rgb(0, 103, 123)')">Contacto</router-link></li>
          </ul>
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
},
created: function(){
  let dataDB = localStorage.getItem('color');
  if(dataDB === null){
      this.color = 'transparent'
  }else{
      this.color = dataDB;
  }
},
methods: { 
      changeColor(color){
          this.color = color;
          localStorage.setItem('color', this.color);
      }
  },
  data: function(){
      return{
          color:''
      }
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
  background: white;
  background-repeat: no-repeat;
  min-height: 100vh;
}
footer{
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
  transition: all 1s ease-in-out;
}
nav li .router-link-exact-active {
color: goldenrod;
border: 1px solid;
}
nav .router-link-exact-active {
color: goldenrod;
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
.logo{
  font-weight: 800;
  font-size: 30px;
  text-decoration: none;
  color: white;
  margin: 0 10px;
  text-shadow: 1px 1px aquamarine;
  transition: all 500ms ease-out;
  cursor: pointer;
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
      color: goldenrod;
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