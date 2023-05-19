pantalla = document.querySelector('canvas');
pincel = pantalla.getContext("2d");
pincel.fillStyle ="lightgrey";
pincel.fillRect(0,0,600,400);
var movX = 10;
var movY = 10;
var sentido = 1;

function disenharCircunferencia(x,y,radio){
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
    console.log(x +"y" +y)
    
}

setInterval(movimiento,5);


function movimiento(){
    
    limpiarPantalla();
    disenharCircunferencia(movX,movY,10);
    if (movX>=600){
        sentido = 0;
    }else if (movX <=0){
        sentido = 1;
    }
    if (sentido == 1){
    movX++;
    }else if(sentido==0){
        movX--;
    }
}

function limpiarPantalla(){
    pincel.clearRect(0,0,600,400);
}