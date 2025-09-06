function reverseAThirdWrd(sentence) {
    let words = sentence.split(' ');

    if (words.length >= 3) {
        words[2] = words[2].split('').reverse().join(''); // Join with empty string to avoid commas
    }

    return words.join(' ');
}

let input = 'I am in woorld of javaacript';
let output = reverseAThirdWrd(input);

console.log(output);
