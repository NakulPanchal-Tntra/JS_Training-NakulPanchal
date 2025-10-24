let data = JSON.parse(localStorage.getItem("userData")) || [];
const form = document.getElementById("dynamicForm");
const displayBox = document.getElementById("displayBox");
displayBox.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
const themebutton = document.getElementById("Theme");

// Theme operations

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "black") {
  document.body.classList.add("theme-black");
  themebutton.textContent = "Dark";
  themebutton.style.backgroundColor = "white";
  themebutton.style.color = "black";
} else {
  document.body.classList.remove("theme-black");
  themebutton.textContent = "Light";
  themebutton.style.backgroundColor = "black";
  themebutton.style.color = "white";
}

function toggleTheme() {
  var body = document.body;
  body.classList.toggle("theme-black");
  if (body.classList.contains("theme-black")) {
    localStorage.setItem("theme", "black");
    themebutton.textContent = "Dark";
    themebutton.style.backgroundColor = "white";
    themebutton.style.color = "black";
  } else {
    localStorage.setItem("theme", "light");
    themebutton.textContent = "Light";
    themebutton.style.backgroundColor = "black";
    themebutton.style.color = "white";
  }
}

// Validation Functions Username

function validateName(name) {
  if (name.trim().length < 2) {
    document.getElementById("nameValidation").textContent =
      "Name must be at least 2 characters.";
    return false;
  } else if (name.trim().length > 50) {
    document.getElementById("nameValidation").textContent =
      "Name must be at most 50 characters.";
    return false;
  } else {
    document.getElementById("nameValidation").textContent = "";
    return true;
  }
}

// Validation Functions Email

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const existingEmail = data.find((user) => user.email === email);
  if (existingEmail) {
    document.getElementById("emailValidation").textContent =
      "This email is already register.";
    return false;
  }
  if (!pattern.test(email.trim())) {
    document.getElementById("emailValidation").textContent =
      "Please enter a valid email address.";
    return false;
  } else {
    document.getElementById("emailValidation").textContent = "";
    return true;
  }
}

// Validation Functions Age

function validateAge(age) {
  if (age === "" || age <= 0 || isNaN(age)) {
    document.getElementById("ageValidation").textContent =
      "Please enter a valid age.";
    return false;
  } else {
    document.getElementById("ageValidation").textContent = "";
    return true;
  }
}

// Validation Functions Date of birth

function validateDOB(dob) {
  if (!dob) {
    document.getElementById("dobValidation").textContent =
      "Please select your date of birth.";
    return false;
  }

  const today = new Date();
  const birthDate = new Date(dob);
  if (birthDate > today) {
    document.getElementById("dobValidation").textContent =
      "Date of birth cannot be in the future.";
    return false;
  }

  document.getElementById("dobValidation").textContent = "";
  return true;
}

// Validation Functions Gender

function validateGender() {
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    document.getElementById("genderValidation").textContent =
      "Please select your gender.";
    return false;
  } else {
    document.getElementById("genderValidation").textContent = "";
    return true;
  }
}

// Validation Functions Hobbies

function validateHobbies() {
  const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
  if (hobbies.length === 0) {
    document.getElementById("hobbiesValidation").textContent =
      "Please select at least one hobby.";
    return false;
  } else {
    document.getElementById("hobbiesValidation").textContent = "";
    return true;
  }
}

// Validation Functions Country

function validateCountry(country) {
  if (country.trim() === "") {
    document.getElementById("countryValidation").textContent =
      "Please enter your country.";
    return false;
  } else {
    document.getElementById("countryValidation").textContent = "";
    return true;
  }
}

// Real-time Validation

document
  .getElementById("name")
  .addEventListener("input", (e) => validateName(e.target.value));
document
  .getElementById("email")
  .addEventListener("input", (e) => validateEmail(e.target.value));
document
  .getElementById("age")
  .addEventListener("input", (e) => validateAge(e.target.value));
document
  .getElementById("dob")
  .addEventListener("change", (e) => validateDOB(e.target.value));
document.querySelectorAll('input[name="gender"]').forEach((radio) => {
  radio.addEventListener("change", validateGender);
});

document.querySelectorAll('input[name="hobbies"]').forEach((checkbox) => {
  checkbox.addEventListener("change", validateHobbies);
});
document
  .getElementById("country")
  .addEventListener("input", (e) => validateCountry(e.target.value));

// Form Submit

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const country = document.getElementById("country").value.trim();
  const hobbies = Array.from(
    document.querySelectorAll('input[name="hobbies"]:checked')
  ).map((cb) => cb.value);

  const isValid =
    validateName(username) &
    validateEmail(email) &
    validateAge(age) &
    validateDOB(dob) &
    validateGender(gender) &
    validateHobbies() &
    validateCountry(country);

  if (isValid) {
    alert("Form Submitted Successfully!");

    const userData = {
      username,
      email,
      age,
      dob,
      gender,
      hobbies,
      country,
    };

    data.push(userData);
    localStorage.setItem("userData", JSON.stringify(data));
    displayBox.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;

    form.reset();
  }
});
