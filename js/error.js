// Este script revisa la URL para saber qué tipo de error mostrar.
// Ejemplos:
//   error.html            -> muestra 404 (por defecto)
//   error.html?tipo=404   -> muestra 404
//   error.html?tipo=500   -> muestra 500

document.addEventListener('DOMContentLoaded', function () {
    const parametros = new URLSearchParams(window.location.search);
    const tipoError = parametros.get('tipo') || '404';

    const errorCodigo = document.getElementById('errorCodigo');
    const errorTitulo = document.getElementById('errorTitulo');
    const errorSubtitulo = document.getElementById('errorSubtitulo');
    const errorMensaje = document.getElementById('errorMensaje');

    if (tipoError === '500') {
        errorCodigo.textContent = '500';
        errorTitulo.textContent = 'Error del servidor';
        errorSubtitulo.textContent = 'Algo salió mal';
        errorMensaje.textContent = 'Ocurrió un error inesperado al procesar tu solicitud. Por favor intenta de nuevo más tarde.';
    } else {
        errorCodigo.textContent = '404';
        errorTitulo.textContent = 'Página no encontrada';
        errorSubtitulo.textContent = 'Lo sentimos';
        errorMensaje.textContent = 'La página que buscas no existe o fue movida. Verifica el enlace o vuelve al inicio.';
    }
});
