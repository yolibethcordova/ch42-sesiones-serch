console.log("sesion js02.js");

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

Función: Conjunto de instrucciones que realiza una tarea o calcula un valor.
  Código que se puede reutilizar.


  ----------- Funciones declaradas --------------
    (function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
    function nombreFuncionCamelCase ( parámetros ){
        //cuerpo de la función
        instrucciones;
    }

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
console.log(  greeting()  );


function greeting(){
    return "Hola Ch42, extrañamos a Tan y Nan";
}


/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const saludo = function greeting2( name ){
    return `Hola, me llamo ${name} y tengo hambre`;
} ;

console.log( saludo("Yoli") );


// Realizar una funciÓn que reciba una palabra y retorne la palabre en minúscula

// Realizar una función que reciba un palabra y retorne la palabra en minúscula
/** Realizar la función acá */

//Función declarada
function wordToLowerCase(phrase){
  return phrase.toLowerCase();
}
//Función expresada
const wordToLowerCase = function mayusPhrase(phrase){
  return phrase.toLowerCase();
}
// uso de la función
console.log( wordToLowerCase("YUPIII YUPI EL MUÑECO CHUCKY")); //yupiii yupi el muñeco chucky

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/



  
  //////
const areaRectangle1 = (a,b) => {
    area = a*b
    return area
}

const calculaAreaRentangulo = (base,altura) => base * altura;
const calculaAreaRentangulo2 = (base, altura) =>{
    return base * altura
};

/* 
console.log(areaRectangle(6,4)); */
console.log(`El area de rectangulo es ${ areaRectangle (6,4) }`);
console.log(`El area de rectangulo es ${ areaRectangle1 (6,4) }`);

// Realizar una Arrow function que calcule el impuesto de un valor
/** TODO calcular el impuesto de un valor */

// caso de uso:
console.log( `El impuesto de los calcetines es: ${calcularImpuesto(70.50, .16 ) }`)

// Definir la arrow function para calcular el impuesto
const calcularImpuesto = (valor, tasaImpuesto) => valor * tasaImpuesto;


const valor = 70.50;
const tasaImpuesto = 0.16;
console.log(`El impuesto de los calcetines es: ${calcularImpuesto(valor, tasaImpuesto)}`);
