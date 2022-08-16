let blocs = document.getElementsByClassName("bloc");
let btn = document.getElementById("btn");
let blocsLength = blocs.length;
for (let i = 0; i < blocsLength; i++) {
  btn.addEventListener("click", function () {
    blocs[i].classList.toggle("active");
  });
}
