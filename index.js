const {collection} = require('./mocks')

// helper filters collection by release year
function getAllReleases(num) {
  let res = collection.filter((el) => el.Released === num);
  return res
}

// create index.html onload input instruction
function getYearRange(arr) {
  let range = []
  arr.forEach(el =>  {if (el.Released > 0) range.push(el.Released)})
  range.sort()
  let rangeStart = range[0];
  let rangeEnd = range[range.length - 1];
  return `Pick a year between ${rangeStart} - ${rangeEnd}`
}

// executed on index.html button click
function getRandomItem(num) {
  let res = getAllReleases(num)
  let random = res[Math.floor(Math.random() * res.length)];
  console.log(`Here's a selection from ${num}`)
  return { Artist: random.Artist, Title: random.Title }
}

console.log(getYearRange(collection))
console.log(getRandomItem(1988))
