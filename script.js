const form = document.querySelector("form");
const email = form.querySelector("#email");
const subscribeBtn = form.querySelector("#subscribe-btn");
const emailErrorMsg = form.querySelector("#email-error");
const successMsg = document.querySelector("#success-container");
const userEmail = document.querySelector("#user-email");

subscribeBtn.onclick = (e) => {
  validateEmail(e);
};

function validateEmail(e) {
  e.preventDefault();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    email.value.replace(/\s/g, "") === "" ||
    !emailPattern.test(email.value)
  ) {
    emailErrorMsg.classList.remove("hidden");
    email.classList.add("error");
  } else {
    setTimeout(() => {
      document.querySelector(".wrapper").classList.add("hidden");
      displaySuccessMsg();
    }, 2000);
  }
}

function displaySuccessMsg() {
  userEmail.innerHTML = email.value;
  successMsg.classList.remove("hidden");
  successMsg.style.display = "flex";
}
