$(document).ready(function () {
    // Open the contact modal when user click on it
    $("#contactButton").click(function () {
        Swal.fire({
            title: "Contact Me",
            html: `
                <input type="text" id="swal-name" class="swal2-input" placeholder="Your Name">
                <input type="email" id="swal-email" class="swal2-input" placeholder="Your Email">
                <textarea id="swal-message" class="swal2-textarea" placeholder="Your Message"></textarea>
            `,
            showCancelButton: true,
            confirmButtonText: "Send Message",
            preConfirm: () => {
                let name = $("#swal-name").val();
                let email = $("#swal-email").val();
                let message = $("#swal-message").val();

                if (!name || !email || !message) {
                    Swal.showValidationMessage("Please fill all the fields.");
                    return false;
                }

                return { name, email, message };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Send the data to FormSubmit using an AJAX request
                $.ajax({
                    url: 'https://formsubmit.co/411f1d78784d491ecb47c28f732c29f1',  // FormSubmit URL
                    method: 'POST',
                    data: {
                        name: result.value.name,
                        email: result.value.email,
                        message: result.value.message,
                        _subject: "New Message From Portfolio",  // Optional subject
                        _autoresponse: "Thank you! I’ll get back to you soon.", // Optional autoresponse
                        _template: "table" // Optional template
                    },
                    success: function() {
                        // Show the success notification after the message is sent
                        Swal.fire({
                            title: "Message Sent!",
                            text: `Thank you, ${result.value.name}! I will get back to you soon.`,
                            icon: "success"
                        });
                    },
                    error: function() {
                        // Show error message if submission fails
                        Swal.fire({
                            title: "Error",
                            text: "Something went wrong, please try again.",
                            icon: "error"
                        });
                    }
                });
            }
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
