// import mocks  from 'mocks.js'
const {collection} = require('./mocks')

// console.log(mocks)
function getAllReleases(num) {
  let res = mocks.filter((el) => el.Released === num);
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
  let res = getAllReleases(num)
  let random = res[Math.floor(Math.random() * res.length)];
  return { Artist: random.Artist, Title: random.Title }
}

// console.log(getAllReleases(1997).length)
// console.log(getRandomItem(1997))
console.log(getYearRange(collection))
// console.log(mocks[0])