
window.setInterval(mostraLlista, 1000);

function mostraLlista(){
    let llista_propietats = document.getElementById("llista_propietats");
    let date = new Date();
    llista_propietats.innerHTML = `<ol><li> Valor mínim que pot tenir un element JS: `+ Number.MIN_VALUE +`</li>`+`<li> Amplada total de la pantalla: ` + screen.width + `px </li>` + 
                                        
     `<li>Amplada interna de la finestra:` + window.innerWidth + `cm </li> ` + `<li> Títol de la web: ` + document.title + `</li>` + `<li> Hora actual: ` + date.getHours() + `h ` + date.getMinutes() + `m` + `</li>` + `</ol>`;
}

