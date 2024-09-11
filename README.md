# Stylish Login Form

This project implements a modern, responsive login form with client-side validation and API integration. The form features a sleek design with a blurred background effect and smooth animations.

## Features

- Responsive design that works on desktop and mobile devices
- Client-side email and password validation
- Show/hide password functionality
- Remember me checkbox
- Forgot password link
- API integration for form submission
- Loading spinner during form submission
- Success/error messages after form submission

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [Boxicons](https://boxicons.com/) for icons

## Setup

1. Clone this repository or download the ZIP file.
2. Extract the files to your desired location.
3. Ensure you have a background image named `img.jpg` in the same directory as your HTML file. This will be used as the background for the login page.

## File Structure

```
stylish-login-form/
│
├── index.html
├── styles.css
├── script.js
├── img.jpg
└── README.md
```

## Usage

1. Open `index.html` in a web browser to view the login form.
2. Enter an email address and password to test the form validation.
3. Click the eye icon next to the password field to toggle password visibility.
4. Click the "Login" button to submit the form. This will trigger a simulated API call.

## Customization

- To change the background image, replace `img.jpg` with your desired image and update the `background` property in the `body` selector in `styles.css`.
- To modify the color scheme, update the relevant color values in `styles.css`.
- To change the form fields or add new ones, modify the HTML structure in `index.html` and update the JavaScript validation in `script.js` accordingly.

## API Integration

The form is set up to make a POST request to `https://jsonplaceholder.typicode.com/posts` as a placeholder API endpoint. To integrate with your own API:

1. Open `script.js`
2. Locate the `fetch` function call in the form submission event listener
3. Replace the URL with your API endpoint
4. Adjust the request body and headers as needed for your API

## Browser Support

This login form should work in all modern browsers. For the best experience, use the latest versions of Chrome, Firefox, Safari, or Edge.

## Contributing

Feel free to fork this project and submit pull requests with any enhancements. You can also open issues if you find any bugs or have feature suggestions.

