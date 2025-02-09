// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Select the header element
    const header = document.querySelector('header');

    // Add an event listener to the header for click events
    header.addEventListener('click', function() {
        // Toggle the background color of the header
        if (header.style.backgroundColor === 'rgb(51, 51, 51)') {
            header.style.backgroundColor = '#007BFF';
        } else {
            header.style.backgroundColor = '#333';
        }
    });

    // Select all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Add an event listener to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            // Change the color of the link on mouseover
            link.style.color = '#FF5733';
        });

        link.addEventListener('mouseout', function() {
            // Revert the color of the link on mouseout
            link.style.color = '#333';
        });
    });
});