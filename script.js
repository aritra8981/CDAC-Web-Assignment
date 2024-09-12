document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const togglePassword = document.getElementById('togglePassword');
    const message = document.getElementById('message');
    const rememberMe = document.getElementById('rememberMe');

    // Toggle Password Visibility
    togglePassword.addEventListener('click', function() {
        const passwordField = password;
        const icon = this.querySelector('i');

        // Toggle password field type between 'text' and 'password'
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // Toggle the icon class between 'hide' and 'show'
        icon.classList.toggle('bxs-hide');
        icon.classList.toggle('bxs-show');
    });

    // Form Submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Reset error messages and message box
        emailError.textContent = '';
        passwordError.textContent = '';
        message.textContent = '';

        // Client-Side Validation
        let valid = true;

        // Validate email
        if (!isValidEmail(email.value)) {
            emailError.textContent = 'Please enter a valid email address';
            valid = false;
        }

        // Validate password (min 6 characters)
        if (password.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            valid = false;
        }

        // If validation fails, exit the function
        if (!valid) return;

        // Show loading spinner
        message.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Logging in...';

        // Simulate API call to the open login API
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
            // Simulate success response (You may replace it with your actual API logic)
            message.innerHTML = 'Login successful!';
            message.style.color = 'white';
            loginForm.reset();

            // If "Remember me" is checked, store credentials in localStorage
            if (rememberMe.checked) {
                localStorage.setItem('username', email.value);
            }
        })
        .catch(error => {
            // Handle errors
            message.innerHTML = 'Login failed. Please try again.';
            message.style.color = 'red';
        });
    });

    // Real-Time Validation for Email
    email.addEventListener('input', function() {
        if (isValidEmail(this.value)) {
            emailError.textContent = '';
        }
    });

    // Real-Time Validation for Password
    password.addEventListener('input', function() {
        if (this.value.length >= 6) {
            passwordError.textContent = '';
        }
    });

    // Helper Function: Validate Email
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Load "Remember Me" data from localStorage if available
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        email.value = storedUsername;
        rememberMe.checked = true;
    }
});
