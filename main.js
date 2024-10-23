// Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API(el array). 
// Este proceso debe realizarse fuera de cualquier función.
let users = "https://jsonplaceholder.typicode.com/users"

// Imprimir por consola la lista (array) de usuarios.
axios.get(users)

.then((res) => console.log(res.data))
    
.catch((err) => console.error(err))

// Imprimir por consola solo el nombre de los usuarios.
axios.get(users)

.then((res) => {
    const mapName = res.data.map(value => value.name)
    console.log(mapName);
})
    
.catch((err) => console.error(err))

// Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.
function showUsers() {
    console.log(users);
}

// Crea un botón que cuando lo cliques ejecute la función que habías creado
const btn = document.querySelector("#btnUsers")


// Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML).
const divUsers = document.querySelector("#divUsers")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    axios.get(users)

    .then((res) => {
        const mapName = res.data.map(value => value.name)
        divUsers.innerHTML = `<p>${mapName}</p>`
    })
})
