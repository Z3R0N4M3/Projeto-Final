const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

const currentPage = location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  if (loginForm) {
    loginForm.addEventListener('submit', event => {
      event.preventDefault();
      alert('Login enviado!');
      loginForm.reset();
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', event => {
      event.preventDefault();
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('signup-password-confirm').value;

      if (password !== confirmPassword) {
        alert('As senhas não coincidem. Verifique e tente novamente.');
        return;
      }

      alert('Cadastro realizado com sucesso!');
      signupForm.reset();
    });
  }
});
