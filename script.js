$(document).ready(function () {
    // Open the contact modal when user click on it
    $("#contactButton").click(function () {
        $('#contactModal').modal('show');
    });

    $('#contact-form').submit(function (e) {
        e.preventDefault(); // Prevent default form submission

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (!name || !email || !message) {
            Swal.fire({
                title: 'Oops!',
                text: 'Please fill out all fields.',
                icon: 'warning',
                confirmButtonText: 'Okay'
            });
            return;
        }

        // Display confirmation message
        Swal.fire({
            title: 'Message Sent!',
            text: 'Thank you for reaching out, I will get back to you soon!',
            icon: 'success',
            confirmButtonText: 'Okay'
        });

    });
});


// Word fade in 
document.addEventListener('DOMContentLoaded', () => {
    // Split text into individual words and add animation
    function animateText(id) {
        const element = document.getElementById(id);
        const text = element.innerText;
        element.innerHTML = ''; // Clear existing content
        const words = text.split(' '); // Split into words

        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.innerText = word + ' '; // Add space after each word
            span.classList.add('word');
            span.style.animationDelay = `${index * 0.1}s`; // Delay for each word
            element.appendChild(span);

             // Add a space after each word for spacing
             const space = document.createElement('span');
             space.innerText = ' ';
             element.appendChild(space);
        });
    }

    // Call the function for each paragraph
    animateText('about-text');
    animateText('about-description');
    animateText('about-more');
    animateText('about-passion');
});
