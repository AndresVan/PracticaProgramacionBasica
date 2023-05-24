pantalla = document.querySelector('canvas');
pincel = pantalla.getContext("2d");
pincel.fillStyle ="lightgrey";
pincel.fillRect(0,0,600,400);
var color1 = "red";
var color2 = "blue";
var color3 = "white";
var movX = 0;
var movY = 0;
var maxX = 600;
var maxY = 400;
var radio = 10;
var x = 0;

//--con disenharCircunferencia se especifíca el cómo crear un círculo -------------------
function disenharCircunferencia(x,y,radio, color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
    console.log(x +"y" +y);
    x++;
}
//----con la función disenharObejtivo se crea la Diana(los 3 círculos al tiempo)------------------------//
function disenharObjetivo(posX, posY){
    disenharCircunferencia(posX,posY,radio +30,color1);
    disenharCircunferencia(posX,posY,radio +20,color2);
    disenharCircunferencia(posX,posY,radio +4,color3);
}
//--- Esta función genera el movimiento de la Diana ---------
function movimiento(){
    limpiarPantalla();
    movX = Math.floor(Math.random()*maxX);
    movY = Math.floor(Math.random()*maxY);
    disenharObjetivo(movX,movY);
}
//--------  Con setInterval se define el intervalo de tiempo para lanzar una fnción
setInterval(movimiento,1000);

//-------- limpiarPantalla limpia la pantalla-----
function limpiarPantalla(){
    pincel.clearRect(0,0,600,400);
}
pantalla.onclick = disparo; //Al dar click izq, se activa la función disparo
function disparo(evento){
    coorX = evento.pageX - pantalla.offsetLeft;
    coorY = evento.pageY - pantalla.offsetTop;
    console.log(coorX+ " Y " + coorY)
    if ((movX + radio)>coorX && coorX > (movX - radio)&& (movY + radio)>coorY && coorY > (movY - radio) ){
    alert ("Haz acertado!");
    }
}