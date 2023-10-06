document.addEventListener('DOMContentLoaded', function() {
    // Example: Toggle a class when a button is clicked
    const toggleButton = document.querySelector('.toggle-button');
    const targetElement = document.querySelector('.target-element');

    toggleButton.addEventListener('click', function() {
        targetElement.classList.toggle('active');
    });

    // Example: Display a popup when an image is clicked
    const popupTrigger = document.querySelector('.popup-trigger');
    const popup = document.querySelector('.popup');

    popupTrigger.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    // Close the popup when the close button is clicked
    const closeButton = document.querySelector('.close-button');

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
