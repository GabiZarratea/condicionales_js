//EJERCICIO 1

const changeColor = () => {
    let cuadrado = document.getElementById("cuadrado");
    let nameColor = document.getElementById("nombreDelColor")


    if (cuadrado.style.backgroundColor === "gray") {
      cuadrado.style.backgroundColor = "rgb(40, 172, 172)";
      nameColor.textContent = "CELESTE"
    } 
    else if (cuadrado.style.backgroundColor === "rgb(40, 172, 172)") {
      cuadrado.style.backgroundColor = "red";
      nameColor.textContent = "ROJO"
    } 
    else {
      cuadrado.style.backgroundColor = "gray";
      nameColor.textContent = "GRIS"
    }

  }


// EJERCICIO 2

let textoIngresado = document.getElementById("textoIngresado");
let texto = document.getElementById("texto");

const mostrarTexto = () => {
    texto.textContent = textoIngresado.value;
}

const borrarTexto = () => {
    textoIngresado.value = ""
    texto.textContent = ""
}


//EJERCICIO 3

const calcular = () => {
    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");
    let resultado = document.getElementById("resultado");
    
    // Uso "parseFloat" para convertir los numeros enteros en flotantes

    peso = parseFloat(peso.value);
    altura = parseFloat(altura.value) / 100; // Convertir altura a metros
    
    const imc = peso / (altura * altura);
    resultado.value = imc.toFixed(1); // "toFixed(1)" es para mostrar el resultado con 1 decimal
  }


//EJERCICIO 4

const convertir = () => {

  let usd = document.getElementById("usd")
  let pesoArg = document.getElementById("pesoArg")
  let valorConvertido = document.getElementById("valorConvertido")

  usd = parseFloat(usd.value)
  pesoArg = parseFloat(pesoArg.value)
  
  let convertedValue = usd * pesoArg
  valorConvertido.value = convertedValue.toFixed(2) 
}