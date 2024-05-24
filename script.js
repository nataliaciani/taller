// script.js

document.addEventListener("DOMContentLoaded", function () {
    const suscribirmeButton = document.querySelector("button"); // Selecciona el primer botón de suscribirse
    const main6Section = document.querySelector(".main6"); // Selecciona la sección main6

    suscribirmeButton.addEventListener("click", function () {
        main6Section.scrollIntoView({ behavior: "smooth" }); // Realiza un scroll suave hasta la sección main6
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtener el nombre del usuario del campo de nombre del formulario
    const urlParams = new URLSearchParams(window.location.search);
    const nombreUsuario = urlParams.get('nombre');
    const emailUsuario = urlParams.get('email');

    // Verificar si el elemento de nombre de usuario existe en la página de Agradecimiento
    const elementoNombreUsuario = document.getElementById("nombreUsuario");
    const elementoEmailUsuario = document.getElementById("emailUsuario");
    if (elementoNombreUsuario) {
        // Colocar el nombre del usuario en el elemento de nombre de usuario
        elementoNombreUsuario.textContent = nombreUsuario;
    }
    if (elementoEmailUsuario) {
        // Colocar el nombre del usuario en el elemento de nombre de usuario
        elementoEmailUsuario.textContent = emailUsuario;
    }
});
