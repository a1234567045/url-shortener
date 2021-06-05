function sample(array) {
  const index = MAth.floor(Math.random() * array.length)
  return array[index]
}


function getShortLink() {

  //define condition, remove 'o', 'O, '0', 'l', '1' easy to confuse
  const lowerCaseLetters = 'abcdefghijkmnpqrstuvwxyz'
  const upperCaseLetters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ'
  const numbers = '23456789'

  //create a container
  let container = []
  container = container.concat(lowerCaseLetters.split(''))
  container = container.concat(upperCaseLetters.split(''))
  container = container.concat(numbers.split(''))

  //Draw five numbers
  let shortlink = ''
  for (let i =0 ; i < 5; i++){
    shortlink += sample(container)
  }
  return shortlink
}

module.exports = getShortLink