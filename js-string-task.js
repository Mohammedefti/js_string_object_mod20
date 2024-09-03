// ------------------task 01 ---------------//
// let sum =0;
// let name = 'abir vai';

// for(let i=0;i<=name.length;i++){
//     if (name[i]== 'a') {
//         sum++;
//     }
// }
// console.log(sum);


// ------------------task 02 ---------------//
// let sum =0;
// let name = 'Hallo Bruder, RiyAd';

// for(let i=0;i<=name.length;i++){
//     if (name[i]== 'a' || name[i]=='A') {
//         sum++;
//     }
// }
// console.log(sum);




// ------------------task 03 ---------------//
// let ans = false;
// let string = 'Check whether a string contains all the vowels' ;
// string =string.toLowerCase();
// for(let i= 0;i<string.length;i++){
//     if (string[i]=='a' && 
//     string[i]=='e' && string[i]=='i' && string[i]=='o' && string[i]=='u'   ) {
//         ans = true;
//     }else{
//         ans = false;
//     }
// }
// console.log(ans);



// ------------------task 04 ---------------//

let string = "example with X and x";
let output = string.replace(/x/g, 'y').replace(/X/g, 'Y')

console.log(output)
