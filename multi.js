var readlineSync=require("readline-sync");
 var n = readlineSync.question("enter a number");

for(let i=1;i<10;i++){
    console.log(i,"*",10,"=",i*10)
}