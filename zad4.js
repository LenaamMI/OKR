const numbers = [2, 4, 6, 7, 9, 10, 12, 14, 15, 17];
const result = {};

for (let num of numbers) {
    let remainder = num % 3;
    
    if (result[remainder] === undefined) {
        result[remainder] = [];  
    }
    
    result[remainder].push(num); 
}
console.log(result);