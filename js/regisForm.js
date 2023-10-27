document.addEventListener("DOMContentLoaded", function () {
    const cotizadorLink = document.getElementById("registrate");
    const lastNameInput = document.getElementById("last-name"); 
  
    cotizadorLink.addEventListener("click", function (event) {
      if (lastNameInput.value === "") {
        event.preventDefault();
        Swal.fire('Por favor, completa los campos antes de acceder al cotizador.'); 
      }
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const cotizadorLink = document.getElementById("cotiza-ya");
    const firstNameInput = document.getElementById("first-name"); 
  
    cotizadorLink.addEventListener("click", function (event) {
      if (firstNameInput.value === "") {
        event.preventDefault();
        Swal.fire('Por favor, completa los campos antes de acceder al cotizador.'); 
      }
    });
  });