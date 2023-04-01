const root = document.getElementById('root');
const buttons = document.getElementById('buttons');

const preguntas = [
    '¿Es algo que uso regularmente o con frecuencia?',
    '¿Me aporta valor o me hace feliz?',
    '¿Es algo que puedo obtener o hacer de otra manera?',
    '¿Tiene un impacto significativo en mi vida?',
    '¿Encaja con mis valores y objetivos?',
];

let contador = 0;

buttons.addEventListener('click', (e) => {

    anime({
        targets: `#${e.target.id}`,
        scale: 1.3,
        duration: 200,
        begin: function () {
            // Animación de escala más pequeña
            anime({
                targets: `#${e.target.id}`,
                scale: 0.9,
                duration: 200,
            });
        },
        complete: function () {
            // Animación de escala original
            anime({
                targets: `#${e.target.id}`,
                scale: 1,
                duration: 200,
            });
        },
    })

    if (e.target.disabled === false) {
        if (e.target.id === 'si') {
            contador++;
            if (contador === 5) {
                contador = 0;
            }
        } else {
            contador = 0;
        }

        render();

    }

});
const render = () => {
    // Desactivar los botones durante la animación de renderizado
    buttons.querySelectorAll('button').forEach(button => button.disabled = true);

    let indice = 0;
    let texto = preguntas[contador];
    console.log('texto:', texto);
    console.log('texto length:', texto.length);
    let elemento = document.querySelector("#root p");
    elemento.innerHTML = "";

    let interval = setInterval(function() {
        elemento.innerHTML += texto.charAt(indice);
        indice++;

        if (indice >= texto.length) {
            clearInterval(interval);

            // Habilitar los botones después de la animación de renderizado
            buttons.querySelectorAll('button').forEach(button => button.disabled = false);
        }
    }, 100);
}


render();
