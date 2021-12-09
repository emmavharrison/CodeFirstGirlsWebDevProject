document.addEventListener('DOMContentLoaded', function() {
  const uniWelcome = document.getElementById("uniWelcome");

  const uniWelcomeText = document.createElement("p");
  uniWelcomeText.innerText = "That's why it's important to consider what YOU want";



  uniWelcome.appendChild(uniWelcomeText);

  uniWelcomeText.addEventListener("mouseenter", function() {
    uniWelcomeText.style.color = "orange";
  });

  uniWelcomeText.addEventListener("mouseleave", function() {
    uniWelcomeText.style.color = "blue";
  });

});



  