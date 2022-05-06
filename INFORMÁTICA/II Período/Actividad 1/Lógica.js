let texto1 = document.getElementById('texto1');
let escondido = document.getElementById('escondido');
let button = document.getElementById('button');

button.addEventListener('click', mostrarTexto);

function mostrarTexto() {
    if(escondido.style.display == 'none'){
        escondido.style.display = 'block';
        escondido.style.textAlign = 'justify';
        texto1.style.textAlign = 'justify';
        button.innerHTML = "Leer Menos" + "<i></i>"

    } else {;
        escondido.style.display = 'none';
        texto1.style.textAlign = 'center';
        
    }
}