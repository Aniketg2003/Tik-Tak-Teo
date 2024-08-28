let box=document.querySelectorAll(".box");
let resetgame=document.querySelector(".reset");
let newbt=document.querySelector("#newbt");
let win=document.querySelector(".msg");
let winmsg=document.querySelector("#msgdis");

let play0=true;
let count=0;

const arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetga= () =>{
    play0=true;
    enablebtn();
    win.classList.add("hide");
    count=0;
};


box.forEach((boxs)=>{
   boxs.addEventListener("click",()=>{
    if(play0){
        boxs.innerText="O";
        play0=false;
    }else{
        boxs.innerText="X";
        play0=true;    
    }
    boxs.disabled=true;
    count++;
    let iswinner=checkwinner()
    if(count===9 && !iswinner){
        gamedraw();
    }
   }); 
});

const gamedraw=()=>{
      msgdis.innerText="Match is draw , No one wins";
      win.classList.remove("hide");

};



const disablebtn=() =>{
    for(let boxs of box){
        boxs.disabled=true;
    }
};

const enablebtn=() =>{
    for(let boxs of box){
        boxs.disabled=false;
        boxs.innerText="";
    }
};


const showWinner=(winner) => {
    winmsg.innerText=`Congratulation ,Winner is ${winner}`;
    win.classList.remove("hide");
    disablebtn();
};

const checkwinner =() => {
    for(let pattern of arr){
        let posval1=box[pattern[0]].innerText;
        let posval2=box[pattern[1]].innerText;
        let posval3=box[pattern[2]].innerText;


            
    if(posval1!=="" && posval2!=="" && posval3!==""){
        if(posval1===posval2 && posval2===posval3){
            showWinner(posval1);
        }
    }
    }
};

newbt.addEventListener("click",resetga);
resetgame.addEventListener("click",resetga);
