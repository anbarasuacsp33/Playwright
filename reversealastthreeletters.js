// function reverseLastThreeLetters(sentence) {
//   // Split the sentence into words

//   const words = sentence.split(' ');

//   const modifiedWords = words.map(word => {

//     if (word.length < 3) return word; // Leave short words unchanged

//     const front = word.slice(0, -3);         // All except last 3 letters
//     const lastThree = word.slice(-3).split('').reverse().join(''); // Reverse last 3 letters
//     return front + lastThree;


//   });

//   // Join the modified words back into a sentence

//   return modifiedWords.join(' ');


// }

// // Example usage:
// const input = "Hello world again";
// const output = reverseLastThreeLetters(input);
// console.log(output); // Helol woldr agian



function reverseLastThreeChars(sentence) {
    let words = sentence.split(" ");


    function reverseLast3(word) {

        if (word.length <= 3) return word;  

        
        let head = word.slice(0, -3);       // everything except last 3
        let tail = word.slice(-3).split('').reverse().join(''); // reverse last 3

        return head + tail;
        
    }

  
    if (words.length >= 4) {
        words[3] = reverseLast3(words[3]); // "world"
    }
    if (words.length >= 6) {
        words[5] = reverseLast3(words[5]); // "javascript"
    }

    return words.join(" ");
}

let g = 'I am in world of javascript';
let h = reverseLastThreeChars(g);

console.log(h);
