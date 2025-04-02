$(document).ready(function () {
    $("#contact-form").submit(function (event) {
        event.preventDefault(); // Prevent form submission
        
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#message").val();

        if (name && email && message) {
            Swal.fire({
                title: "Message Sent!",
                text: "Thank you, " + name + "! I will get back to you soon.",
                icon: "success"
            });
            $("#contact-form")[0].reset(); // Clear form
            $('#contactModal').modal('hide'); // Close modal
        } else {
            Swal.fire({
                title: "Error!",
                text: "Please fill all the fields.",
                icon: "error"
            });
        }
    });
});
