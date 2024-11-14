AOS.init();

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    alert(`Informações preenchidas:\n\nNome: ${name}\nEmail: ${email}\nAssunto: ${subject}\nMensagem: ${message}`);
  }
  

  // Scroll suave para as seções
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
