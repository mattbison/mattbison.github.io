//Once the document is ready, perform the function
$(document).ready(function() {
  var theme = document.getElementById("theme");
    theme.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            theme.textContent = "Light";
        } else {
            theme.textContent = "Dark";
        }
    }

  // Create a variable called scroll link that affects any class scroll
  var scrollLink = $('.scroll');
  
  // When a link with the class scroll is clicked, perform the following
  scrollLink.click(function(e) {
    // Prevent the default browser scrolling action
    e.preventDefault();
    // Animate in the following way within the body and html
    $('body,html').animate({
      // Honestly I have no fucking idea man
      scrollTop: $(this.hash).offset().top - 50
      // Perform the action in 1000 milliseconds
    }, 1000 );
  });
})