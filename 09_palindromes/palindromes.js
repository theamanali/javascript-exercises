const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'

    let stringArray = string.toLowerCase().split('');
    stringArray = stringArray.filter(char => alphanumerical.includes(char))
    string = stringArray.join('');

    let endIndex = string.length - 1;

    for (let i = 0; i < string.length; i++, endIndex--) {
        if (string[i] !== string[endIndex]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
