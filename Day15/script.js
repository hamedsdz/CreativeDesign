const TwitterCounter = document.getElementById('counter1')
const UTubeCounter = document.getElementById('counter2')
const FacebookCounter = document.getElementById('counter3')

let counter1 = 0
let counter2 = 0
let counter3 = 0

setTimeout(() => {
  const twitterInterval = setInterval(() => {
    counter1 += 60
    TwitterCounter.innerText = counter1
    if (counter1 >= 12000) {
      clearInterval(twitterInterval)
    }
  }, 5)
}, 1)

setTimeout(() => {
  const UtubeInterval = setInterval(() => {
    counter2 += 25
    UTubeCounter.innerText = counter2
    if (counter2 >= 5000) {
      clearInterval(UtubeInterval)
    }
  }, 5)
}, 1)

setTimeout(() => {
  const FacebookInterval = setInterval(() => {
    counter3 += 37.5
    FacebookCounter.innerText = Math.ceil(counter3)
    if (counter3 >= 7500) {
      clearInterval(FacebookInterval)
    }
  }, 5)
}, 1)
