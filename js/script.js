// ===== VALIDACIÓN LOGIN =====
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let esValido = true;
        const usuario = document.getElementById('usuario');
        const password = document.getElementById('password');
        const alerta = document.getElementById('alertaLogin');

        limpiarError('grupoUsuario');
        limpiarError('grupoPassword');
        alerta.classList.remove('mostrar', 'alerta-exito');

        if (usuario.value.trim() === '') {
            mostrarError('grupoUsuario');
            esValido = false;
        }

        if (password.value.trim() === '') {
            mostrarError('grupoPassword');
            esValido = false;
        }

        if (esValido) {
            alerta.textContent = 'Inicio de sesión exitoso. Redirigiendo...';
            alerta.classList.add('mostrar', 'alerta-exito');

            setTimeout(function () {
                alert('¡Bienvenido, ' + usuario.value + '!');
            }, 1000);
        } else {
            alerta.textContent = 'Por favor completa todos los campos';
            alerta.classList.add('mostrar');
        }
    });
}

// ===== VALIDACIÓN REGISTRO =====
const registroForm = document.getElementById('registroForm');

if (registroForm) {
    registroForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let esValido = true;
        const nombre = document.getElementById('nombre');
        const correo = document.getElementById('correo');
        const password = document.getElementById('password');
        const confirmar = document.getElementById('confirmar');
        const alerta = document.getElementById('alertaRegistro');

        limpiarError('grupoNombre');
        limpiarError('grupoCorreo');
        limpiarError('grupoPassword');
        limpiarError('grupoConfirmar');
        alerta.classList.remove('mostrar', 'alerta-exito');

        // Nombre vacío
        if (nombre.value.trim() === '') {
            mostrarError('grupoNombre');
            esValido = false;
        }

        // Correo válido (debe tener @ y un punto después)
        const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!patronCorreo.test(correo.value.trim())) {
            mostrarError('grupoCorreo');
            esValido = false;
        }

        // Contraseña mínimo 6 caracteres
        if (password.value.length < 6) {
            mostrarError('grupoPassword');
            esValido = false;
        }

        // Confirmar contraseña debe coincidir
        if (confirmar.value !== password.value || confirmar.value === '') {
            mostrarError('grupoConfirmar');
            esValido = false;
        }

        if (esValido) {
            alerta.textContent = '¡Cuenta creada con éxito! Redirigiendo al login...';
            alerta.classList.add('mostrar', 'alerta-exito');

            setTimeout(function () {
                window.location.href = 'login.html';
            }, 1500);
        } else {
            alerta.textContent = 'Por favor corrige los campos marcados';
            alerta.classList.add('mostrar');
        }
    });
}

// ===== FUNCIONES REUTILIZABLES =====
function mostrarError(idGrupo) {
    document.getElementById(idGrupo).classList.add('error');
}

function limpiarError(idGrupo) {
    document.getElementById(idGrupo).classList.remove('error');
}