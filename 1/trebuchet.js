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

//console.log(sumRows(rows))  //55621
const names = {
  one: 'one',
  two: 'two',
  three: 'three',
  four: 'four',
  five: 'five',
  six: 'six',
  seven: 'seven',
  eight: 'eight',
  nine: 'nine',
}

const revNames = {
  one: 'eno',
  two: 'owt',
  three: 'eerht',
  four: 'ruof',
  five: 'evif',
  six: 'xis',
  seven: 'neves',
  eight: 'thgie',
  nine: 'enin',
}

const convertToNum = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
}

const firstCharacter = (str, mode = 'forward') => {
  let firstIndex = -1;
  let firstChar = '';
  const list = mode === 'forward' ? names : revNames
  for (const num in list) {
    if (str.indexOf(list[num]) > -1) {
      if (firstIndex === -1 || str.indexOf(list[num]) < firstIndex) {
        firstIndex = str.indexOf(list[num])
        firstChar = convertToNum[num]
      }
    }
  }

  const firstInteger = firstInt(str)
  if (firstInteger === undefined) {
    return firstChar
  }
  const firstIntIndex = str.indexOf(firstInteger)

  if (firstIndex === -1) {
    return firstInteger
  } else {
    if (firstIntIndex < firstIndex) {
      return firstInteger
    } else {
      return firstChar
    }
  }
}

const parseRow2 = row => {
  console.log(row)
  const first = firstCharacter(row)
  const rev = reverseString(row)
  const second = firstCharacter(rev, 'reverse')

  const num = parseInt(first + second)
  console.log(num)
  return num
}

const sumRows2 = rows => {
  return rows.reduce((acc, row) => {
    return acc + parseRow2(row)
  }, 0)
}

console.log('second try:')
console.log(sumRows2(rows))  //Tried 67322 and that was wrong

// console.log(firstCharacter('enin1owt', 'reverse'))
