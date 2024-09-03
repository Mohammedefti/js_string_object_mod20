const school = 'Raj Uk Uttara Model School';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());


const subject = 'Chemistry';
const book = 'chemistry';

if (subject.toLowerCase() === book.toLowerCase()) {
    console.log('I am reading book aibar exam e fati flebo');
}
else{
    console.log('Vat khawar jonno bosi thakbo');
}

const drink = 'water';
const khamu  = 'water ';
if (drink.trim() == khamu.trim()) {
    console.log('Panir Opor nam jibon');
}else{
    console.log('Somudre Onk pani');
}