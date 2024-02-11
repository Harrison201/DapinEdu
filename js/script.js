function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach(header => {
      header.addEventListener("click", function() {
        const accordionItem = this.parentElement;
        const content = accordionItem.querySelector(".accordion-content");
  
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  });
  