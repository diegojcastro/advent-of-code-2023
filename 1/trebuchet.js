const fs = require('fs');

const rawData = fs.readFileSync('./1/data.txt', 'utf8').trim();
const rows = rawData.split('\n')

function isCharNumber(c) {
  return c >= '0' && c <= '9';
}

const firstInt = str => {
  for (const char of str) {
    if (isCharNumber(char)) {
      return (char)
    }
  }
}

const reverseString = str => {
  return str.split('').reverse().join('')
}

const parseRow = row => {
  const first = firstInt(row)
  const rev = reverseString(row)
  const second = firstInt(rev)

  return parseInt(first + second)
}

const sumRows = rows => {
  return rows.reduce((acc, row) => {
    return acc + parseRow(row)
  }, 0)
}

console.log(sumRows(rows))  