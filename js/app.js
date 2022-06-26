// Header

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];
// Como va a retornar un array de 3 elementos, le ponemos la posicion 0 para que retorne el primero

function showHide() {
  // let navLinks = document.getElementsByClassName("navbar-links");
  navBarLinks.classList.toggle("active");
}

// Variables 
const contact_form = document.querySelector('.contact-form');
const contactFormBtn = document.querySelector('contactFormBtn');
const nameInput = document.querySelector('.contact-name-input');
const emailInput = document.querySelector('.contact-email-input');
const msgInput = document.querySelector('.contact-msg-textarea');
const errorDiv = document.querySelector('.errorDiv');

window.addEventListener('DOMContentLoaded', () => {
  contact_form.addEventListener('submit', validation);
})

const validation = (e) => {
  e.preventDefault()

  let name = nameInput.value;
  // console.log(name)
  if (name == '') {
    error('The name has to be completed. Please enter your name and try again.')
    return;
  } else if (name.length >= 50) {
    error("The name has to be under 50 caracters. Please try again.")
    return;
  }

  let email = emailInput.value;
  if (email == '') {
    error('The email has to be completed. Please enter your email adress.')
    return;
  } else if (!email.includes('@')) {
    error('The email adress has to contain a "@". Example: name@email.com. Please try again.')
    return;
  }

  let message = msgInput.value
  if (message == '') {
    error('Please enter a message.')
    return;
  } else if (message.length > 300) {
    error('Message must be under 300 caracters.')
  }
}

const error = (error) => {
  cleanHTML();
  const errorMessage = document.createElement('p');
  errorMessage.textContent = error;
  errorMessage.classList.add('error');

  //Insertarlo en el contenido HTML
  errorDiv.appendChild(errorMessage);

  // Elimina la alerta despues de 2 segundos
  setTimeout(() => {
    errorMessage.remove();
  }, 2000);
};

const cleanHTML = () => {
  while (errorDiv.firstChild) {
    errorDiv.removeChild(errorDiv.firstChild)
  }
};