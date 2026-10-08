function getComputerChoice(){const c=["rock","paper","scissors"];return c[Math.floor(Math.random()*3)];}
function getHumanChoice(){let ch=prompt("Type rock, paper, or scissors:").toLowerCase();return ch;}
function playRound(h,c){if(h===c)return"Draw! Both "+h;if((h==="rock"&&c==="scissors")||(h==="paper"&&c==="rock")||(h==="scissors"&&c==="paper"))return"You WIN! "+h+" beats "+c;else return"You LOSE! "+c+" beats "+h;}
function playGame(){let hs=0,cs=0;for(let i=0;i<5;i++){const h=getHumanChoice();const c=getComputerChoice();const r=playRound(h,c);console.log(r);if(r.includes("WIN"))hs++;if(r.includes("LOSE"))cs++;}console.log(`FINAL - You:${hs} Computer:${cs}`);if(hs>cs)console.log("CHAMPION MUSA!");else if(hs<cs)console.log("Computer wins!");else console.log("Tie!");}
console.log("Type playGame() and press Enter to start!");
