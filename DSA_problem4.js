// WAP to find 2nd largest number in an array 

let arr = [4,9,2,9,7,1,8];

function secondLargest(arr){
    let largest = -Infinity;
    let secondLarge = -Infinity;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > largest){
            secondLarge = largest;
            largest = arr[i];
        }
        else if( arr[i] > secondLarge && arr[i] != largest ){
            secondLarge = arr[i];
        }
        
    }
    return secondLarge;
}

let result = secondLargest(arr);
console.log(result);