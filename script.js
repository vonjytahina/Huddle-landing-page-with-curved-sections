const sectionOneEmail = document.getElementById("email-input");
const sectionOneSubmit = document.querySelector(".submit");
const emailError = document.querySelector(".error-message");

sectionOneSubmit.onclick = () => {
  const inputValue = sectionOneEmail.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (inputValue === "" || !emailRegex.test(inputValue)) {
    emailError.style.display = "block";
    sectionOneEmail.classList.add("error-border");
  } else {
    emailError.style.display = "none";
    sectionOneEmail.classList.remove("error-border");
  }
};
