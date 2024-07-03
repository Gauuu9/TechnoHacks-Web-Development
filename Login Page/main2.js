const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const username = usernameInput.value.trim();
	const password = passwordInput.value.trim();

	if (username === '' || password === '') {
		errorMsg.textContent = 'Please fill in all fields.';
        errorMsg;
		return;
	}
	const bcrypt = require('bcryptjs');
	const salt = bcrypt.genSaltSync(10);
	const hashedPassword = bcrypt.hashSync(password, salt);

	console.log(hashedPassword);
});