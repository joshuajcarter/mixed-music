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
  const year = Number(document.getElementById('year').value);
  let icon = document.getElementById("icon")
  let randomItemContent = document.getElementById("random-item");
  if (icon.style.display == "none" && randomItemContent.style.display === "block"){
  icon.style.display = "block"; randomItemContent.style.display = "none"
  };
  icon.classList.add("fa-shake");
  setTimeout(() => {
    let randomItem = getRandomItem(year);
    randomItemContent.innerHTML = randomItem;
    icon.classList.remove('fa-shake');
    icon.style.display = 'none'
    randomItemContent.style.display = 'block'
  }, 1700);
});
