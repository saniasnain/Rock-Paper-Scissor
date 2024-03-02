let userScore=0;
let compScore=0;

const symbols= document.querySelectorAll(".symbols");
const msg = document.querySelector(".msg");
const yourScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#comp-score");

const genCompSymbol = ()=>{
    const option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame = () =>{
    msg.innerText = "Draw. Try Again";
    msg.style.backgroundColor= "black";
};

const showWinner = (userWin, userSymbol, compSymbol)=>{
    if(userWin){
        userScore++;
        yourScore.innerText = userScore;
        msg.innerText = `Congratulations! Your ${userSymbol} beats computer's ${compSymbol}`;
        msg.style.backgroundColor= "green";
    }else{
        compScore++;
        computerScore.innerText = compScore;
        msg.innerText = `ALAS! computer's ${compSymbol} has beaten your ${userSymbol}`;
        msg.style.backgroundColor= "red";
    }
};

const playGame =(userSymbol)=>{
    const compSymbol = genCompSymbol();
    console.log( "computer chose :", compSymbol );
    console.log("user chose: ", userSymbol);
    if(userSymbol === compSymbol){
        drawGame();
    }else{
        let userWin = true;
        if( userSymbol === "rock"){
            userWin = compSymbol ==="paper"? false:true;
        }else if( userSymbol === "paper"){
            userWin = compSymbol === "scissor" ? false: true; 
        }else{
            userWin = compSymbol === "rock" ? false: true;
        }
        showWinner(userWin, userSymbol,compSymbol);
        console.log(userWin);
    }
};

symbols.forEach((symbol)=>{
    symbol.addEventListener("click",()=>{
        const userSymbol = symbol.getAttribute("id");
        playGame(userSymbol);
    })
})