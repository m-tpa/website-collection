document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill out all fields before submitting.";
    } 
    else if (!email.includes("@") || !email.includes(".")) {
      formMessage.style.color = "orange";
      formMessage.textContent = "Please enter a valid email address.";
    }
    else {
      formMessage.style.color = "green";
      formMessage.textContent = "Thank you, " + name + "! Your message has been received.";
      form.reset();
    }
  });
});
