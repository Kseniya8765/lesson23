const modal = document.getElementById("myModal");
const btn = document.getElementsByClassName("myBtn");
const span = document.getElementsByClassName("close")[0];

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    modal.style.display = "block";
  });
  span.addEventListener("click", function (e) {
    modal.style.display = "none";
  });
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

const email = document.getElementById("mail");
const tel = document.getElementById("tel");
const submit = document.getElementById("submit");
let isMailValid = true;
let isTelValid = true;

email.addEventListener("change", function () {
  const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(this.value) === false) {
    isMailValid = false;
    email.style.borderColor = "red";
    return false;
  } else {
    isMailValid = true;
  }
});

tel.addEventListener("change", function () {
  const reg2 = /^\d[\d() -]{4,14}\d$/;
  if (reg2.test(this.value) === false) {
    isTelValid = false;
    tel.style.borderColor = "red";
    return false;
  } else {
    isTelValid = true;
  }
});

const form = document.getElementById("form_id");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

submit.addEventListener("click", function () {
  if (isMailValid === true && isTelValid === true) {
    console.log(email.value);
    console.log(tel.value);
  }
});
