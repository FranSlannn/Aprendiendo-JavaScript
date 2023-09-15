// Función para generar y mostrar imágenes de cartas
function generarImagenesCartas(numCartas, paloDescartar, cartasGeneradasElement, cartasDescartadasElement) {
    const palos = ["Corazones", "Rombos", "Picas", "Tréboles"];
    let cartasDescartadas = 0;

    // Limpiamos el contenido anterior antes de agregar nuevas cartas
    cartasGeneradasElement.innerHTML = "";
    cartasDescartadasElement.innerHTML = "";

    for (let i = 0; i < numCartas; i++) {
        const numeroCarta = Math.floor(Math.random() * 10) + 1;
        const palo = palos[Math.floor(Math.random() * palos.length)];

        if (palo !== paloDescartar) {
            const img = document.createElement("img");
            img.src = `img/${palo.charAt(0).toLowerCase()}${numeroCarta}.png`;
            img.alt = `${numeroCarta} de ${palo}`;        
                       
            cartasGeneradasElement.appendChild(img);
        } else {
            cartasDescartadas++;
        }
    }

    // Creamos el elemento <h2> para mostrar el número total de cartas generadas
    const totalCartasH2 = document.createElement("h2");
    totalCartasH2.textContent = `Número de cartas generadas: ${numCartas}`;
    cartasGeneradasElement.insertBefore(totalCartasH2, cartasGeneradasElement.firstChild);
    
    // Actualizamos el número de cartas descartadas como un elemento <h2>
    const cartasDescartadasH2 = document.createElement("h2");
    cartasDescartadasH2.textContent = `Número de cartas descartadas: ${cartasDescartadas}`;
    cartasDescartadasElement.appendChild(cartasDescartadasH2);

    // Ahora, generamos las imágenes de las cartas descartadas después de agregar el encabezado
    for (let i = 0; i < cartasDescartadas; i++) {
        // Generar una imagen para cada carta descartada
        const img = document.createElement("img");
        img.src = `img/${paloDescartar.charAt(0).toLowerCase()}${i + 1}.png`;
        img.alt = `${i + 1} de ${paloDescartar}`;
        cartasDescartadasElement.appendChild(img);
    }
}

// Agregamos un evento de envío al formulario
const cartasForm = document.getElementById("cartasForm");
cartasForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtenemos los valores ingresados por el usuario
    const numCartas = parseInt(document.getElementById("numCartas").value);
    const paloDescartar = document.getElementById("palo").value;

    // Llamamos a la función para generar las cartas
    const cartasGeneradasElement = document.getElementById("cartasGeneradas");
    const cartasDescartadasElement = document.getElementById("cartasDescartadas");
    generarImagenesCartas(numCartas, paloDescartar, cartasGeneradasElement, cartasDescartadasElement);
})
