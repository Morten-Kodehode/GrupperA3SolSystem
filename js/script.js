// script
import planets from "./data.js";

const planet = document.querySelectorAll(".planetName");
const title = document.querySelector("#title");
const planetImg = document.querySelector("#planet-img");
const desc = document.querySelector("#desc");

planet.forEach((element, index) => {
  element.addEventListener("click", () => {
    title.textContent = planets[index].name;
    planetImg.src = planets[index].image;
    desc.textContent = planets[index].info;
  });
});
