//comentarios de una sola linea
/*
       Comentarios muli línea
*/ 

// EJERCICIO 01 : Declaración de Variables 

// a) Var 

var miNombre = "Diego S.";
var misApellidos;
var miEdad = 32;

//El objeto de console nos permite enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una funcipon o método 
console.warn("--- Declaración de variables usando: VAR");
console.log("Intentando leer las variables: ", miNombre, misApellidos);

misApellidos = "Tecorralco Martínez"
console.log("Y ambas fueron inicialidas  cuelco a intentar leerlas: ", miNombre, misApellidos);

// Una variable puede cambiar de valor en el proceso de ejecución del programa.

//b) Const



console.warn("---Declaración de variables del tipo constante usando:CONST")
const miUniversidad = "UT Xicotepec";
const miMatricula=230374;

console.log("Hola, ", miNombre," ", misApellidos, " se que estudias actualmente en: " , miUniversidad, " asignaron la matricula: ", miMatricula, " y tienes una edad de: ", miEdad, "años.");

//Para saber el tipo de dato que tiene una variable o constante podemos utilizar la finción typeOf()
console.log("Analizando los datos puedo deducir que: ")
console.log("miNombre es del tipo: ", typeof(miNombre))
console.log("misApellidos es del tipo: ", typeof(misApellidos))
console.log("miUniversidad es del tipo: ", typeof(miUniversidad))
console.log("miMatricula es del tipo: ", typeof(miMatricula))
console.log("miEdad es del tipo: ", typeof(miEdad))
// c) LET
let miFechaNacimiento= "21-05-2004";
let miColorFavorito;

console.warn("---Declaración de Variable del tipo Locales usando : LET")
console.log("Genial, te voy conociendo mejor, ahora sé que tu naciste el: ",miFechaNacimiento, "y tu Color Favorito es: mmmmmm dejame pensar........")
miColorFavorito="Azul y rojo"
console.log(`Creo que es $(miColorFavorito), le atiné?`)

console.log("Analizando los datos puedo deducir que: ")
console.log("miColorFavorito es del tipo: ", typeof(miColorFavorito))
console.log("miFechaNacimiento es del tipo: ", typeof(miFechaNacimiento))