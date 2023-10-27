
const content = document.createElement("div");
document.body.appendChild(content);

const mostrarData = (data) => {
    console.log(data);


    if (data.hasOwnProperty("fechaActualizacion")) {
        content.innerHTML = `
      <div style="color: #fefae0;" >
        <h1>Fecha de Actualización: ${data.fechaActualizacion}</h1>
        <h2>Valor de compra: ${data.compra}</h2>
        <h3>Valor de venta: ${data.venta}</h3>
      </div>
    `;
    }
};

fetch("https://dolarapi.com/v1/dolares/blue")
    .then((response) => response.json())
    .then((data) => {
        mostrarData(data);
    })
    .catch((error) => {
        console.log("Hubo un error al obtener los datos", error);
    });

const interval = 1 * 60 * 1000;
setInterval(() => {


    fetch("https://dolarapi.com/v1/dolares/blue")
        .then((response) => response.json())
        .then((data) => {
            mostrarData(data);

        })
        .catch((error) => {
            console.log("Hubo un error al obtener los datos", error);
        });
}, interval);