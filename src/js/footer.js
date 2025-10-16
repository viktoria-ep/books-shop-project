import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.footer-form');

  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();

      const emailInput = form.querySelector('.footer-form-input');
      const email = emailInput.value.trim();

      if (!emailInput.checkValidity()) {
        iziToast.show({
          message: '✘ Please enter a valid email address!',
          backgroundColor: '#f9decd',
          messageColor: '#0b0500',
          progressBar: false,
        });
        return;
      }

      iziToast.show({
        message: '❤︎ Thank you for subscribing!',
        backgroundColor: '#f9decd',
        messageColor: '#0b0500',
        progressBar: false,
      });

      form.reset();
    });
  }
});

const footerBtn = document.querySelector('.footer-form-button');
footerBtn.addEventListener('mouseup', () => footerBtn.blur());
footerBtn.addEventListener('touchend', () => footerBtn.blur());
