

        // Function to toggle the visibility of the dropdown
        function toggleDropdown(button) {
            // Close all dropdowns first
            var allDropdowns = document.querySelectorAll('.dropdown-content');
            allDropdowns.forEach(function(dropdown) {
                dropdown.style.display = 'none';
            });

            // Get the dropdown content associated with the clicked button
            var dropdown = button.nextElementSibling;

            // If the dropdown content is not open, open it
            if (dropdown.style.display === "none" || dropdown.style.display === "") {
                dropdown.style.display = "block";
            } else {
                dropdown.style.display = "none";
            }
        }
        
        
        const images = document.querySelectorAll('.bg-image');
    let current = 0;

    function showNextImage() {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }

    images[current].classList.add('active');
    setInterval(showNextImage, 3000);
    
    
    function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
