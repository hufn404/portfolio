$(document).ready(function () {
    // When user clicks the Contact link
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
                Swal.fire({
                    title: "Message Sent!",
                    text: `Thank you, ${result.value.name}! I will get back to you soon.`,
                    icon: "success"
                });
            }
        });
    });
});
