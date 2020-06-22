const form = document.getElementById("form");

const activeFirst = document.getElementById("activeFirst");
const activeLast = document.getElementById("activeLast");
const activeEmail = document.getElementById("activeEmail");
const activePassword = document.getElementById("activePassword");

const imageFirst = document.getElementById("imageFirst");
const imageLast = document.getElementById("imageLast");
const imageEmail = document.getElementById("imageEmail");
const imagePassword = document.getElementById("imagePassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstname = form["firstname"];
  const lastname = form["lastname"];
  const email = form["email"];
  const password = form["password"];

  if (!firstname.value) {
    activeFirst.classList.add("active");
    firstname.classList.add("error");
    imageFirst.classList.add("imgError");
  } else {
    activeFirst.classList.remove("active");
    firstname.classList.remove("error");
    imageFirst.classList.remove("imgError");
  }

  if (!lastname.value) {
    activeLast.classList.add("active");
    lastname.classList.add("error");
    imageLast.classList.add("imgError");
  } else {
    activeLast.classList.remove("active");
    lastname.classList.remove("error");
    imageLast.classList.remove("imgError");
  }

  if (!email.value) {
    activeEmail.classList.add("active");
    email.classList.add("error");
    imageEmail.classList.add("imgError");
  } else {
    activeEmail.classList.remove("active");
    email.classList.remove("error");
    imageEmail.classList.remove("imgError");
  }

  if (!password.value) {
    activePassword.classList.add("active");
    password.classList.add("error");
    imagePassword.classList.add("imgError");
  } else {
    activePassword.classList.remove("active");
    password.classList.remove("error");
    imagePassword.classList.remove("imgError");
  }
});
