let api = "https://dog.ceo/dog-api/"

// Imprimir por consola la lista de razas de todos los perros.
axios.get(api)

.then((res) => {
    console.log(res);
})
    
.catch((err) => console.error(err))