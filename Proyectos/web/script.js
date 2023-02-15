// Función para abrir y cerrar el menú en dispositivos móviles
const toggleMenu = () => {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("show");
};

// Obtener el botón del menú y agregar un evento de clic
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", toggleMenu);

// Cambiar el color de fondo del encabezado cuando se hace clic en él
const header = document.querySelector("header");
header.addEventListener("click", () => {
  header.style.backgroundColor = "red";
});

// Mostrar un mensaje en la consola cuando se carga la página
console.log("¡Hola! Bienvenido a mi portfolio");

// Boton
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    // muestra el botón cuando se ha desplazado 300 píxeles hacia abajo
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // desplazamiento suave hacia arriba
});

// Desplazamiento suave al hacer clic en un elemento del menú
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000
  );
});
