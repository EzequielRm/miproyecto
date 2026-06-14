
// Toggle del menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });
    
    // Cerrar menú cuando se hace clic en un enlace
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navUl.classList.remove('active');
        });
    });
    
    // Cerrar menú al cambiar el tamaño de la ventana
    window.addEventListener('resize', function() {
        navUl.classList.remove('active');
    });
}

// Animación de campos del formulario (página de contacto)
var boton = document.getElementsByClassName('formularioinput');
for (var i = 0; i < boton.length; i++) {
    boton[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            // El label está antes del input en el HTML, usar previousElementSibling
            if (this.previousElementSibling) {
                this.previousElementSibling.classList.add('fijar');
            }
        } else {
            if (this.previousElementSibling) {
                this.previousElementSibling.classList.remove('fijar');
            }
        }
    });
}

// Manejar envío del formulario de contacto
const formulario = document.querySelector('.formulario');
if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obtener valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Validar que todos los campos estén llenos
        if (name.trim() && email.trim() && phone.trim() && message.trim()) {
            // Mostrar alerta de éxito
            alert('¡Mensaje enviado exitosamente!');
            
            // Limpiar campos
            formulario.reset();
            
            // Remover la clase 'fijar' de todos los labels
            var labels = document.querySelectorAll('.formulariolabel');
            labels.forEach(label => {
                label.classList.remove('fijar');
            });
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
}
