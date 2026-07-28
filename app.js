// 1 comprender el problema 
// 2 descomponer el el problema 
// 3 diseño el algoritmo
// 4 traducir a codigo
// 5 probar y corregir 

// tipos de variables
const country = "España"
let age = 20
var name = "Astrid" //no es bueno usarlo 


//tipos de datos
//string
let texto = "Hola, Mundo!"
//number
// let edad = 20 
let precio = 19.20
//null representa la ausencia de un valor intencionalmente 
let usuarioActual = null
//undefined inica que la variable fue declarada pero aun no se le asigna ningun valor
let sinDefinir;
console.log(sinDefinir);
//boolean 
let esMayor = true
let tieneDescuento = false

//objetos 
//array 


// operadores matematicos
let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 4 * 2;
let potencia = 2 ** 3 // (2 elevado a la 3)
let division = 20 / 4
let modulo = 10 % 3 // el resto de la division entera) 


//operadores logicos 
// AND ES EL QUE DEVUELVE TRUE SI AMBAS CONDICIONES SON VERDADERAS &&
// OR  DEVUELVE TRUE SI AL MENOS UNA DE LAS CONDICIONES ES VERDADERA || 
// NOT INVIERTE EL VALOR =!

//OPERADORES DE COMPARACION =>  generan true o false 
let a = 5
let b = "5"

console.log(a == b); //compara el valor pero ignora el tipo de dato 
console.log(a === b); // compara tanto el valor como el tipo de dato RECOMENDADO 

console.log(a !== b); //desigualdad estricta 

console.log(10 > 5); // true
console.log(3 < 2);  // false
console.log(8 >= 8); // true 
console.log(4 <= 9); // true


//condicionales 
//estructura que permite tomar decisiones

let edad = 18

// if ...else tradicional 
let mensaje
if (edad >= 18) {
    mensaje = "Es mayor de edad";
} else {
    mensaje = "Es menor de edad."
}


//operador ternario (mas corto)

let mensajeTernario = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";


console.log(mensajeTernario);


//la estructura Switch 
let diaSemana = "sabado"

switch (diaSemana) {
    case "lunes":
        console.log("animo con el inicio de semana");
        break//detiene la ejecucion para que no siga evaluando los demas 
    case "martes":
        console.log("seguimos adelante");
        break//detiene la ejecucion para que no siga evaluando los demas 
    case "miercoles":
        console.log("tenemos clase");
        break//detiene la ejecucion para que no siga evaluando los demas 
    case "jueves":
        console.log("casi viernes");
        break//detiene la ejecucion para que no siga evaluando los demas 
    case "viernes":
        console.log("por fin viernes");
        break//detiene la ejecucion para que no siga evaluando los demas 
    default:
        console.log("fin de semana");
        break

}


//bucles 
//for 


// /imprimir los numeros de 0 al 4 
for (let index = 0; index < 5; index++) {
    console.log("el numero actual es: " + index);

}

let frutas = ["manzana", "pera", "naranja", "uva"]

for (let i = 0; i < frutas.length; i++) {
    console.log("la fruta en la posicion " + i + ": " + frutas[i]);

}

// bucle while
// se usa cuando no sabes cuantas veces se va a repetir la accion. siempre cambiar la condicion para evitar bucle infinito


let vidas = 30
//mientras al usuario le queden vidas el juego continua 
while (vidas > 0) {
    console.log("Estas jugando. vidas restantes : " + vidas);
    //simular que el jugador pierde una vida en cada turno
    vidas--
}
console.log("Game Over!");


//funciones 

function saludar() {
    console.log("Hola bienvenidos!");

}
saludar()


function saludaPersonas(nombre, apellido) {
    console.log("Hola, " + nombre + " " + apellido);

}
saludaPersonas("Carlos", "Lopez")
saludaPersonas("Maria", "Perez")


//funciones con return 
function multiplicar (a, b) {
    return a * b //devolver el producto
}


let resultado = multiplicar(4, 5)
console.log(resultado);



//funcion expresion 
const dividir = function(a, b) {
    return a / b
}
console.log(dividir(10,2));


//funcion flecha 

// const resta = (a, b) => {
//     return a - b 
// }


//funcion flecha corta (return implicito)
const cuadrado = x => x * x
console.log(cuadrado(5));

