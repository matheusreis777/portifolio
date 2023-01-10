$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== '') {
        // Prevent default anchor click behavior
        event.preventDefault()

        // Store hash
        var hash = this.hash

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },
          900,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash
          }
        )
      } // End if
    })

    $(window).scroll(function () {
      $('.slideanim').each(function () {
        var pos = $(this).offset().top

        var winTop = $(window).scrollTop()
        if (pos < winTop + 600) {
          $(this).addClass('slide')
        }
      })
    })
  });


function alerta(){
    alert("Ok!");
  }

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('AZK1VA0C2NZjzrNge');
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_h0i6cmb', 'template_cmwz5wj', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}