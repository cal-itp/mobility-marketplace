$(function() {
  const formId = `#${data_contact.form_target}`;
  const confirmId = `#${data_contact.confirm_target}`;

  $(formId).submit(function(e) {
    e.preventDefault();
    var $form = $(this);

    $.post($form.attr("action"), $form.serialize()).then(function() {
      $form.parent().children().addClass("d-none");
      $(confirmId).removeClass("d-none").addClass("d-block");
    });
  });
});
