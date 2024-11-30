// Example script to handle button clicks

// Select all buttons
const buttons = document.querySelectorAll('.btn');

// Add click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});
