const sentence='I am learning Web Dev.'
// // const result = '.veD bew gninrael ma I '

// let reverse = ' ';
// for(const letter of sentence){
//     // console.log(letter);
//     reverse = letter + reverse;
// }
// console.log(reverse);



// second way to reverse String;

let rev='';
for(let i = 0;i<sentence.length;i++){
    // console.log(i);  //check index;
    // console.log(sentence[i]); //to print all letter
    const letter = sentence[i];
    rev = letter +rev;
}
// console.log(rev);



// shortcut;
const reversed = sentence.split('').reverse().join('');
console.log(reversed);