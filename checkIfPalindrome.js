let string = 'asdfghjklkjhgfdsa'
let newString = ''

let len = string.length

for (let i = len - 1; i >= 0; i--) {
    newString += string[i]
}

if (string === newString) {
    console.log(string + ' is a palindrome')
} else {
    console.log(string + ' is no palindrome')
}