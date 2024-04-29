document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const companyName = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        form.innerHTML = `
        <p>Thank you for the message, ${companyName}. We will get back to you as soon as possible.</p>
        <a href="contact.html">Submit a new message</a>
        `;
    });
});