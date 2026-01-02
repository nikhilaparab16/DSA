// Write a function to check when the number is present in an array , is yes then return an index of an array else return -1


function checkIndex(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == num){
            return i;
        }
    }
    return -1;
}
let arr = [2,9,0,6,1];
let result = checkIndex(arr, -1);
console.log(result);
