$(window).scroll(function () {
  if ($("body").hasClass("how-to-go-contactless")) {
    // event listener for the how to/go-contactless page
    const navLinks = document.querySelectorAll(".mobile-nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // after clicking an anchor link,
        $("#mobile-toc-nav-button").click(); // closes the mobile toc nav
      });
    });

    if ($(window).scrollTop() > 984) {
      $("#mobile-toc-nav").addClass("fixed");
      $(".global-header").addClass("fixed");
    } else {
      $("#mobile-toc-nav").removeClass("fixed");
      $(".global-header").removeClass("fixed");
    }
  }
});
