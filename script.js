// Función para abrir un modal
function openModal(modalId) {
    // Cerrar cualquier modal que esté abierto
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });

    // Abrir el modal seleccionado
    document.getElementById(modalId).style.display = 'flex';
}

// Función para cerrar el modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Desactivar el scroll al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'hidden'; // Desactiva el scroll desde el inicio
});

document.addEventListener("DOMContentLoaded", function() {
    const inicioLink = document.querySelector('a[href="#inicio"]');

    inicioLink.addEventListener("click", function(event) {
        event.preventDefault(); // Evita que se ejecute el comportamiento predeterminado

        // Desplazamiento suave a la sección de inicio
        document.querySelector('#inicio').scrollIntoView({
            behavior: 'smooth' // Hacer scroll suave
        });
    });
});
