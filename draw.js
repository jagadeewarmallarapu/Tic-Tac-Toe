let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let draw = document.querySelector(".draw");

let trun0 = true;

const winpattens = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    trun0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        if(trun0) {
            box.innerText = "0";
            trun0 = false;
        } else{
            box.innerText = "x";
            trun0 = true
        }
         box.disabled = true;

        checkWinner ();
        checkdraw();
    });
});

const enableBoxes = () =>{
    for(let box of boxes){
        box.enableBoxes = false;
        box.innerText ="";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `congratutation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    enableBoxes();
    
};


const checkWinner = () =>{
    for( let Pattern of winpattens ) {
       let pos1Val = boxes [Pattern [0]].innerText; 
       let pos2Val = boxes [Pattern[1]].innerText;
       let pos3Val = boxes [Pattern[2]].innerText;

       if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val) { 

                
                showWinner(pos1Val);
                checkdraw();
         
            }
        }
    }  
};

newGame.addEventListener("click" , resetGame);
reset.addEventListener("click" , resetGame);

// draw


const checkdraw = () =>{
    for(let draw of winpattens){
        let drawpos1Val= boxes 
        let drawpos2Val= boxes 
        let drawpos3Val = boxes 
        let drawpos4Val= boxes 
        let drawpos5Val= boxes 
        let drawpos6Val = boxes 
        let drawpos7Val= boxes 
        let drawpos8Val = boxes 
        let drawpos9Val = boxes 

         if(drawpos1Val != "" && drawpos2Val != "" && drawpos3Val != ""){// && drawpos4Val != "" && drawpos5Val != "" && drawpos6Val != "" && drawpos7Val != "" && drawpos8Val != "" && drawpos9Val != ""){
            if(drawpos1Val != drawpos2Val && drawpos2Val != drawpos3Val && drawpos3Val != drawpos4Val && drawpos4Val != drawpos5Val && drawpos5Val != drawpos6Val  && drawpos6Val != drawpos7Val && drawpos7Val != drawpos8Val && drawpos8Val != drawpos9Val){
            showdraw();
            }
        }
    }
}

const showdraw = (draw) =>{
    msg.innerText = `congratutation, winner is ${draw}`;
    msgContainer.classList.remove("hide");
    enableBoxes();
    
};

