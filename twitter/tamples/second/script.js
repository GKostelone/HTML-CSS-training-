$(document).ready(function () {
	$(document).on('click', 'button#signup-btn', function (e) {
		e.preventDefault();

		var name = $('input#exampleInputFullName1').val(),
			email = $('input#exampleInputEmail1').val(),
			password = $('input#exampleInputPassword1').val();
		
		email = $('input#exampleInputEmail1').val(name),
		password = $('input#exampleInputPassword1').val(name);






		// if (name.length === 0) {
		// 	alert('Name can not be empty.');
		// 	return;
		// }

		// if (email.length === 0) {
		// 	alert('Email can not be empty.');
		// 	return;
		// }

		// if (email.indexOf('@') === -1) {
		// 	alert('Email is incorrect.');
		// 	return;
		// }

		// if (password.length === 0) {
		// 	alert('Password can not be empty.');
		// 	return;
		// }



		// $.ajax({
		//   url: 'http://localhost:8080/signup',
		//   method: 'POST',
		//   data: JSON.stringify({name: name, email: email, password: password}),
		//   headers: {'content-type': 'application/json'}
		// })
		// .done(function (response) {
		//   if (response === 'UserNotFound') {
		//     alert('User not found');
		//   } else if (response === 'InvalidCredentials') {
		//     alert('Incorrect email or password');
		//   } else {
		//     window.location = 'file:///Users/Gkostanyan/Desktop/folder/train/twitter/tamples/second/index2.html?';
		//   }
		// });


		return;
	});
});

$(document).on('click', 'a#adc', function (e) {
	e.preventDefault();
	obj.ink();
	$('.form-main').html(obj.counter);
});

var obj = {
	counter: 1,
	ink: function(){
		this.counter =+ 1;
	}
}




























