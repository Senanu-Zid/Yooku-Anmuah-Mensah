// JavaScript code
// Add your own JavaScript code here
(function() {
    emailjs.init("YOUR_USER_ID");
  })();
  
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Send email using EmailJS
    emailjs.send("service_ggtfsc6", "template_rh7r2kv", {
      to_email: 'yookuaseda@icloud.com',
      from_name: contactForm.name.value,
      from_email: contactForm.email.value,
      subject: contactForm.subject.value,
      message: contactForm.message.value
    })
    .then(function(response) {
      alert('Email sent successfully!');
      contactForm.reset();
    }, function(error) {
      alert('An error occurred while sending the email. Please try again later.');
      console.error('Email sending error:', error);
    });
  });
  