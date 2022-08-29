let blocs = document.getElementsByClassName("bloc");
let btn = document.getElementById("btn");
let blocsLength = blocs.length;
for (let i = 0; i < blocsLength; i++) {
  btn.addEventListener("click", function () {
    blocs[i].classList.toggle("active");
  });
}

/* blocs.map((bloc) => {
  btn.addEventListener("click", function () {
    bloc.classList.toggle("active");
  });
}); */

let inputs = document.getElementsByClassName("form-control");
const data = {};
const infos = [];
let inputsLength = inputs.length;
for (let i = 0; i < inputsLength; i++) {
  inputs[i].addEventListener("keyup", function () {
    const id = inputs[i].id;
    const value = inputs[i].value;
    data[id] = value;
  });
}

const resetInputs = () => {
  for (let i = 0; i < inputsLength; i++) {
    inputs[i].value = "";
  }
};
//regex for email
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    (data.nom && data.prenom && data.email && data.message) ||
    regexEmail.test(data.email)
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
  infos.push(data);
  const result = document.getElementById("result");
  resetInputs();
  result.innerHTML = `
    <p>Prenom: ${data.prenom}</p>
    <p>Nom: ${data.nom}</p>
    <p>Email: ${data.email}</p>
    <p>Message: ${data.message}</p>
    `;
  console.log(infos);
});
