document.addEventListener('DOMContentLoaded', () => {
    const loginBox = document.querySelector('.login-box');
    const signupBox = document.querySelector('.signup-box');
    const toSignupLink = document.getElementById('to-signup');
    const toLoginLink = document.getElementById('to-login');
    const formContainer = document.getElementById('form-container');
    const mainContent = document.getElementById('main-content');
    const loginForm = document.getElementById('login-form');

    toSignupLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginBox.style.display = 'none';
        signupBox.style.display = 'block';
    });

    toLoginLink.addEventListener('click', (event) => {
        event.preventDefault();
        signupBox.style.display = 'none';
        loginBox.style.display = 'block';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        // Perform login validation or AJAX request here
        // For example purposes, we'll just simulate successful login

        // Hide the login form and show the main content
        formContainer.style.display = 'none';
        mainContent.style.display = 'block';
    });
});
