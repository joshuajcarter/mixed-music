import collection from "./mocks.js";

// helper filters collection by release year
function getAllReleases(num) {
  let res = collection.filter((el) => el.Released === num);
  return res
}

function getYearRange(arr) {
  let range = []
  arr.forEach(el =>  {if (el.Released > 0) range.push(el.Released)})
  range.sort()
  let rangeStart = range[0];
  let rangeEnd = range[range.length - 1];
  return `Pick a year between ${rangeStart} - ${rangeEnd}`
}

function getRandomItem(num) {
  if (typeof (num) != Number && num.toString().length != 4) {
    window.alert('Please enter a year YYYY')
  } else {
    let res = getAllReleases(num)
    let obj = {
      Artist: '',
      Title: ''
    }
    let random = res[Math.floor(Math.random() * res.length)];
    console.log(`Here's a selection from ${num}`)
    obj.Artist = random.Artist;
    obj.Title = random.Title;
    return `Here's a selection from ${num}<br>Artist: ${obj.Artist}<br> Title: ${obj.Title} `;
  }
}
// TODO handle undefined on invalid input

export { getAllReleases, getYearRange, getRandomItem };
