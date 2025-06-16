var sidenav = document.querySelector(".side-navbar");

function shownavbar() {
    sidenav.classList.add("open"); // to open side navbar
}

function closenavbar() {
    sidenav.classList.remove("open"); // to close side navbar
}


// EmailJS Initialization
(function() {
    emailjs.init("MsnpM8M2Db2vXNoF0"); // ✅ Your Public Key here
})();

// Form Submission Event Listener
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submit

    emailjs.sendForm('service_itv1yij', 'template_5md928e', this)
        .then(function() {
            alert('✅ Registration Form Sent Successfully!');
            document.getElementById('contact-form').reset(); // Clear form fields
        }, function(error) {
            alert('❌ Failed to send form: ' + JSON.stringify(error));
        });
});
