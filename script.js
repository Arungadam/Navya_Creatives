function home() {
    document.getElementById("home").style.display = "flex"; // Flex keeps text centered
    document.getElementById("product").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("features").style.display = "none";
}

function products() {
    document.getElementById("product").style.display = "grid"; // CRITICAL: Must be 'grid'
    document.getElementById("home").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("features").style.display = "none";
}

function contact() {
    document.getElementById("contact").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("product").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("features").style.display = "none";
}
function about() {
    document.getElementById("about").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("product").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("features").style.display = "none";
}
function features() {
    document.getElementById("features").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("product").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("about").style.display = "none";
}

function services() {
    document.getElementById("features").style.display = "grid"; // Must be grid
    document.getElementById("home").style.display = "none";
    document.getElementById("product").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("about").style.display = "none";
}
// Add this to your contact function to ensure it displays as flex
function contact() {
    document.getElementById("contact").style.display = "block"; // Wrapper is block
    document.getElementById("home").style.display = "none";
    document.getElementById("product").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("features").style.display = "none";
}

// Form Interaction Logic
document.getElementById('mainContactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page refresh
    
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;
    const status = document.getElementById('formStatus');

    // Display a loading message
    status.innerText = "Connecting to WhatsApp...";

    // Construct the WhatsApp URL
    const whatsappMobile = "916301783856"; 
    const fullMessage = `*New Inquiry from Website*%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    
    // Smooth Redirect after 1 second
    setTimeout(() => {
        window.open(`https://wa.me/${whatsappMobile}?text=${fullMessage}`, '_blank');
        status.innerText = "Message Prepared! Please send it on WhatsApp.";
    }, 1000);
});