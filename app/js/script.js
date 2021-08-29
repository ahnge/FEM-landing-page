const btnHam = document.querySelector("#btnHam");
const header = document.querySelector(".header");
const overLay = document.querySelector(".overlay");
const oLayAndMenu = document.querySelectorAll(".onm");
const body = document.querySelector("body");
const funn = () => {
  header.classList.toggle("open");
  body.classList.toggle("noscroll");
  if (overLay.classList.contains("fade-in")) {
    oLayAndMenu.forEach((e) => {
      e.classList.add("fade-out");
      e.classList.remove("fade-in");
    });
  } else {
    oLayAndMenu.forEach((e) => {
      e.classList.add("fade-in");
      e.classList.remove("fade-out");
    });
  }
};
btnHam.addEventListener("click", () => {
  funn();
});
overLay.addEventListener("click", () => {
  funn();
});
