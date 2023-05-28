//------- Ej 1 -------
let num1 = 19
let num2 = 23

if(num1 > num2){
    console.log("El primer numero es mayor al segundo")
}
else{
    console.log("El primer numero no es mayor al segundo")
}
//--------------------


//------- Ej 2 -------
let num1 = 32
let num2 = 14

if(num1 == num2){
    console.log("Los numeros son iguales")
}
else{
    console.log("Los numeros son diferentes")
}
//--------------------


//------- Ej 3 -------
let num1 = 23
let num2 = 32

if(num1 > num2){
    console.log("El primer numero es mayor")
}
else if(num1 == num2){
    console.log("Los numeros son iguales")
}
else{
    console.log("El segundo numero es mayor")
}
//--------------------


//------- Ej 4 -------
let num1 = 153
let num2 = 43
let num3 = 512

if(num1 < num2 && num1 < num3){
    console.log("El primer numero es el mas chico")
}
else if(num1 < num2 && num1 > num3){
    console.log("El tercer numero es el mas chico")
}
else{
    console.log("El segundo numero es el mas chico")
}
//--------------------


//------- Ej 5 -------

let persona1 = {
    nombre : "Gabriela",
    edad : 21,
    altura : 178
}

let persona2 = {
    nombre : "Soraya",
    edad : 45,
    altura : 164
}

if(persona1.edad > persona2.edad){
    console.log(persona1.nombre + " es mayor que " + persona2.nombre)
}
else{
    console.log(persona2.nombre + " es mayor que " + persona1.nombre)

}

if(persona1.altura > persona2.altura){
    console.log(persona1.nombre + " es mas alta que " + persona2.nombre)
}
else{
    console.log(persona2.nombre + " es mas alta que " + persona1.nombre)
}
//--------------------


//------- Ej 6 -------

let nombre = prompt("Ingresar nombre: ")
let edad = prompt("Ingresar edad: ")
let altura = prompt("Ingresar altura en cm: ")
let vision = prompt("Estado de vision del 1 al 10: ")

if(edad >= 18 && altura > 150 && vision >= 8){
    console.log("Esta capacitado para conducir")
}
else{
    console.log("No esta capacitado para conducir")
}
//--------------------


//------- Ej 7 -------

let miNombre = "Gabriela"
let nombre = prompt("Ingresar nombre: ")
let pase = prompt("Pase vip o normal? ")
let tieneEntrada = prompt("Tiene entrada? (se acepta 's / n' , 'si / no' , 'true / false'")

if(nombre = miNombre && pase == "vip" || pase == "VIP"){
    alert("BIENVENIDO! Tiene pase libre (:")
}
else if(tieneEntrada == "s" || tieneEntrada == "si" || tieneEntrada == "true"){
    let utilizarEntrada = prompt("Desea utilizar su entrada? (se acepta 's / n' , 'si / no' , 'true / false'")
    
    if(utilizarEntrada == "s" || utilizarEntrada == "si" || utilizarEntrada == "true"){
        alert("BIENVENIDO! Tiene pase libre (:") 
    }   
}
else{
    let comprar = prompt("Desea comprar entrada?")

    if(comprar == "s" || comprar == "si" || comprar == "true"){
        let dinero = prompt("Cual es su dinero disponible? ")
        if(dinero >= 1000){
            alert("Usted a comprado su entrada.. BIENVENIDO! (:")
        }
        else{
            alert("Lo siento, el dinero no le alcanza para la compra de la entrada :(")
        } 
    }
    else{
        alert("Lamentamos que no desee una entrada, esperamos volver a verle pronto! (:")
    }
}
//--------------------


//------- Ej 8 -------

let numeroIncognita = 7

let numeroIngresado = prompt("Ingrese un numero del 1 al 10: ")

if(numeroIngresado > numeroIncognita){
    alert("El numero ingresado es mayor, intentelo de nuevo!")
    numeroIngresado = prompt("Ingrese un numero del 1 al 10:")
    
    if(numeroIngresado < numeroIncognita){
        alert("El numero ingresado es menor, intentelo de nuevo!")
        numeroIngresado = prompt("Ingrese un numero del 1 al 10:")
        if(numeroIngresado !== numeroIncognita){
            alert("Ganaste, has adivinado el numero!")
        }
        else{
            alert("GAME OVER")
        }
    }
}
else if(numeroIngresado < numeroIncognita){
    alert("El numero ingresado es menor, intentelo de nuevo!")
    numeroIngresado = prompt("Ingrese un numero del 1 al 10:")
    if(numeroIngresado > numeroIncognita)
    {
        alert("El numero ingresado es mayor, intentelo de nuevo!")
        numeroIngresado = prompt("Ingrese un numero del 1 al 10:")

        if(numeroIngresado !== numeroIncognita){
            alert("Ganaste, has adivinado el numero!")
            }
        else{
            alert("GAME OVER")
        }
    }
}
else if(numeroIngresado == numeroIncognita){
    alert("Ganaste, has adivinado el numero!")
}
else{
    alert("GAME OVER")
}
//--------------------


//------- Ej 9 -------

let edad = prompt("Ingresar edad: ")

if(edad >= 0 && edad <= 12){
    alert("Usted es infante")
}
else if(edad >= 13 && edad <= 18){
    alert("Usted es adolecente")
}
else if(edad >= 19 && edad <= 45){
    alert("Usted es un mayor joven")
}
else if(edad > 45 && edad <= 100){
    alert("Usted es un anciano")
}
else{
    alert("Usted de verdad tiene esa edad???")
}
//--------------------


//------- Ej 10 -------

alert("COMENCEMOS A JUGAR! PIEDRA / PAPEL / TIJERAS")
let jugadorUno = prompt("Turno del jugador 1: ")
let jugadorDos = prompt("Turno del jugador 2: ")

if(jugadorUno == "PIEDRA" && jugadorDos == "TIJERAS" ){
    alert("El jugador 1 ha ganado")
}
else if(jugadorUno == "PIEDRA" && jugadorDos == "PAPEL"){
    alert("El jugador 2 ha ganado")
}
else if(jugadorUno == "TIJERAS" && jugadorDos == "PAPEL"){
    alert("El jugador 1 ha ganado")
}
else if(jugadorUno == "TIJERAS" && jugadorDos == "PIEDRA"){
    alert("El jugador 2 ha ganado")
}
else if(jugadorUno == "PAPEL" && jugadorDos == "PIEDRA"){
    alert("El jugador 1 ha ganado")
}
else if(jugadorUno == "PAPEL" && jugadorDos == "TIJERAS"){
    alert("El jugador 2 ha ganado")
}
else if(jugadorUno  == jugadorDos){
    alert("Han empatado")
}
else if(jugadorUno !== "PAPEL" && jugadorUno !== "PIEDRA" && jugadorUno !== "TIJERAS"){
    alert("Uno de los jugadores ha hecho trampa")
}
else if(jugadorDos !== "PAPEL" && jugadorDos !== "PIEDRA" && jugadorDos !== "TIJERAS"){
    alert("Uno de los jugadores ha hecho trampa")
}
//--------------------


//------- Ej 11 -------

let color = prompt("Ingrese un color: ")

switch(color){
    case "blanco": 
        alert("Falta de color")
        break
    case "negro":
        alert("Falta de color")
        break
    case "verde":
        alert("El color de la naturaleza")
        break
    case "azul":
        alert("el color del agua")
        break
    case "amarillo":
        alert("El color del sol")
        break
    case "rojo":
        alert("El color del fuego")
        break
    case "marron":
        alert("El color de la tierra")
        break
    default:
        alert("Excelente eleccion, no lo teniamos pensado")
}
//--------------------


//------- Ej 12 -------

let num1 = prompt("NUM 1: ")
let operacion = prompt("( + | - | * | / ): ")
let num2 = prompt("NUM 2: ")

if(num2 == 0 && operacion == "/"){
    alert("ERROR")
}
else{
    switch(operacion){
        case "+":
            resultado = num1 + num2
            alert("El resultado de la operacion es: " + resultado)
        case "-":
            resultado = num1 - num2
            alert("El resultado de la operacion es: " + resultado)
        case "*":
            resultado = num1 * num2
            alert("El resultado de la operacion es: " + resultado)
        case "/":
            resultado = num1 / num2
            alert("El resultado de la operacion es: " + resultado)
    }
}
//--------------------


//------- Ej 13 -------

let apellido = prompt("Apellido: ")
let nombre = prompt("Nombre: ")
let sexo = prompt("F / M : ")
let nacionalidad = prompt("Nacionalidad: ")
let nac = prompt("Fecha de nacimiento: ")
let cuil = prompt("CUIL: ")
let n_dni = prompt("DNI: ")



alert("Apellido: " + apellido + " Nombre: " + nombre + " Sexo: " + sexo + " Nacionalidad: " + nacionalidad + " Fecha de nacimiento: " + nac + " CUIL: " + cuil + " DNI: " + n_dni)
let resp = prompt("Los datos son correctos? (S / N): ")
if(resp == "S"){
    let dni = {apellido, nombre, sexo, nacionalidad, nac, cuil, n_dni}
    console.table(dni)
    console.log("REGISTRO EXITOSO")
}
else if(resp == "N"){
    alert("Vuelva a intentarlo en 1 mes")
}
//--------------------