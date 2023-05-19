pantalla = document.querySelector('canvas');
pincel = pantalla.getContext("2d");
pincel.fillStyle ="lightgrey";
pincel.fillRect(0,0,600,400);
var color1 = "red";
var color2 = "blue";
var color3 = "white";
var movX = 300;
var movY = 200;

function disenharCircunferencia(x,y,radio, color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
    console.log(x +"y" +y)
    
}
disenharCircunferencia(movX,movY,100,color1);
disenharCircunferencia(movX,movY,50,color2);
disenharCircunferencia(movX,movY,25,color3);

//setInterval(movimiento,5);


/* function movimiento(){
    
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
} */

function limpiarPantalla(){
    pincel.clearRect(0,0,600,400);
}