const btn = document.querySelector(".btn");
const btn_over = document.querySelector(".btn_overlay");
const tip = document.querySelector(".tooltip");

btn.addEventListener("click", (e) => {
  tip.classList.toggle("active");
});

btn_over.addEventListener("click", (e) => {
  tip.classList.remove("active");
});
