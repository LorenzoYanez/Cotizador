function Seguro(vehiculo, year, Marca, usos, tipo) {
    this.vehiculo = vehiculo;
    this.year = year;
    this.Marca = Marca;
    this.usos = usos;
    this.tipo = tipo;
  }
  
  
  Seguro.prototype.cotizarSeguro = function () {
  
    let cantidad = 0;
  
    const base = 20000;
  
    const calculo = {
        Auto: base * 1.50,
        Camioneta: base * 1.90,
    }
  
    cantidad = calculo[this.vehiculo];
  
  
    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= (diferencia * 3 * cantidad) / 100;
  
    if (this.tipo === 'Contra todo Riesgo') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.80;
    }
    return cantidad;
  }
  
  function UI() {}
  
  UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 20;
  
    const selectYear = document.querySelector('#year');
  
    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option)
    }
  
  }
  
  UI.prototype.mostrarMensaje = (mensaje) => {
    const div = document.createElement('div');
    div.innerHTML = `<div class="border-l-4 border-red-500 p-4 rounded bg-red-200 text-red-500 mt-10">*${mensaje}</div>`;
  
    const formulario = document.getElementById('cotizar-seguro');
    formulario.insertBefore(div, document.getElementById('resultado'));
    const resultadoDiv = document.querySelector('#errorMessage');
    resultadoDiv.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 3000);
  
  }
  
  UI.prototype.mostrarResultado = function (total, seguro) {
  
    
    const { vehiculo, year, tipo } = seguro;
    let txtVehiculo = '';
  
    const vehiculos = {
      Auto: 'Auto',
        Camioneta: 'Camioneta',  
    }
  
    txtVehiculo = vehiculos[vehiculo];
  
    const div = document.createElement('div');
    div.classList.add('mt-10');
  
    div.innerHTML = `<div class="p-2 md:p-4 bg-blue-100 rounded w-full">
    <p class='header text-center font-semibold mb-2 uppercase'> Cotizacion en tiempo real </p>
    <p class='font-bold'> Vehiculo: <span class='font-normal'>${txtVehiculo}</span> </p>
    <p class='font-bold'> Año: <span class='font-normal'> ${year}</span> </p>
    <p class='font-bold'> Tipo: <span class='font-normal capitalize'> ${tipo}</span> </p>
    <p class='font-bold'> Total: <span class='font-normal'> $${total}</span> </p>
    </div>`;
  
    const resultadoDiv = document.querySelector('#resultado',);
    resultadoDiv.appendChild(div);
  }
  
  
  const ui = new UI();
  
  document.addEventListener('DOMContentLoaded', function () {
    ui.llenarOpciones();
  });
  
  function EventListeners() {
    const formulario = document.getElementById('cotizar-seguro');
  
    formulario.addEventListener('submit', cotizarSeguro);
  }
  EventListeners();
  
  function cotizarSeguro(e) {
    e.preventDefault();
  
    const vehiculo = document.getElementById('vehiculo').value;
  
    const year = document.getElementById('year').value;
  
  
    const Marca = document.getElementById('Marca').value;
  
  
    const usos = document.getElementById('usos').value;
  
  
    const tipo = document.querySelector('input[name=tipo]:checked').value;
  
    if ((vehiculo === "") || (year === "") || (Marca === "") || (usos === "") || (tipo === "")) {
        console.log(ui)
        ui.mostrarMensaje('Todos los campos son obligatorios');
        return;
  
    }
  
  
    const resultados = document.querySelector('#resultado div');
    if (resultados != null) {
        resultados.remove();
    }
  
    const seguro = new Seguro(vehiculo, year, Marca, usos, tipo);
    const total = seguro.cotizarSeguro();
  
  
    ui.mostrarResultado(total, seguro);
  
  }