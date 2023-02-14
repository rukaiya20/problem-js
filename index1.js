// problem 1
// ===================>

function mindGame(Operators) {
    if(typeof Operators !== 'number'){
        return 'error !! Please enter a number'
    }
    let number = 5;
        number *= 3;
        number += 10;
        number /= 2;
    let subtraction  = number - Operators;
        return subtraction;
    
}

const output = mindGame(5);
console.log(output);


// Description of this problem1 :-
//  I took a number and multiplied that number by 3, then added 10, then divided by 2, then subtracted 5, returning the minus result.

// ===================================================>

// problem 2
// ===================>
function evenOdd(string) {
    let remainder  = string.length % 2 ;
    if ( typeof string !== 'string'){
        return 'please enter a string !!';
    }
    else if(remainder === 0){
        return "even";
    }
    else{
        return "odd" ;
 }
}
const my_stringEven_or_Odd =evenOdd('chatgpt')
console.log(my_stringEven_or_Odd);
 
// Description of this problem 2 :- 
// I have taken a String and returned the output 'even' or 'odd' based on the total number of characters in it.
// ===================================================>
 

/// problem 3
// ===================>

function isLGSeven(greaterThan_or_lessThan) {
    let input = 6;
    let sum = input - greaterThan_or_lessThan ;
    if(typeof input !== 'number' || typeof greaterThan_or_lessThan !== 'number'){
        return 'please enter a number !!'
    }
    else if( sum > greaterThan_or_lessThan){
        let sums = input * 2;
        return sums;
    } 
    else ( sum < greaterThan_or_lessThan);{
        return sum;
     }     
}

const isLg = isLGSeven(7);
console.log(isLg);

// Description of this problem1 :-
//  I have taken an input value with 7 differences. Since this difference is smaller than 7 I return minus. Since the difference is greater than 7, I return twice the input.
// ===================================================>

// problem 4
// ===================>

function findingBadData(count_positiveNegative){
    let count = 0;
    
    if (Array.isArray(count_positiveNegative) == false){return 'error !! please enter a array'};
    for ( let i = 0; i < count_positiveNegative.length; i++) {
        const element = count_positiveNegative[i];
       if (element < 0)count++; 
    }
    return count; 
    
     }

let results = findingBadData([2, -5, -7, -13,]);
console.log(results);


// Description of this problem1 :-
//  I took an array as input. There are some numbers in the array, if those numbers are negative, I return them as output.
// ===================================================>


// problem 5
// ===================>
function gemsToDiamond(first,second,third) {

    let total_gems = (first * 21) + (second * 32) + (third * 43);


    if( typeof first !== "number" || typeof second !== 'number' || typeof third !== 'number'){
        return 'Please enter a number !!'

    }

    else if( total_gems < 2000){
        return total_gems;
    }

    else  ( total_gems > 2000);{
        total_gems = total_gems - 2000;
         return total_gems;
    } 
   
}
const total_diamond = gemsToDiamond( 1, 1 ,1);
console.log(total_diamond);

// Description of this problem1 :-
//  I took three numbers (my 3 friend gem numbers) as input. Then I added the gems of all my friends to get the total number of diamonds. If the total number of diamonds is more than 1000, then after subtracting 2000 from the total diamonds, I return the remaining diamonds. But if the total number of diamonds is less than 2000 then I have returned it.

// ===================================================>