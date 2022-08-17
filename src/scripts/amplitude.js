$(function () {
  const events = {
    clickedLink: "clicked link",
    returnedToTop: "returned to top",
    submittedForm: "submitted form",
    viewedPage: "viewed page",
  };

  function path() {
    // get the full path, including #hash and ?querystring, without the protocol/domain
    // and remove trailing slash (except for the homepage)
    // URL: https://www.camobilitymarketplace.org/contracts/view?contracts-filter-product=Transit%20Processor
    // returns: /contracts/view?contracts-filter-product=Transit%20Processor
    return window.location.href.replace(window.location.origin, "").replace(/\/$/, "") || "/";
  }

  function track(event, props = {}) {
    // track an event with Amplitude
    const client = amplitude ? amplitude.getInstance() : null;

    if (client) {
      client.logEvent(event, props);
    } else {
      console.warn("Couldn't get Amplitude client for event: [", event, "] with props: ", props);
    }
  }

  $("a").on("click", function (e) {
    // track clicks on links
    const $target = $(e.target);
    track(events.clickedLink, {
      href: $target.attr("href").replace(/\/$/, ""),
      path: path(),
      target: $target.attr("target"),
      text: $target.text().trim(),
    });
  });

  $("form").on("submit", function (e) {
    // track form submissions
    const $target = $(e.target);
    track(events.submittedForm, {
      form: $target.attr("name"),
      path: path(),
    });
    // ensure event bubbles up
    return true;
  });

  $(".return-top").on("click", function (e) {
    // track clicks on the Return to Top shortcut button
    track(events.returnedToTop, {
      path: path(),
      position: window.scrollY,
    });
  });

  // track an event for every page load
  track(events.viewedPage, {
    path: path(),
  });
});
