AOS.init({
  once: true,
});

function menuToggle(){
    document.getElementById('mobile-dropdown').classList.toggle('hide-mobile-dropdown');
}

// Listen for click on the document
function accordionToggle(id) {
    
    // Get the target content
    var content = document.querySelector(id);
    if (!content) return;
    
    // If the content is already expanded, collapse it and quit
    if (content.classList.contains('active')) {
      content.classList.remove('active');
      return;
    }
    
    // Get all open accordion content, loop through it, and close it
    var accordions = document.querySelectorAll('.accordion-content.active');
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove('active');
    }
    
    // Toggle our content
    content.classList.toggle('active');
  }