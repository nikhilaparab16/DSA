// Write a function to find the largest number in an array 

let arr = [7,10,0,4,20,9];

function findLargest(arr){
    let largest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

let result = findLargest(arr);
console.log(result);