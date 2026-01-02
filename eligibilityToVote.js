// WAP to check whether a person is eligible to vote or not

function eligibletoVote(age){
    if(age < 0){
        console.log("Invalid Input");
    }
    else if(age < 18){
        console.log("Not Eligible to Vote");
    }
    else{
        console.log("Eligible to Vote");
    }
}

eligibletoVote(0);
eligibletoVote(-7);
eligibletoVote(19);
eligibletoVote(20);