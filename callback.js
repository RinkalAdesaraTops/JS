//function declared as a variable is Called High order functions
//High order functions we can use in following functions:
// map,filter,reduce,reduceRight
const isEven = (no)=>{
    return no%2==0;
}
//callback function
const dispMsg = (func,no)=>{
    let ans = func(no);
    console.log("Even no is "+ans);
}

dispMsg(isEven,25);