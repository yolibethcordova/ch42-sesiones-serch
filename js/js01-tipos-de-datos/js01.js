console.log("Sesion JS01, tipos de datos");

/*
 Tipos de datos de JavaScript:
 - Objetos y primitivos
 - Los datos primitivos:
    * string
    * boolean
    * number
    * null
    * undefined
    * bigint
    * symbol
    > son inmutables, no tienen atributos ni métodos

- Objetos:
     tipo object
    {clave: valor, edad: 25, name: "pitufina"}
     tipo array
    [element_1 , element_2 , "Pitufinas", 38, {}, {}  ]
*/

// ================= Datos primitivos ==================
/*
  Tipo de datos string: "hola", "Ya mero es la 1", 'Día azul'
   - String template literals ` ` (backtick) 
   Es una forma más flexible y legible de trabajar con cadenas 
   de texto. Utilizan comillas invertidas (``) en lugar de 
   comillas simples o dobles y permiten incrustar expresiones
    dentro de la cadena utilizando la interpolación ${}.
*/
console.log( typeof "hola" ); // "string"
console.log( typeof "" ); // "string" (empty string)
console.log( "El resultado de 3 * 4 = " + (3 * 4) + " pesos" );
/*
  La interpolación con ${} en JavaScript es una característica 
  de los Template Literals que permite insertar variables y 
  expresiones dentro de cadenas de texto. 
  Esto se hace envolviendo las expresiones en ${} dentro de 
  una cadena delimitada por comillas invertidas (``).
*/
console.log( `El resultado de 3 * 4 = ${ 3*4 } pesos` );

/*
 Tipos de datos number.

 - números positivos: 100, 1, 0.258
 - números negativos: -1 , .50.35
 - valores que no pueden ser representados numéricamente: NaN
 - número infinitos: +Infinity, -Infinity
*/

console.log( typeof 3.141592 ); // number
console.log( typeof (3*3)  ); // number
//           typeof 9
console.log( typeof (3*"pitufo alegre") ); // number
//            typeof NaN
console.log( typeof +Infinity ); // number
console.log( typeof (-8/0) ); // number
//           typeof -Infinity
console.log( typeof ( 3 + "Viernes temático" ) ); // string
//           typeof "3Viernes temático"

/*
 Cuando se realizan operaciones que exceden los límites
 de MAX_SAFE_INTEGER se produce una pérdida de precisión.

 Perdida precisión: No se pueden representar exactamente ciertos valores.
  típicamente en operaciones de números de punto flotate.
*/
console.log( `Pérdida de precisión: 0.1 + 0. 2 = ${ 0.1 + 0.2 }`) //  0.30000000000000004
console.log( `Valor entero seguro en JavaScript: ${Number.MAX_SAFE_INTEGER} `) // 9007199254740991
console.log( `MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1 }`); 
console.log( `MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2 }`); 
console.log( `MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3 }`); 
console.log( `MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4 }`); 
console.log( `MAX_SAFE_INTEGER + 5: ${Number.MAX_SAFE_INTEGER + 5 }`); 

/*
 Tipos de datos BigInt
 Sirve para representar valores numéricos enteros, de los que el
 tipo number no pueda representar o no es seguro.

 Las operaciones con un bigInt se debe hacer con otro bigInt

*/
const myBigInt = 9007199254740991n;
console.log( typeof myBigInt ); // bigint
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 1n }  `); // 9007199254740992n

/*
 Tipo de dato undefined
  - Una variable que es declarada, pero el tipo de datos
   no es definido.
*/

let myName;

console.log( typeof myName ); // "undefined"

/*
 Tipo de dato null
  - Una variable que intensionalmente se borra el tipo de dato

  */
 let myAge;
 console.log(`Tipo de dato en myAge ${ typeof myAge}`); // undefied
 myAge = 20;
 console.log(`Tipo de dato en myAge ${ typeof myAge}`); // number
 myAge = null; //intensionalmente se borra el tipo de dato
 
 // NO es correcto usar typeof con un dato null
 console.log(`Tipo de dato en myAge ${ typeof myAge}`); // object 
 console.log(`myAge es null?  ${ myAge === null } `);// true

 /*
 Tipo de dato boolean
 Tiene dos estados: true y false

 */
 const isActive = true;
 
// Conversión a String
const edadMascota = 10; // number
// Conversion implícita
console.log("Edad de mi mascota " + edadMascota); // "Edad de mi mascota: 10"
// Conversión explícita
const edadMascotaString = String( edadMascota ); // "10"
                                               // "Edad de mi mascota en String 10"
console.log("Edad de mi mascota en String " + edadMascotaString );

// Conversión explícita
const precioCroquetas = "1000.50";
const precioJabon = "25";
const precioPapel = "40";
const total = precioCroquetas + precioJabon + precioPapel; // 1000.502540
const totalCorrecto = parseFloat( precioCroquetas ) + parseInt( precioJabon ) 
                      + Number(precioPapel);

 *
 Number() Vs parseInt()
  - Number convierte enteros y decimales
  - parseInt convierte solo pa larte entera
*/
console.log( parseInt("10.456")); // 10
console.log( parseFloat("10.456")); // 10.456
console.log( Number("10.456")); // 10.456
// - Number devuelve NaN si la cadena contiene algùn catacter no numérico
// - parseInt y parseFlotat realiza la conversión hasta encontrar un caracter
//   no numérico
// - con parseInt y parseFloat, si la entrada comienza con un valor no numérico
//   devuelve NaN