// Write a function to count the negative numbers in an array


function countNegative(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            count = count + 1;
        }
    }
    return count;
}

let arr = [2,-10,-23,-3,-6,0];
let result = countNegative(arr);
console.log(result);
