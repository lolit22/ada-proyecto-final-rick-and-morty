const contenedor = document.getElementById("contenedor-tarjetas");
console.log(contenedor);

fetch("https://rickandmortyapi.com/api/character")
    .then(respuesta => respuesta.json())
    .then(data => {
        const dataApi = data.results
        console.log(dataApi)

        let personajes = "";
        for (let i = 0; i < dataApi.length; i++) {
            personajes = personajes + `
        
            <div class = "card">
                <h2 class = "nombreCard" > ${dataApi[i].name}</h2>
                <div class = "contenedor-img">
                    <img src = ${dataApi[i].image} alt = ${dataApi[i].name}>
                </div>
                <div class = "contenedor-card">
                <p class= "descripcionCard" >
                   <span> Estado:</span> ${dataApi[i].status}
                    <br>
                    <br>
                    <span> Especie: </span> ${dataApi[i].species}
                    <br>
                    <br>
                    <span> Ubicación:</span> ${dataApi[i].location.name}
                </p>
                </div>
            </div>

            `
        };

        contenedor.innerHTML = personajes;
    });