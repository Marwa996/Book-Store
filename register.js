const firstNameInput = document.getElementById("firstName");
const firstNameAlert = document.getElementById("firstNameAlert");

const lastNameInput = document.getElementById("lastName");
const lastNameAlert = document.getElementById("lastNameAlert");

const emailInput = document.getElementById("email");
const emailAlert = document.getElementById("emailAlert");

const passwordInput = document.getElementById("password");
const passwordAlert = document.getElementById("passwordAlert");

const confirmPasswordInput = document.getElementById("confirmPassword");
const confirmPasswordAlert = document.getElementById("confirmPasswordAlert");

function validateEmail(email) {
	let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let isValid;
	if (regex.test(email)) {
		emailAlert.classList.replace("d-block", "d-none");
		emailInput.classList.remove("is-invalid");
		emailInput.classList.add("is-valid");
		isValid = true;
	} else {
		emailAlert.classList.replace("d-none", "d-block");
		emailInput.classList.add("is-invalid");
		emailInput.classList.remove("is-valid");
		isValid = false;
	}
	return isValid;
}

emailInput.addEventListener("keyup", () => {
	validateEmail(emailInput.value);
});

function validateFirstName(name) {
	let regex = /^[a-zA-Z ]{2,30}$/;
	let isValid;
	if (regex.test(name)) {
		firstNameAlert.classList.replace("d-block", "d-none");
		firstNameInput.classList.remove("is-invalid");
		firstNameInput.classList.add("is-valid");
		isValid = true;
	} else {
		firstNameAlert.classList.replace("d-none", "d-block");
		firstNameInput.classList.add("is-invalid");
		firstNameInput.classList.remove("is-valid");
		isValid = false;
	}
	return isValid;
}

firstNameInput.addEventListener("keyup", () => {
	validateFirstName(firstNameInput.value);
});

function validateLastName(name) {
	let regex = /^[a-zA-Z ]{2,30}$/;
	let isValid;
	if (regex.test(name)) {
		lastNameAlert.classList.replace("d-block", "d-none");
		lastNameInput.classList.remove("is-invalid");
		lastNameInput.classList.add("is-valid");
		isValid = true;
	} else {
		lastNameAlert.classList.replace("d-none", "d-block");
		lastNameInput.classList.add("is-invalid");
		lastNameInput.classList.remove("is-valid");
		isValid = false;
	}
	return isValid;
}

lastNameInput.addEventListener("keyup", () => {
	validateLastName(lastNameInput.value);
});

function validatePassword(password) {
	let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	let isValid;
	if (regex.test(password)) {
		passwordAlert.classList.replace("d-block", "d-none");
		passwordInput.classList.remove("is-invalid");
		passwordInput.classList.add("is-valid");
		isValid = true;
	} else {
		passwordAlert.classList.replace("d-none", "d-block");
		passwordInput.classList.add("is-invalid");
		passwordInput.classList.remove("is-valid");
		isValid = false;
	}
	return isValid;
}

passwordInput.addEventListener("keyup", () => {
	validatePassword(passwordInput.value);
});

function validateConfirmPassword(password) {
	let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	let isValid;
	if (regex.test(password)) {
		confirmPasswordAlert.classList.replace("d-block", "d-none");
		confirmPasswordInput.classList.remove("is-invalid");
		confirmPasswordInput.classList.add("is-valid");
		isValid = true;
	} else {
		confirmPasswordAlert.classList.replace("d-none", "d-block");
		confirmPasswordInput.classList.add("is-invalid");
		confirmPasswordInput.classList.remove("is-valid");
		isValid = false;
	}
	return isValid;
}

confirmPasswordInput.addEventListener("keyup", () => {
	validateConfirmPassword(confirmPasswordInput.value);
});

const form = document.querySelector("form");

form.addEventListener("submit", event => {
	event.preventDefault();
	const user = {
		firstName: firstNameInput.value,
		lastName: lastNameInput.value,
		email: emailInput.value,
		password: passwordInput.value,
	};
	console.log(user);
	localStorage.setItem("user", JSON.stringify(user));
	window.location.href = "login.html";
});
