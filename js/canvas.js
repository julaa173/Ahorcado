/*Canvas*/

var canvas = document.querySelector("#canvas");
var X, Y, W, H, r;
canvas.height = 500;
function inicializarCanvas() {
    if (canvas && canvas.getContext) {
        var tablero = canvas.getContext("2d");
        if (tablero) {
            var s = getComputedStyle(canvas);
            var w = s.width;
            var h = s.height;

            W = canvas.width = w.split("px")[0];
            H = canvas.height = h.split("px")[0];

            X = Math.floor(W / 2);
            Y = Math.floor(H / 2);
            r = Math.floor(W / 3);

            dibujarLineasPrincipales(tablero);
            for (let i = 0; i <= contadorErrores; i++) {
                dibujarAhorcado(i);
            }
        }
    }
}

function dibujarLineasPrincipales(tablero) {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.strokeStyle = "#0A3871";

    tablero.beginPath();

    tablero.moveTo(40, 30);
    tablero.lineTo(40, H - 30);


    tablero.moveTo(40, 30);
    tablero.lineTo(W / 2, 30);

    tablero.moveTo(20, H - 30);
    tablero.lineTo(W - 50, H - 30)
    tablero.stroke();
}

function cuerda(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    tablero.moveTo(870,200);

    tablero.moveTo(W / 2, 30);
    tablero.lineTo(W / 2, H / 4);
    tablero.stroke();
}

function cabeza(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    
    tablero.beginPath();
    tablero.arc((W / 2), (H / 4) + 25, 25, 0, 2 * Math.PI);
    tablero.stroke();
}

function torzo(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    tablero.beginPath();

    tablero.moveTo(W / 2, (H / 4) + 50);
    tablero.lineTo(W / 2, H / 1.5);
    tablero.stroke();
}

function brazoDerecho(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    tablero.moveTo(W / 2, H / 2);
    tablero.lineTo((W / 2.5), (H / 1.7));
    tablero.stroke();
    tablero.closePath();
}

function brazoIzquierdo(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    tablero.beginPath();
    tablero.moveTo(W / 2, H / 2);
    tablero.lineTo((W / 1.65), (H / 1.7));
    tablero.stroke();
    tablero.closePath();
}

function piernaDerecha(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    tablero.beginPath();

    tablero.moveTo(W / 2, H / 1.5);
    tablero.lineTo((W / 2.5), (H / 1.3));
    tablero.stroke();
    tablero.closePath();
}

function piernaIzquierda(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    tablero.beginPath();

    tablero.moveTo(W / 2, H / 1.5);
    tablero.lineTo((W / 1.65), (H / 1.3));
    tablero.stroke();
    tablero.closePath();
}


function dibujarAhorcado(contador) {
    tablero.beginPath();
    switch (contador) {
        case 1:
            cuerda();
            break;

        case 2:
            cabeza();
            break;
        case 3:
            torzo();
            break;

        case 4:
            brazoDerecho();
            break;
    
        case 5:
            brazoIzquierdo();
            break;

        case 6:
            piernaDerecha();
            break;
        case 7:
            piernaIzquierda();
            break;

        default:
            break;
    }
}
function dibujarEnElCanvas(tablero) {
    tablero.strokeStyle = "#006400";
    tablero.fillStyle = "#6ab155";
    tablero.lineWidth = 5;
    tablero.arc(X, Y, r, 0, 2 * Math.PI);
    tablero.fill();
    tablero.stroke();
}