// Google Sheets API configuration
const GOOGLE_SHEET_ID = 'AKfycbyHHDdEAv6taGkFC7K17_6hIzGo9TKVeEYh9mQoMwzd2jNazG8PeZNxt3fGpSCux8BpYw';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyHHDdEAv6taGkFC7K17_6hIzGo9TKVeEYh9mQoMwzd2jNazG8PeZNxt3fGpSCux8BpYw/exec';

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
                timestamp: new Date().toISOString()
            };
            
            try {
                console.log('Sending data:', data);
                console.log('To URL:', GOOGLE_SCRIPT_URL);
                
                // Send data to Google Sheets
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'no-cors'
                });
                
                console.log('Response:', response);
                
                // Since we're using no-cors, we can't check response.ok
                // Instead, we'll assume success if we get here
                alert('Message sent successfully!');
                contactForm.reset();
                
            } catch (error) {
                console.error('Error details:', error);
                alert('Failed to send message. Please try again later.');
            }
        });
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Toggle between hamburger and close icon
  const icon = mobileMenuBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    navLinks.classList.remove('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}); 