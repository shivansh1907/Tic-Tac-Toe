let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset")
let newgamebtn=document.querySelector("#new-btn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turno= true;  //player x,player 7
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [3,4,6]
];



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turno){
            box.innerText="O"
            turno=false;
        }else{
            box.innerText="X"
            turno=true;
        }
        box.disabled=true;

        checkwinner();
    })

   
})

const showwinner=(winner)=>{
    {
        msg.innerText=`congrats,winner is ${winner}`
        msgcontainer.classList.remove("hide")
    }

}

const checkwinner=()=>{
    for(pattern of winpatterns){
        // console.log(pattern)
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        console.log(pos1val)
        console.log(pos2val)
        console.log(pos3val)


        if(pos1val != "" &&  pos2val != "" && pos3val !="")  {
            if(pos1val===pos2val  &&  pos2val===pos3val){
                console.log("winner")
                showwinner(pos1val)
            }
        }
       
    }


   boxes.forEach((box)=>{
    resetbtn.addEventListener("click",()=>{
        box.innerText=""
        box.computedStyleMap.background-color:white
    })
   })
    
       
}



    
    
