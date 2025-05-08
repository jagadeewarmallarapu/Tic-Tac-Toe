let check = document.querySelector(".draw");


const checkdraw = () =>{
    for ( let draw of winpattens) {
        let drawpos1Val = boxes [draw[0]].innerText; 
        let drawpos2Val= boxes  [draw[1]].innerText;
        let drawpos3Val = boxes [draw[2]].innerText ;
        let drawpos4Val= boxes [draw[3]].innerText;
        let drawpos5Val= boxes [draw[4]].innerText;
        let drawpos6Val = boxes [draw[5]].innerText;
        let drawpos7Val= boxes [draw[6]].innerText;
        let drawpos8Val = boxes [draw[7]].innerText;
        let drawpos9Val = boxes [draw[8]].innerText;

        if(drawpos1Val != drawpos2Val && drawpos2Val != drawpos3Val && drawpos3Val != drawpos4Val && drawpos4Val != drawpos5Val && drawpos5Val != drawpos6Val  && drawpos6Val != drawpos7Val && drawpos7Val != drawpos8Val && drawpos8Val != drawpos9Val){
            showdraw();
        }

    }
}

