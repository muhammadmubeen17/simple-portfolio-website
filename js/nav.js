$(document).on("scroll", function(){
    if($(document).scrollTop() > 86)
    {
      $("#navbar").addClass("sticky");
      $("#nav-logo").addClass("color-white");
      $(".nav-custom-link").addClass("color-white");
      $(".navbar-btn").addClass("nav-btn-icon");
    }
    else
    {
        $("#navbar").removeClass("sticky");
        $("#nav-logo").removeClass("color-white");
        $(".nav-custom-link").removeClass("color-white");
        $(".navbar-btn").removeClass("nav-btn-icon");
    }
});

document.addEventListener('DOMContentLoaded', function () {
  var textElement = document.getElementById('typing-text');
  var textArray = ["Creative", "Work", "I am muhammadmubeen17"];
  var typingSpeed = 400; // Adjust typing speed (in milliseconds)
  var eraseSpeed = 350; // Adjust erasing speed (in milliseconds)
  var delay = 2000; // Delay between typing and erasing (in milliseconds)
  var currentIndex = 0;
  var currentText = '';
  var isDeleting = false;

  function type() {
    var index = currentIndex % textArray.length;
    var fullText = textArray[index];

    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    textElement.innerHTML = '<span>' + currentText + '</span>';

    if (!isDeleting && currentText === fullText) {
      isDeleting = true;
      delay = 1500; // Delay before erasing
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      currentIndex++;
      delay = 500; // Delay before typing next text
    }

    setTimeout(type, isDeleting ? eraseSpeed : typingSpeed);
  }

  setTimeout(type, delay);
});