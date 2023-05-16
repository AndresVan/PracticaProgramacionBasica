var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext ("2d");

pincel.fillStyle = 'grey';
pincel.fillRect(0,0,600,400);

function exhibirAlerta(evento) {            //Se define la función
    console.log(evento);
    alert("usted hizo un clic");
}

pantalla.onclick = exhibirAlerta;  //Se pasa la función como parámetro a pantalla, es decir que se ejecuta el alert unicamente cuando pasa por onclick



