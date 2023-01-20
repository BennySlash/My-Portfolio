const btn = document.querySelector(".nav-toggle");
const navLink = document.querySelectorAll(".nav__link");

btn.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
