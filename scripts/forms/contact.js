document
  .querySelector("#phone-number")
  .addEventListener("keypress", function (e) {
    var allowedChars = '0123456789';
    function contains(stringValue, charValue) {
        return stringValue.indexOf(charValue) > -1;
    }
    var invalidKey = e.key.length === 1 && !contains(allowedChars, e.key)
            || e.key === '.' && contains(e.target.value, '.');
    invalidKey && e.preventDefault();
});

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
