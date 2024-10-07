// MOSTRAR MISSATGES A L'USUARI
console.log("Hola");
let div = document.getElementById("div_text"); // per a vincular un element html amb js
div.innerHTML = "Hola <h1> HTML </h1>"; // atribut
div.innerText = "Hola <h1> HTML </h1>";
// alert("Pop up"); -> bloqueja la web fins que l'usuari no accepti el pop up, només utilitzar-lo quan sigui necessari

// DEMANAR INFORMACIÓ A L'USUARI
//let numero = window.prompt("Indica un número:");
let input_numero = document.getElementById("input_numero");
let numero = input_numero.value;
let resultat = document.getElementById("resultat");
resultat.innerText = numero;

function sumaValors() {
  let num1 = input_numero.value;
  let num2 = document.getElementById("input_numero2").value;

  resultat.innerText = parseInt(num1) + parseInt(num2);
}

let audio = document.getElementById("audio");
const song_timer = document.getElementById("song_timer");
const timer_span = document.getElementById("timer_span");

function playAudio() {
  audio.src = "sample-12s.mp3";
  audio.play();
  song_timer.max = audio.duration;
  timer_span.max = audio.duration;
 let ref_interval = window.setInterval(function(){
    song_timer.value = audio.currentTime;
    timer_span.innerText=audio.currentTime;
    if(song_timer.value == audio.duration){
      window.clearInterval(ref_interval);
    }
  }, 1000)

}

function playAudio2() {
  audio.src = "sample-15s.mp3";
  audio.play();
}

function btn_stopAudio(){
  audio.pause() = true;
  
}

function btn_muteAudio(){
  audio.muted =! audio.muted;
}

function btn_volUp(){
  try{
    audio.volume += 0.2;
  }catch(e){
    audio.volume = 1;
  }
  document.getElementById("volume_range").value=audio.volume;
}

function btn_volDown(){
  try{
    audio.volume -= 0.2;
  }catch(e){
    audio.volume = 0;
  }
  document.getElementById("volume_range").value=audio.volume;
}

function change_inp_vol(){
  audio.volume = document.getElementById("volume_range").value;
}

window.setTimeout(
  function(){
    document.getElementById("timer_span").innerText = audio.duration;
  }, 500
);


let llista_propietats = document.getElementById("llista_propietats");
let date = new Date();
llista_propietats.innerHTML = `<ol><li> Valor mínim que pot tenir un element JS: `+ Number.MIN_VALUE +`</li>`+`<li> Amplada total de la pantalla: ` + screen.width + `px </li>` + 
                                    
 `<li>Amplada interna de la finestra:` + window.innerWidth + `cm </li> ` + `<li> Títol de la web: ` + document.title + `</li>` + `<li> Hora actual: ` + date.getHours() + `h ` + date.getMinutes() + `m` + `</li>` + `</ol>`;
