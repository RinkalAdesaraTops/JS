//To prevent callback hell - we can use promises or async-await functions.
const dispMsg = (i)=>{
    console.log("disp msg function called"+i);
}
let j=1;
const getMsg = (func)=>{
    setTimeout(()=>{
        func(j);j++;
        setTimeout(()=>{
            func(j);j++;
            setTimeout(()=>{
                func(j);j++;
                    setTimeout(()=>{
                        func(j);j++;
                    },700)
            },500) 
        },300)
    },200) 
}
//Get Display
getMsg(dispMsg)