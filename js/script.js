
var boton = document.getElementsByClassName('formularioinput');
for (var i = 0; i < boton.length; i++) {
    boton[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}
