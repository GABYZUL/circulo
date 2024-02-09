// function cambiarTam(tamaño) {
//     const elementCirculo = document.getElementById('elementCirculo');
//     const widthC = elementCirculo.offsetWidth; //offsetWidth devuelve el ancho del layout del elemento HTMLElement.offsetWidth - Referencia de la API Web | MDN. (2023, February 20). MDN Web Docs. https://developer.mozilla.org/es/docs/Web/API/HTMLElement/offsetWidth
//     const cambioC = Math.max(widthC + tamaño, 0); 
//     elementCirculo.style.width = cambioC + 'px';
//     elementCirculo.style.height = cambioC + 'px';
// }

    function cambiarTam(dimension, cantidad) {
        const elementCirculo = document.getElementById('elementCirculo');
        const widthC = elementCirculo.offsetWidth;
        const heightC = elementCirculo.offsetHeight;

        let cambioC;

        if (dimension === 'ancho') {
            cambioC = Math.max(widthC + cantidad, 0);
            elementCirculo.style.width = cambioC + 'px';
        } else if (dimension === 'largo') {
            cambioC = Math.max(heightC + cantidad, 0);
            elementCirculo.style.height = cambioC + 'px';
        }
    }

    // Desaparecer
    function cambiarCirculo() {
        const elementCirculo = document.getElementById('elementCirculo');
        const boton = document.querySelector('.but3');

        if (elementCirculo.style.display === 'none') {
            elementCirculo.style.display = 'block';
            boton.textContent = 'Ocultar Circulo';
        } else {
            elementCirculo.style.display = 'none';
            boton.textContent = 'Mostrar Circulo';
        }
    }
    
    function cambiarColor(color) {
        const elementCirculo = document.getElementById('elementCirculo');
        elementCirculo.style.backgroundColor = color;
    }