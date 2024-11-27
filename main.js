document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('nav-toggle'); // Botón hamburguesa
    const menu = document.getElementById('nav-menu'); // Menú desplegable

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('activo'); // Añade o elimina la clase 'activo' para mostrar u ocultar el menú
    });
});