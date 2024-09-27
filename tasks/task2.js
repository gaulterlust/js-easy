// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  const strArray = str.split('')
  const strArrayReverse = strArray.reverse()
  const numbers = '0123456789'
  let result = ''

  for (let i = 0; i < strArrayReverse.length; i++) {
      if (!numbers.includes(strArrayReverse[i])) {
          result += strArrayReverse[i]
      }
  }
  console.log(result)
  return result
}
reverseWithoutNumbers('dlrowolleh')
reverseWithoutNumbers('abc123xyz')

module.exports = reverseWithoutNumbers;