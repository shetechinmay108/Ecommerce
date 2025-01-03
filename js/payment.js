// Locomotive Scroll Initialization
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  
  
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();  
    
    let parms = {
      first_name: document.getElementById("first-name").value,  
      last_name: document.getElementById("last-name").value,    
      address: document.getElementById("address").value,
      user_email: document.getElementById("email").value, 
      apartment: document.getElementById("apartment").value,
      city: document.getElementById("city").value,
      postcode: document.getElementById("postcode").value,
      phone: document.getElementById("phone").value             
    };
  
     
    if (!parms.user_email || !parms.user_email.includes("@")) {
      alert("Please provide a valid email address.");
      return;
    }
  
     
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
  