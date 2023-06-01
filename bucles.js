//-------Ej 1--------

let numero = prompt("Ingrese un numero: ")

for(i = 1 ; i <= 10 ; i++){
    let mult = numero * i
    console.log(numero + "x" +  i + "= " + mult)
}

// -------------------


// -------Ej 2--------

let numero
let acumular = []
let numFinal

numero = Number(prompt("ingrese un numero: "))
acumular.push(numero)

for(i = 0; numero != 0; i++){

    numero = Number(prompt("ingrese un numero: "))
    acumular.push(numero)
    if(numero != 0 && numero <= 100){
        numFinal = numero;
    }
}

console.log(acumular)

//-------------------


//-------Ej 3--------

//EN ESTE EJERCICIO PARTICIPAN LOS VALORES DEL EJERCICIO NUMERO 2 !!!

let num

for(i = 1; num != numFinal; i++){
    num = Number(prompt("Adivine el numero secreto!"))

    if(num > numFinal){
        alert("Numero incorrecto, el que buscas es menor..")
    }
    else if(num < numFinal){
        alert("Numero incorrecto, el que buscas es mayor..")
    }
    else{
        alert("CORRECTO! Usted ha acertado en el intento N ° "+ i)
    }
}

//-------------------


//-------Ej 4--------

let num
let divisores = []

num = Number(prompt("Ingrese un numero: "))

for(i = 0; i < num; i++){
    if(num % i == 0){
        divisores.push(i)
    }
}

console.log("Los divisores de " + num + " son: " + divisores)

//-------------------


//-------Ej 5--------

let elementos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', '1', '2', '3']

for(i = 0; i < elementos.length; i++){
    console.log("Elemento: " + elementos[i])
}

//-------------------


//-------Ej 6--------

let elementos = [11,22,33,44,55,66,77,88,99,1010]

for(i = 0; i < elementos.length; i++){
    console.log("Elemento: " + elementos[i] * 2)
}

// -------------------


// -------Ej 7--------

let familia = [
    ana = {
        nombre: "Ana",
        rol: " MADRE",
        edad: " 45 años",
        altura: " 176 cm"
    },
    pedro = {
        nombre: "Pedro",
        rol: " PADRE",
        edad: " 48 años",
        altura: " 182 cm"
    },
    juan = {
        nombre: "Juan",
        rol: " HERMANO MAYOR ",
        edad: " 24 años",
        altura: " 180 cm"
    },
    jazmin = {
        nombre: "Jazmin",
        rol: " HERMANA DEL MEDIO",
        edad: " 18 años",
        altura: " 170 cm"
    },
    victoria = {
        nombre: "Victoria",
        rol: " HERMANA MENOR",
        edad: " 10 años",
        altura: " 150 cm"
    }]

    for(i = 0; i <= familia.length; i++){
        console.log("Integrante: " + Object.values(familia[i]))
    }


// -------------------

// -------Ej 8--------
// NO HAY(?)
// -------------------


// -------Ej 9--------

let numeros = [12, 34, 65, 9, 23, 43, 5, 6, 96, 62]
let impar = []

for(i = 0; i <= numeros.length; i++){
    
    if(!(numeros[i] %2==0)){
        impar.push(numeros[i])
    }

}

console.log(impar)

// -------------------


// -------Ej 10--------

let numero = 0
let par = []
let numImpar = []
let sumaI = 0
let sumaP = 0
let i = 0

do{
    numero = Number (prompt("Ingrese un numero: "))
    
    if(numero % 2 == 0){
        par.push(numero) 
        sumaP += numero
    }
    else{
        numImpar.push(numero)
        sumaI += numero
    }
}
while(numero != 0 )

console.log(numImpar)
console.log(par)

console.log("Total pares: " + sumaP)
console.log("Total impares: " + sumaI)

// -------------------


// -------Ej 11--------

let numeros = [12, 34, 65, 9, 23, 43, 5, 6, 96, 62]
let numeroMayor = 0

for(i = 0; i < numeros.length; i++){

    if(numeros[i] > numeroMayor){
        numeroMayor = numeros[i]
    }
}
console.log(numeroMayor)

// -------------------