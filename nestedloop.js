var readlineSync=require("readline-sync");
 var num = readlineSync.question("enter loop:");
 for(let i=1;i<=num;i++){
    let strng=""
    for(let j=1;j<=i;j++){
        strng=strng+j;
    }
    console.log(strng)
 }