//EJERCICIO 1

let boton = document.getElementById("boton")
let cuadrado = document.getElementById("cuadrado");
let nameColor = document.getElementById("nombreDelColor")

const cambiarColor = () => {
  if (cuadrado.classList.contains("bg-secondary")) {
    cuadrado.classList.remove("bg-secondary")
    cuadrado.classList.add("bg-primary")
    nameColor.textContent = "CELESTE"
  } 
  else if (cuadrado.classList.contains("bg-primary")) {
    cuadrado.classList.remove("bg-primary")
    cuadrado.classList.add("bg-danger")
    nameColor.textContent = "ROJO"
  } 
  else {
    cuadrado.classList.remove("bg-danger")
    cuadrado.classList.add("bg-secondary")
    nameColor.textContent = "GRIS"
  } 
}

boton.addEventListener("click", cambiarColor)

// EJERCICIO 2

let textoIngresado = document.getElementById("textoIngresado");
let texto = document.getElementById("texto");
let borrar = document.getElementById("borrar")

const mostrarTexto = () => {
    texto.textContent = textoIngresado.value;
}

const borrarTexto = () => {
    textoIngresado.value = ""
    texto.textContent = ""
}

textoIngresado.addEventListener("input", mostrarTexto)
borrar.addEventListener("click", borrarTexto)


//EJERCICIO 3

let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado");
let boton_calcular = document.getElementById("boton-calcular")

const calcular = () => {

    // Uso "parseFloat" para convertir los numeros enteros en flotantes
    peso = parseFloat(peso.value);
    altura = parseFloat(altura.value) / 100; // Convertir altura a metros
    
    const imc = peso / (altura * altura);
    resultado.value = imc.toFixed(1); // "toFixed(1)" es para mostrar el resultado con 1 decimal
  }

boton_calcular.addEventListener("click", calcular)


//EJERCICIO 4


const convertir = () => {

let usd = parseFloat(document.getElementById("usd").value)
let pesoArg = parseFloat(document.getElementById("pesoArg").value)
let valorConvertido = document.getElementById("valorConvertido")  

  if (isNaN(usd) || isNaN(pesoArg)) {
    valorConvertido.value = "";
  } else {
    const convertedValue = usd * pesoArg;
    valorConvertido.value = convertedValue.toFixed(2);
  }
}

usd.addEventListener("input",convertir)
pesoArg.addEventListener("input",convertir)
