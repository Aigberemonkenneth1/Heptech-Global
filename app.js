// app.js

(function() {
    // Initialize EmailJS with your Public Key
    emailjs.init({
      publicKey: "AYl7FX4kgorHko1GK",
    });
})();

window.onload = function() {
    const form = document.getElementById('contact-form');
    const btn = document.getElementById('submit-btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission (page reload)

        btn.textContent = 'Sending...';

        const serviceID = 'service_79v6hbd';
        const templateID = 'template_jq2q7ih';

        // The 'this' keyword refers to the form that triggered the event
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.textContent = 'Send';
                alert('Sent!');
                form.reset(); // Clears the form fields
            }, (err) => {
                btn.textContent = 'Send';
                alert(JSON.stringify(err));
            });
    });
}
