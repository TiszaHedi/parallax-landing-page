//Smooth scroll 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// Closes responsive menu when a scroll trigger link is clicked
$('.nav-link').click(function() {
    $('.navbar-collapse').collapse('hide');
  });



//Lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
      alwaysShowClose: true
    });
});



//Scroll animations
var header = document.getElementById('headerText');
var headerHeight = header.offsetHeight;

window.onload = function() {
  header.classList.add('fade-in-fwd');
};


//scroll animations
var scrollPosition;
var about = document.getElementById('about');
var aboutHeight = about.offsetHeight;
var skills = document.getElementById('skills');
var skillsHeight = skills.offsetHeight;
var secondBackground = document.getElementsByClassName('second-background')[0];
var secondBackgroundHeight = secondBackground.offsetHeight;
var portfolio = document.getElementById('portfolio');
var portfolioHeight = portfolio.offsetHeight;
var thirdBackground = document.getElementsByClassName('third-background')[0];
var thirdBackgroundHeight = thirdBackground.offsetHeight;
var summHeight = headerHeight * 1.5 + aboutHeight + skillsHeight + secondBackgroundHeight + portfolioHeight + thirdBackgroundHeight;
var contact = document.getElementById('contact');

window.addEventListener('scroll', function() {
  scrollPosition = window.scrollY;

  if(scrollPosition >= headerHeight  ) {
    about.classList.add('fade-in-bottom');
  } 

  if(scrollPosition >= headerHeight + aboutHeight) {
    skills.classList.add('fade-in-bottom');
  }

  if(scrollPosition >= summHeight) {
    contact.classList.add('fade-in-bottom');
  }

});