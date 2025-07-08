let btns = document.querySelectorAll(".btn");
let chgBtn=document.querySelectorAll(".chgBtn");
let newGameBtn=chgBtn[0];
let resetBtn=chgBtn[1];
let div=document.querySelector(".hide");
let turnX=true;
let cnt=0;

let winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

div.classList.remove("hide");

const disableAll=()=>{
    for(btn of btns) btn.disabled=true;
}

const enableAll=()=>{
    for(btn of btns){
        btn.disabled=false;
        btn.innerText="";
        btn.style.backgroundColor="white";
    }
}

const showWinner=(msg)=>{
    div.classList.add("hide");
    div.innerText=`Winner is ${msg}`;
}

const checkDraw=()=>{
    if(cnt===9) {
        div.classList.add("hide");
        div.innerText=`We have a draw`;
    }
}

const checkWinningPattern=()=>{
    for(pattern of winningPattern){
        let val1=btns[pattern[0]].innerText;
        let val2=btns[pattern[1]].innerText
        let val3=btns[pattern[2]].innerText
            if(val1!="" && val1 === val2 && val2 === val3){
                btns[pattern[0]].style.backgroundColor = "#caf0f8";
                btns[pattern[1]].style.backgroundColor = "#caf0f8";
                btns[pattern[2]].style.backgroundColor = "#caf0f8";
                console.log(`winner ${val1}`);
                showWinner(val1);
                disableAll();
            }
    }
}

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log("button was clicked");
        cnt++;
        if(turnX) {
            btn.innerText="X";
            turnX=false;
        }
        else {
            btn.innerText="O";
            btn.style.color="#bc6c25"
            turnX=true;
        }
        btn.disabled=true;
        checkDraw();
        checkWinningPattern();
    })
})

resetBtn.addEventListener("click",()=>{
    enableAll();
    turnX=true;
    div.innerText="";
    cnt=0;
})

newGameBtn.addEventListener("click",()=>{
    enableAll();
    turnX=true;
    div.innerText="";
    cnt=0;
})

console.dir(resetBtn);


