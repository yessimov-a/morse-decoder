const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
const numberRegExp = /(-----)|(----\.)|(---\.\.)|(--\.\.\.)|(-\.\.\.\.)|(\.\.\.\.\.)|(\.\.\.\.-)|(\.\.\.--)|(\.\.---)|(\.----)/g;
function decode(expr) {
    return expr.replace(/10|11/g, (item) => {
        if (item == 10) {
            return '.'
        } else {
            return '-'
        }
    }).replace((/(\.|-)+|0|\*\*\*\*\*\*\*\*\*\*/g), (item) => {
        if (item == 0) {
            return ''
        } else if (item == '**********') {
            return ' '
        } else if (numberRegExp.test(item)) {
            let letter = item.slice(0, Math.trunc(item.length / 5) * 5 * -1);
            if (letter.length > 0) {
                return MORSE_TABLE[letter] + item.slice(letter.length).replace(numberRegExp, value => MORSE_TABLE[value]);
            } else {
                return item.replace(numberRegExp, value => MORSE_TABLE[value]);
            }
        } else {
            return MORSE_TABLE[item]
        }
    })
}

module.exports = {
    decode
}