let humanScore=0, computerScore=0;
function getComputerChoice(){const c=["rock","paper","scissors"];return c[Math.floor(Math.random()*3)];}
function playRound(human,computer){
  let msg="";
  if(human===computer) msg=`Draw! Both ${human}`;
  else if((human==="rock"&&computer==="scissors")||(human==="paper"&&computer==="rock")||(human==="scissors"&&computer==="paper")){msg=`You WIN! ${human} beats ${computer}`;humanScore++;}
  else{msg=`You LOSE! ${computer} beats ${human}`;computerScore++;}
  document.getElementById("result").textContent=msg;
  document.getElementById("score").textContent=`You: ${humanScore} | Computer: ${computerScore}`;
  if(humanScore===5||computerScore===5){
    setTimeout(()=>{
      alert(humanScore===5?"🏆 CHAMPION MUSA! You won 5!":"💻 Computer wins! Try again!");
      humanScore=0;computerScore=0;
      document.getElementById("score").textContent=`You: 0 | Computer: 0`;
      document.getElementById("result").textContent="Choose your weapon!";
    },100);
  }
}
document.getElementById("rock").onclick=()=>playRound("rock",getComputerChoice());
document.getElementById("paper").onclick=()=>playRound("paper",getComputerChoice());
document.getElementById("scissors").onclick=()=>playRound("scissors",getComputerChoice());
