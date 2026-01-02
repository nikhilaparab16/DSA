// WAP to check number is even or odd
// TIP -- if num is divide by 2 .. result is 0 use numb % 2

function checkEvenOdd(num){
    let rem = num % 2;
    if(rem == 0){
        console.log("Number is Even")
    }else{
        console.log("Number is odd")
    }
}

checkEvenOdd(2);
checkEvenOdd(12);
checkEvenOdd(9);
checkEvenOdd(5);


//WAP to print even or odd number from array 

let arr= [1,3,6,11,-4,0,-11];
for(let i =0; i< arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i] + "is even number");
    }
    else if(arr[i] % 2 == 1){
        console.log(arr[i] + "is odd number");
    }
    else{
        console.log(arr[i] + "is invalid number");
    }
}