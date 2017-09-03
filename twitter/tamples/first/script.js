$(document).ready(function () {
  $(document).on('click', 'button#login-btn', function (e) {
    e.preventDefault();

    var email = $('input#exampleInputEmail1').val();

    if (email.length === 0) {
      alert('Email can not be empty');
      return;
    }

  });
});
