// Año automático en el footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Manejo simple del formulario (frente al usuario, sin backend)
const form = document.getElementById("lead-form");
const formMessage = document.getElementById("form-message");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    formMessage.textContent =
      "¡Gracias! Registramos tus datos para avisarte cuando Manos Pro esté disponible.";
    form.reset();
  });
}
