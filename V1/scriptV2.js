var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext ("2d");
var color = ["blue","red","yellow"];
var colorIndice = 0;

pincel.fillStyle = 'black'; //Se define el color del lienzo
pincel.fillRect(0,0,600,400);//Se define el tamaño y ubicación del lienzo

//-------------La función exhibirAlerta se usa para mostrar las coordenadas del puntero -----------//
function exhibirAlerta(evento) {       //Se define la función y llega por parámetro el evento

    var x = evento.pageX - pantalla.offsetLeft; //se toma el parámetro evento y la propiedad pageX descrita con F12 en el canvas
    var y = evento.pageY - pantalla.offsetTop; //con offsetTop offsetLeft se recorta el espacio que por defecto queda en HTML en la posición del canvas tanto arriba como a la izquierda,
    console.log(evento);
    alert("usted hizo un clic en X: " + x+ " y Y: " + y);
}
//---La función dibujarCirsulo realiza el trazo del circulo cuando se activa el evento -----//
function dibujarCirculo(evento){ //Se define la función y llega por parámetro el evento
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    pincel.fillStyle=color[colorIndice]; //el método Fillstyle le brinda color al pincel
    pincel.beginPath();     // con beginPath se da orden de trazado
    pincel.arc(x,y,10,0,2*3.14); //con arc se inicia en pos x y Y con radio y Pi
    pincel.fill(); //Se rellena la figura
    console.log("posición X "+ x +" posición Y "+ y);
    console.log("color " +colorIndice);
}

pantalla.onclick = dibujarCirculo; //Al dar click IZQUIERDO se activa el evento
pantalla.oncontextmenu = cambioColor; // oncontextmenu permite usar el evento del clic DERECHO

//---Cambiocolor permite ir cambiando cíclicamente el valor del índice.
function cambioColor (){
    if (colorIndice<color.length-1) {
        colorIndice++;
    }else{
        colorIndice = 0;
    }
}

