// Problem No 1

function mindGame(x){
    // Checking for certain data type
    if(typeof(x)=="string"){
        let errorMsg= "input number is not Number";
        return errorMsg;
    }
    else{
        let mult=x*3;
        let add=mult+10;
        let div=add/2;
        let sub=div-5;
        return sub;
    }
    // In here we use the fuction for several arithmetic work like adding, substratcting, multiplication, dividing;
}

// Problem No 2

function evenOdd(str){
    
    if(typeof(str)=="string"){
        if(str.length%2 == 0){
            return "even";
        }
        else{
            return "odd";
        }
    }
    else{
        let errorMsg="input must be string";
        return errorMsg;
    }
    // In this function we check the parameter of evenOdd function,if the parameter is string  only then the funtion continue , when the data type is assured it will check the inputted string's character and show in even or odd in output 
}

// Problem No 3

function isLGSeven(x){
    if(typeof(x)=="string"){
        return "Input should be number";
    }
    else{
    const y=7;
    let gap= x-y;
    if(gap < y){
        return gap;
    }
    else{
        let a= x*2;
        return a;
    }
    }
    // In this function we do some arithmetic work and also check the data type to ensure the desired data type
} 

// Problem No 4

function findingBadData(arr) {
    let sum=0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            sum= sum +1;
        }
    }
    return sum;

    // In this function we input an arrays of data, if there a negative value among the array's datas,then we will count them and show the sum of the total negative data we have in our input array as like if the input array got 2 negatiove data then the output will be 2
}

// Problem No 5

function gemsToDiamond(a,b,c){
    if(typeof(a)!=="string" && typeof(b)!=="string" && typeof(c)!=="string"){
        let diaA= a*21;
        let diaB=b*32;
        let diaC=c*43;
        let totalDiamond= diaA+diaB+diaC;
        if(totalDiamond>1000*2){
            let restOfDiamond =totalDiamond-2000;
            return restOfDiamond;
        }
        else{
            return totalDiamond;
        }

    }
    else if(typeof(a)=="string" || typeof(b)=="string" || typeof(c)=="string"){
        return "Input must be numbers";
    }
// in this function we convert the gem to diamond and implified the rules that was set by the question
}

