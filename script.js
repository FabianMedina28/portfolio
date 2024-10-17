//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega


document.getElementById('btnGirar').addEventListener('click', function() {
    document.getElementById('carta').classList.toggle('rotar');
});

document.getElementById('btnGirar2').addEventListener('click', function() {
    document.getElementById('carta').classList.toggle('rotar');
});

// Inicialización de EmailJS
(function() {
    emailjs.init("TU_USER_ID"); // Reemplaza "TU_USER_ID" por tu ID de usuario en EmailJS
})();

// Función para manejar el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir envío predeterminado del formulario

    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Enviar el correo utilizando EmailJS
    emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        // Muestra un mensaje de éxito
        alert('Mensaje enviado con éxito!');
    }, function(error) {
        // Muestra un mensaje de error
        alert('Error al enviar el mensaje, inténtalo de nuevo.');
    });
});