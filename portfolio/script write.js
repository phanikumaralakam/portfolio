// Function to open a link in a new tab
function openLink(url) {
  window.open(url, '_blank');
}

// Function to display a welcome message on window load
function displayWelcomeMessage() {
  alert("Hi everyone! Welcome to the portfolio.");
}

// Execute the displayWelcomeMessage function when the window loads
window.onload = function () {
  displayWelcomeMessage();
};
document.addEventListener('DOMContentLoaded', function() {
  var hireMeButton = document.getElementById('hireMeButton');

  hireMeButton.addEventListener('click', function() {
      // Replace 'your-github-username' with your actual GitHub username
      var githubUrl = 'https://github.com/phanikumaralakam';

      // Open GitHub account in a new tab
      window.open(githubUrl, '_blank');
  });
});
// write.js

document.addEventListener('DOMContentLoaded', function () {
  // Get the WhatsApp button element
  var whatsappButton = document.getElementById('whatsappButton');

  // Add a click event listener to the WhatsApp button
  whatsappButton.addEventListener('click', function () {
    // Replace 'YOUR_PHONE_NUMBER' with your actual WhatsApp phone number, including the country code
    var phoneNumber = '8121251534';
    
    // Construct the WhatsApp URL with the phone number
    var whatsappURL = 'https://wa.me/' + phoneNumber;

    // Open the WhatsApp URL in a new tab
    window.open(whatsappURL, '_blank');
  });
});


 // Sticky Navigation Menu JS Code
 let nav = document.querySelector("nav");
 let scrollBtn = document.querySelector(".scroll-button a");
 
 window.onscroll = function () {
   if (document.documentElement.scrollTop > 20) {
     nav.classList.add("sticky");
     scrollBtn.style.display = "block";
   } else {
     nav.classList.remove("sticky");
     scrollBtn.style.display = "none";
   }
 };
 
 // Side Navigation Menu JS Code
 let body = document.querySelector("body");
 let navBar = document.querySelector(".navbar");
 let menuBtn = document.querySelector(".menu-btn");
 let cancelBtn = document.querySelector(".cancel-btn");
 
 menuBtn.onclick = function () {
   navBar.classList.add("active");
   menuBtn.style.opacity = "0";
   menuBtn.style.pointerEvents = "none";
   body.style.overflow = "hidden";
   scrollBtn.style.pointerEvents = "none";
 };
 
 cancelBtn.onclick = function () {
   navBar.classList.remove("active");
   menuBtn.style.opacity = "1";
   menuBtn.style.pointerEvents = "auto";
   body.style.overflow = "auto";
   scrollBtn.style.pointerEvents = "auto";
 };
 

 // Close Side Navigation Bar when clicking
 function openASIST() {
   window.open('https://amritasai.org.in', '_blank');
 }
 