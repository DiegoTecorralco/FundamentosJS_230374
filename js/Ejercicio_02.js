// Tipos de Daros JS

// 1. Undefined - (Null)
console.warn("--- Tipo de Dato UNDEFINED")
let cliente;
console.log(`El cliente es: ${cliente}`)
console.log(`El tipo de dato de la variable es:  ${typeof(cliente)}`);

cliente= "Juan Romero"
console.log("El cliente es: ", cliente)
console.log(`El tipo de dato de la variable es:  ${typeof(cliente)}`);

cliente= 19227
console.log("El cliente es: ")
console.log(`El tipo de dato de la variable es:  ${typeof(cliente)}`);


//Undefined es el tipo de dato por defecto que asigna 

//2. BOOLEAN - Boleanos -TRUE/FALSE (Falso/Verdadero)
console.warn("--- Tipo de Dato: BOOLEAN (Boleano - True/False) ")
let esPremium = "No lo sé"
console.log(`¿Es el cliente premium?: ${typeof(esPremium)}`);
console.log("Asignado el valor \"true\" a la variable. " );
esPremium="true"
console.log(`El tipo de dato de la variable es: ${typeof(esPremium)}`);

console.log("Asignado el valor true a la variable")
esPremium="true"
console.log(`El tipo de dato de la variable es: ${typeof(esPremium)}`);
console.log(`Es el cliente premium?: ${typeof(esPremium)}`);
console.log("cabiando el valor esPremium a false")
esPremium=0;

if(esPremium)
    console.log ("El cliente pago por usar el servicio.");
else
    console.log ("El cliente recibe los servicios gratuitos.");

//3. NUMBER (Números)

var cantidad;
const costo_producto= 10.50;
let saldo_cuenta= -2500.40;
let monto_transaccion ;

console.warn("--- El tipo de Dato - NUMBER (números, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al día de hoy es de ${saldo_cuenta}, (Tipo de Dato= ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta ${costo_producto}`)
cantidad=8;
console.log(`Has elegido comprar ${cantidad} de productos.`)
console.log(`El importe total de la compra es: ${(cantidad*costo_producto)}`)
saldo_cuenta= saldo_cuenta- (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de ${saldo_cuenta}`);
//El cliente realiza un abono de 1500
console.log(`Tu abono de : ${monto_transaccion} ha sido recibido, tu nuevo saldo es de ${(saldo_cuenta+monto_transaccion)}`);