$(function() {
  const formId = `#${data_subscribe.form_target}`;
  const confirmId = `#${data_subscribe.confirm_target}`;

  $(formId).submit(function(e) {
    e.preventDefault();
    var $form = $(this);

    $.post($form.attr("action"), $form.serialize()).then(function() {
      $form.addClass("d-none");
      $(confirmId).addClass("d-block");
    });
  });
});