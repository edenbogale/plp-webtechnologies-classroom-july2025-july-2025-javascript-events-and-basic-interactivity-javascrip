// =============================
// PLP JavaScript Assignment
// Interactive Web Page with Events & Validation
// =============================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // =============================
  // PART 1: Basic Event Handling
  // =============================
  const clickBtn = document.getElementById('clickBtn');
  const message = document.getElementById('message');

  clickBtn.addEventListener('click', () => {
    message.textContent = '🎉 You clicked the button! JavaScript is alive!';
    message.style.color = 'green';
  });

  // =============================
  // PART 2: Interactive Elements
  // =============================

  // 1. Light/Dark Mode Toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️ Toggle Light Mode' : '🌙 Toggle Dark Mode';
  });

  // 2. Counter Game
  const counterBtn = document.getElementById('counterBtn');
  const counterDisplay = document.getElementById('counter');
  let count = 0;
  counterBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
    counterDisplay.style.color = count % 2 === 0 ? 'blue' : 'red';
  });

  // 3. Collapsible FAQ
  const faqQuestion = document.getElementById('faqQ');
  const faqAnswer = document.getElementById('faqA');
  faqQuestion.addEventListener('click', () => {
    if (faqAnswer.style.display === 'none') {
      faqAnswer.style.display = 'block';
      faqQuestion.style.cursor = 'pointer';
    } else {
      faqAnswer.style.display = 'none';
    }
  });

  // =============================
  // PART 3: Form Validation
  // =============================
  const form = document.getElementById('userForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const formStatus = document.getElementById('formStatus');

  // Validation functions
  function validateName(name) {
    return name.trim().length >= 2;
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePassword(password) {
    return password.length >= 6 && /\d/.test(password);
  }

  // Real-time validation (optional)
  nameInput.addEventListener('blur', () => {
    const error = document.getElementById('nameError');
    if (!validateName(nameInput.value)) {
      error.textContent = 'Name must be at least 2 characters.';
      error.style.color = 'red';
    } else {
      error.textContent = '✓';
      error.style.color = 'green';
    }
  });

  emailInput.addEventListener('blur', () => {
    const error = document.getElementById('emailError');
    if (!validateEmail(emailInput.value)) {
      error.textContent = 'Please enter a valid email.';
      error.style.color = 'red';
    } else {
      error.textContent = '✓';
      error.style.color = 'green';
    }
  });

  passwordInput.addEventListener('blur', () => {
    const error = document.getElementById('passwordError');
    if (!validatePassword(passwordInput.value)) {
      error.textContent = 'Min 6 chars + 1 number.';
      error.style.color = 'red';
    } else {
      error.textContent = '✓';
      error.style.color = 'green';
    }
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    const isNameValid = validateName(nameInput.value);
    const isEmailValid = validateEmail(emailInput.value);
    const isPasswordValid = validatePassword(passwordInput.value);

    // Clear previous status
    formStatus.textContent = '';

    if (isNameValid && isEmailValid && isPasswordValid) {
      formStatus.textContent = '✅ Form submitted successfully!';
      formStatus.style.color = 'green';
      // Reset form (optional)
      form.reset();
      document.querySelectorAll('.error').forEach(el => el.textContent = '');
    } else {
      formStatus.textContent = '❌ Please fix errors above.';
      formStatus.style.color = 'red';
    }
  });
});
