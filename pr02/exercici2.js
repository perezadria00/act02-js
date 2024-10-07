
const tablaPropiedades = document.getElementById('taula_propietats');

function crearTabla() {
    const table = document.createElement('table');
    const propiedades = [
        { descripcion: 'Valor máximo de un número en JS', valor: Number.MAX_VALUE },
        { descripcion: 'Altura total de la pantalla', valor: window.screen.height },
        { descripcion: 'Altura interna de la ventana', valor: window.innerHeight },
        { descripcion: 'URL de la web', valor: window.location.href }
    ];

    propiedades.forEach(propiedad => {
        const row = table.insertRow();
        const cellDescripcion = row.insertCell(0);
        const cellValor = row.insertCell(1);
        cellDescripcion.textContent = propiedad.descripcion;
        cellValor.textContent = propiedad.valor;
    });

    tablaPropiedades.appendChild(table);
}

crearTabla();


let cuentaRegresiva;
let tiempoRestante = 0;

const cuentaAtrasElem = document.getElementById('cuenta_atras');
const minutosElem = document.getElementById('minutos');
const segundosElem = document.getElementById('segundos');

document.getElementById('start').addEventListener('click', () => {
    const minutos = parseInt(minutosElem.value);
    const segundos = parseInt(segundosElem.value);
    tiempoRestante = (minutos * 60) + segundos;
    if (cuentaRegresiva) clearInterval(cuentaRegresiva);
    iniciarCuentaAtras();
});

document.getElementById('pause').addEventListener('click', () => {
    if (cuentaRegresiva) clearInterval(cuentaRegresiva);
});

document.getElementById('reset').addEventListener('click', () => {
    if (cuentaRegresiva) clearInterval(cuentaRegresiva);
    tiempoRestante = 0;
    cuentaAtrasElem.textContent = "00:00";
});

function iniciarCuentaAtras() {
    cuentaRegresiva = setInterval(() => {
        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;
        cuentaAtrasElem.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        tiempoRestante--;

        if (tiempoRestante < 0) {
            clearInterval(cuentaRegresiva);
            alert('¡Tiempo terminado!');
            reproducirMusica();
        }
    }, 1000);
}

const relojElem = document.getElementById('reloj');
let alarmaEstablecida = null;
let alarmaSonando = false;
let alarmaAudio = new Audio();

document.getElementById('setAlarma').addEventListener('click', () => {
    const horaAlarma = document.getElementById('alarma').value;
    if (horaAlarma) {
        alarmaEstablecida = horaAlarma;
        alert(`Alarma establecida para las ${alarmaEstablecida}`);
    }
});

document.getElementById('play').addEventListener('click', reproducirMusica);
document.getElementById('stop').addEventListener('click', detenerMusica);

function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    relojElem.textContent = `${horas}:${minutos}:${segundos}`;

    if (alarmaEstablecida && `${horas}:${minutos}` === alarmaEstablecida && !alarmaSonando) {
        alarmaSonando = true;
        reproducirMusica();
    }
}

function reproducirMusica() {
  const seleccionMusica = document.getElementById('musica').value;
  alarmaAudio.src = seleccionMusica; 
  alarmaAudio.volume = document.getElementById('volumen').value;
  alarmaAudio.play();
}

function detenerMusica() {
  alarmaAudio.pause();
  alarmaAudio.currentTime = 0; 
}


setInterval(actualizarReloj, 1000);
