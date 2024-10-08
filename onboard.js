//onboarding.js
//this is onbooard javascript file.
document.getElementById('onboardingForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const schoolName = document.getElementById('schoolName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const enrollments = document.getElementById('enrollments').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');



    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    
    const phonePattern = /^[0-9]{10}$/;  // assuming phone number should be 10 digits
    if (!phonePattern.test(phoneNumber)) {
        errorMessage.textContent = 'Please enter a valid 10-digit phone number.';
        return;
    }

    alert('Form submitted successfully!');
});

