//Botones
var botonPiedra = document.getElementById("botonPiedra");
var botonPapel = document.getElementById("botonPapel");
var botonTijera = document.getElementById("botonTijera");

//Div de imagenes
var usuarioImagen = document.getElementById("usuarioImg"); 
var cpuImagen = document.getElementById("cpuImg");

//Párrafo ganador
var ganador = document.getElementById("ganador");

//imagenes
var imgUsuario = [
  '<img class="imagenes" src="./img/plaImg.jpg">',
  '<img class="imagenes" src="./img/plaImg1.jpg">',
  '<img class="imagenes" src="./img/plaImg2.jpg">'
];

var imgCpu = [
  '<img class="imagenes tijeraCpu" src="./img/cpuImg.jpg">',
  '<img class="imagenes papelCpu" src="./img/cpuImg1.jpg">',
  '<img class="imagenes piedraCpu" src="./img/cpuImg2.jpg">'
];


botonPiedra.addEventListener('click', () => {
  ganador.innerHTML = "";
  usuarioImagen.innerHTML = "";
  cpuImagen.innerHTML = "";
  console.log("Borre toda imagen que haya");
  usuarioImagen.classList.toggle("active");
  cpuImagen.classList.toggle("active1");
  console.log("Active la animación");
  setTimeout(() => {
    usuarioImagen.innerHTML = imgUsuario[0];
    cpuImagen.innerHTML = imgCpu[randomNumber(1, 3)];
    console.log("Prueba");
    
    usuarioImagen.classList.toggle("active");
    cpuImagen.classList.toggle("active1");
    console.log("Desactive la animación");
    
    // ganador();
  }, 3000);
});

botonPapel.addEventListener('click', () => {
  ganador.innerHTML = "";
  usuarioImagen.innerHTML = "";
  cpuImagen.innerHTML = "";
  console.log("Borre toda imagen que haya");
  usuarioImagen.classList.toggle("active");
  cpuImagen.classList.toggle("active1");
  console.log("Active la animación");
  setTimeout(() => {
    usuarioImagen.innerHTML = imgUsuario[2];
    cpuImagen.innerHTML = imgCpu[randomNumber(1, 3)];
    console.log("Prueba");
    
    usuarioImagen.classList.toggle("active");
    cpuImagen.classList.toggle("active1");
    console.log("Desactive la animación");

    // ganador();
  }, 3000);
});

botonTijera.addEventListener('click', () => {
  ganador.innerHTML = "";
  usuarioImagen.innerHTML = "";
  cpuImagen.innerHTML = "";
  console.log("Borre toda imagen que haya");
  usuarioImagen.classList.toggle("active");
  cpuImagen.classList.toggle("active1");
  console.log("Active la animación");
  setTimeout(() => {
    usuarioImagen.innerHTML = imgUsuario[1];
    cpuImagen.innerHTML = imgCpu[randomNumber(1, 3)];
    console.log("Prueba");
    
    usuarioImagen.classList.toggle("active");
    cpuImagen.classList.toggle("active1");
    console.log("Desactive la animación");

    // ganador();
  }, 3000);
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}