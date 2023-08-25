// JavaScript code for the Artist's Artwork Shop website

// Function to handle adding artwork to the cart
function addToCart(artworkId) {
    // Implement your logic to add the artwork to the cart
    // You can use JavaScript variables, arrays, or objects to store the cart items
    // For example:
    // const cartItems = [];
    // const artwork = { id: artworkId, name: "Artwork 1", price: 50 };
    // cartItems.push(artwork);
    // console.log("Artwork added to cart:", artwork);
  }
  
  // Function to handle form submission for contact
  function handleContactFormSubmit(event) {
    event.preventDefault();
    // Implement your logic to handle the form submission
    // For example, you can retrieve the form values using event.target and send them via AJAX or perform form validation
    // console.log("Contact form submitted");
    // const name = event.target.name.value;
    // const email = event.target.email.value;
    // const message = event.target.message.value;
    // ...
  }
  
  // Add event listeners when the DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    // Add event listener for adding artwork to the cart
    const addToCartButtons = document.querySelectorAll(".artwork button");
    addToCartButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const artworkId = button.dataset.artworkId;
        addToCart(artworkId);
      });
    });
  
    // Add event listener for contact form submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", handleContactFormSubmit);
    }
  });
  