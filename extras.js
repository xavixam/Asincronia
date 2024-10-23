let breeds = "https://dog.ceo/api/breeds/list/all"
let random = "https://dog.ceo/api/breeds/image/random"

// Imprimir por consola la lista de razas de todos los perros.
axios.get(breeds)

.then((res) => {
    for (const raza in res.data.message) {
        console.log(raza);
    }
})
    
.catch((err) => console.error(err))

// Imprimir por consola la url imagen random de una raza.
console.log(random);

// Imprimir por consola todas las imágenes de una raza concreta.
const divImages = document.querySelector("#divDogs")
const elegido = prompt("Elige perro para mostrar imágenes:")

axios.get(`https://dog.ceo/api/breed/${elegido}/images`)

.then((res) => {    
    res.data.message.forEach(element => {
        divImages.innerHTML += `<div><img src="${element}" width="100px" height="100px" alt="Dog"></div>`
    });
})

// *Extra ¿Y si ahora te pidiéramos que podamos poner otra raza en la url para que nos busque otras imágenes? 
// Adapta las urls que ya tenías para que puedas pasarle argumentos.