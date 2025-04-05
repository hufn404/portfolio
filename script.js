$(document).ready(function () {
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
                let formData = new FormData();
                formData.append("name", result.value.name);
                formData.append("email", result.value.email);
                formData.append("message", result.value.message);

                fetch("https://formspree.io/f/movekzrg", {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        Swal.fire({
                            title: "Message Sent!",
                            text: `Thank you, ${result.value.name}! I will get back to you soon.`,
                            icon: "success"
                        });
                    } else {
                        response.json().then(data => {
                            let errorMsg = "Oops! Something went wrong.";
                            if (data.errors) {
                                errorMsg = data.errors.map(error => error.message).join(", ");
                            }
                            Swal.fire("Error", errorMsg, "error");
                        });
                    }
                })
                .catch(() => {
                    Swal.fire("Error", "Something went wrong. Please try again later.", "error");
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
