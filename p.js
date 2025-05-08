// intinite loops

/*for (let  i =1; i>0; i++ ){
    console.log("ths is  me");
};*/

// while loop

/*let l = 1;
while(l <= 5){
    l++;
    console.log("this is me");
};

let lp = 1;

while(lp <= 10){
    lp++;
    console.log("vokeyyy");
};

// dowhile loop
let i = 0;
do{
    console.log("heyyyy");
    i++;
}
while(i <= 15);

// string method

let str = "jaga";
newstr = str.toUpperCase;
console.log(newstr);

// loops in array

let marks = ["ths" , "is" , "me"];
for(let idx=0; idx <= marks.length; idx++){
    console.log("yooo")
}*/


//bom

let newbtn = document.createElement("button");

newbtn.innerText = "click me";

newbtn.style.backgroundColor = "red";

newbtn.style.color = "white";
console.log(newbtn);

let game = document.querySelector("body");

game.prepend(newbtn);
