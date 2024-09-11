document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const togglePassword = document.getElementById('togglePassword');
    const message = document.getElementById('message');

    // Show/hide password
    togglePassword.addEventListener('click', function() {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.querySelector('i').classList.toggle('bxs-hide');
        this.querySelector('i').classList.toggle('bxs-show');
    });

    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset error messages
        emailError.textContent = '';
        passwordError.textContent = '';
        message.textContent = '';

        // Validate email
        if (!isValidEmail(email.value)) {
            emailError.textContent = 'Please enter a valid email address';
            return;
        }

        // Validate password
        if (password.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            return;
        }

        // Show loading spinner
        message.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Logging in...';

        // Simulate API call
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email.value,
                password: password.value
            })
        })
        .then(response => response.json())
        .then(data => {
            message.innerHTML = 'Login successful!';
            message.style.color = 'white';
            loginForm.reset();
        })
        .catch(error => {
            message.innerHTML = 'Login failed. Please try again.';
            message.style.color = 'red';
        });
    });

    // Real-time validation
    email.addEventListener('input', function() {
        if (isValidEmail(this.value)) {
            emailError.textContent = '';
        }
    });

    password.addEventListener('input', function() {
        if (this.value.length >= 6) {
            passwordError.textContent = '';
        }
    });

    // Email validation helper function
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});