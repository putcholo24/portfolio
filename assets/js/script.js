(function(){
  function initContactForm(){
    var form = document.getElementById('contact-form');
    if (!form) return;

    // show a success/error banner if redirected back with ?contact=success|error
    var params = new URLSearchParams(window.location.search);
    var status = params.get('contact');
    var msgBox = document.getElementById('ct-form-message');

    if (status && msgBox) {
      if (status === 'success') {
        msgBox.textContent = "Thanks — your message has been sent. I'll get back to you shortly.";
        msgBox.className = 'ct-form-message is-success';
        msgBox.style.display = 'block';
        form.reset();
      } else if (status === 'error') {
        msgBox.textContent = "Something went wrong sending your message. Please check the fields and try again, or email directly.";
        msgBox.className = 'ct-form-message is-error';
        msgBox.style.display = 'block';
      }
      // clean the ?contact=... param out of the URL without reloading
      params.delete('contact');
      var newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '') + '#contact-form';
      window.history.replaceState({}, '', newUrl);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const parallaxElement = document.querySelector(".parallax-element");

  window.addEventListener("scroll", () => {
    // Calculate how far the page has been scrolled
    let scrollPosition = window.pageYOffset;
    
    // Adjust the multiplier (0.05) to control the speed/intensity of the parallax.
    // The negative value moves it slightly upwards as you scroll down.
    let translateY = scrollPosition * -0.05;

    // Cap the maximum translation to roughly -15px as requested in the design
    if (translateY < -15) {
      translateY = -15;
    }

    // Apply the transform
    if (parallaxElement) {
      parallaxElement.style.transform = `translateY(${translateY}px)`;
    }
  });
});


