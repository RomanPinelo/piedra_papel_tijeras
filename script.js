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
  ['<img class="imagenes" src="./img/cpuImg.jpg">', "tijeraCpu"],
  ['<img class="imagenes" src="./img/cpuImg1.jpg">', "papelCpu"],
  ['<img class="imagenes" src="./img/cpuImg2.jpg">',"piedraCpu"]
];

//Funciones
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


//Botones
botonPiedra.addEventListener('click', () => {
  let eleccion = "piedraCpu";
  ganador.innerHTML = "";
  usuarioImagen.innerHTML = "";
  cpuImagen.innerHTML = "";
  console.log("Borre toda imagen que haya");
  usuarioImagen.classList.toggle("active");
  cpuImagen.classList.toggle("active1");
  console.log("Active la animación");
  setTimeout(() => {
    let numRand = randomNumber(0, 3);
    console.log(numRand);
    usuarioImagen.innerHTML = imgUsuario[0];
    cpuImagen.innerHTML = imgCpu[numRand][0];
    console.log("Prueba");
    
    usuarioImagen.classList.toggle("active");
    cpuImagen.classList.toggle("active1");
    console.log("Desactive la animación");

    console.log("Comprobaré quien gana o quedan empates");
    if (eleccion == imgCpu[numRand][1]) {
      ganador.innerHTML = "Empates";
    } else if ((eleccion) && (imgCpu[numRand][1] == "tijeraCpu")) {
      ganador.innerHTML = "¡¡Ganaste!!";
    } else {
      ganador.innerHTML = "¡¡Perdiste!!";
    }
  }, 2500);
});

botonPapel.addEventListener('click', () => {
  let eleccion = "papelCpu";
  ganador.innerHTML = "";
  usuarioImagen.innerHTML = "";
  cpuImagen.innerHTML = "";
  console.log("Borre toda imagen que haya");
  usuarioImagen.classList.toggle("active");
  cpuImagen.classList.toggle("active1");
  console.log("Active la animación");
  setTimeout(() => {
    let numRand = randomNumber(0, 3);
    console.log(numRand);
    usuarioImagen.innerHTML = imgUsuario[2];
    cpuImagen.innerHTML = imgCpu[numRand][0];
    console.log("Prueba");
    
    usuarioImagen.classList.toggle("active");
    cpuImagen.classList.toggle("active1");
    console.log("Desactive la animación");

    console.log("Comprobaré quien gana o quedan empates");
    if (eleccion == imgCpu[numRand][1]) {
      ganador.innerHTML = "Empates";
    } else if ((eleccion) && (imgCpu[numRand][1] == "piedraCpu")) {
      ganador.innerHTML = "¡¡Ganaste!!";
    } else {
      ganador.innerHTML = "¡¡Perdiste!!";
    }
  }, 2500);
});

botonTijera.addEventListener('click', () => {
  let eleccion = "tijeraCpu";
  ganador.innerHTML = "";
  usuarioImagen.innerHTML = "";
  cpuImagen.innerHTML = "";
  console.log("Borre toda imagen que haya");
  usuarioImagen.classList.toggle("active");
  cpuImagen.classList.toggle("active1");
  console.log("Active la animación");
  setTimeout(() => {
    let numRand = randomNumber(0, 3);
    console.log(numRand);
    usuarioImagen.innerHTML = imgUsuario[1];
    cpuImagen.innerHTML = imgCpu[numRand][0];
    console.log("Prueba");
    
    usuarioImagen.classList.toggle("active");
    cpuImagen.classList.toggle("active1");
    console.log("Desactive la animación");

    console.log("Comprobaré quien gana o quedan empates");
    if (eleccion == imgCpu[numRand][1]) {
      ganador.innerHTML = "Empates";
    } else if ((eleccion) && (imgCpu[numRand][1] == "papelCpu")) {
      ganador.innerHTML = "¡¡Ganaste!!";
    } else {
      ganador.innerHTML = "¡¡Perdiste!!";
    }
  }, 2500);
});