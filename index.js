// //EJERCICIO 1:

const beersMenorAlcohol = beers.filter(beer => beer.abv < 5)

console.log("1: CERVEZAS QUE NO EXCEDEN")
console.log("-------------------------")

beersMenorAlcohol.forEach((beer, i, lista) => {
    console.log("Name:", lista[i].name),
    console.log("Alcohol:", lista[i].abv),
    console.log("Amargar:", lista[i].ibu),
    console.log("-------------------------")
})

//EJERCICIO 2:

console.log("2: 10 CERVEZAS CON MAS ALCOHOL")
console.log("---------------------------")

const beersOrdenadasAbv = beers.sort((a, b) => {

    if(a.abv < b.abv){
        return 1
    }
    else if(a.abv > b.abv){
        return -1
    }
    else{
    return 0        
    }    
})
for(i = 0 ; i < 10 ; i++){
    console.log("◉", beersOrdenadasAbv[i].name)
}

//EJERCICIO 3:

console.log("---------------------------")
console.log("3: 10 CERVEZAS MENOS AMARGAS")
console.log("---------------------------")

const beersOrdenadasIbu = beers.sort((a, b) => {

    if(a.ibu > b.ibu){
        return 1
    }
    else if(a.ibu < b.ibu){
        return -1
    }
    else{
    return 0        
    }    
})

fn = beersOrdenadasIbu.forEach = () => {
  for(i = 0 ; i < 10 ; i++){
    console.log("◉", beersOrdenadasIbu[i].name)
 }  
}  

fn()

//EJERCICIO 4:

console.log("---------------------------")
console.log("4: DE MAYOR O MENOR SEGUN ID")
console.log("---------------------------")

const ordenarPorPropiedad = (beers, condicion, ascendente) => {
  const beersOrdenadas = beers

  const comparar = (a, b)  => {
    if(a[condicion] < b[condicion]){
        if(ascendente){
          return -1
        }
        else{
          return 1
        }
    }
    else if(a[condicion] > b[condicion]){
      if(ascendente){
        return 1
      }
      else{
        return -1
      }
    }
    else{
      return 0
    }
  }
    beersOrdenadas.sort(comparar)
    return beersOrdenadas.slice(0, 10)
}


beersOrdenadas = beers

ordenarPorPropiedad(beers, 'id', false) //aca se puede cambiar el booleano para ver el correcto funcionamiento de este ejercicio

for(i = 0 ; i < 10; i++){
  console.log("◉", beersOrdenadas[i].name)
  console.log("↑ ID:", beersOrdenadas[i].id)
  console.log("---------------------------")
}   



//EJERCICIO 5

console.log("---------------------------")
console.log("4: TABLA EN HTML")
console.log("---------------------------")

const filasDeLaTabla = document.getElementById("acaVanLosDatos")

const copia = beers.map(beers => {
  return {
    b_name: beers.name,
    b_abv: beers.abv,
    b_ibu: beers.ibu
  }
})

const template = copia.reduce((imprimir, b) => {
  return imprimir + ` <tr>
                        <td>${b.b_name}</td>
                        <td>${b.b_abv}</td>
                        <td>${b.b_ibu}</td>
                      </tr>`
},"")

filasDeLaTabla.innerHTML = template