import { getAllReleases, getYearRange, getRandomItem } from "./index.js";
import collection from "./mocks.js";

window.addEventListener('load', () => {
  console.log("page is fully loaded");
  let yearRange = getYearRange(collection);
  document.getElementById("yearRange").innerHTML = yearRange;
});

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log('clicked');
  const year = Number(document.getElementById('year').value)
  console.log(year)
  let randomItem = getRandomItem(year);
  document.getElementById("random-item").innerHTML = randomItem
});