// Locomotive Scroll Initialization
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  
  // Add event listener for form submission
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form default submission
  
    // Collect form data
    let parms = {
      first_name: document.getElementById("first-name").value, // Match template variable
      last_name: document.getElementById("last-name").value,   // Match template variable
      address: document.getElementById("address").value,
      user_email: document.getElementById("email").value,      // User's email to send
      apartment: document.getElementById("apartment").value,
      city: document.getElementById("city").value,
      postcode: document.getElementById("postcode").value,
      phone: document.getElementById("phone").value            // Optional fields
    };
  
    // Validate email field
    if (!parms.user_email || !parms.user_email.includes("@")) {
      alert("Please provide a valid email address.");
      return;
    }
  
    // Use EmailJS to send email
    emailjs.send("service_hi5r6is", "template_5s2gkjj", parms)
      .then(function (response) {
        console.log("Success:", response);
        alert("Your order has been confirmed ! please check your Email");
        document.getElementById("contact-form").reset(); // Clear form
      })
      .catch(function (error) {
        console.error("Error:", error);
        alert("Failed to send message. Please try again later.");
      });
  });
  