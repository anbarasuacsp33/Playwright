// Use a logic

function reversestring(str){

    let reversed ='';

    for(let i=str.length-1;i>=0;i--){
        reversed +=str[i];
    }
    return reversed;
}

console.log(reversestring('Hello Karthik'))

// Use predefined method

function reversestring(str){
    return str.split('').reverse().join('');

}

const inputstring = 'Hello Karthik';
const outoutstring =reversestring(inputstring);

console.log(outoutstring);
