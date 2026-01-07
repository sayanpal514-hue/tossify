let rotation = 0;
let isFlipping = false;

function flipCoin() {
  if (isFlipping) return; 

  isFlipping = true;
  const coin = document.getElementById("coin");

  const isHead = Math.random() < 0.5;

  
  const spins = Math.floor(Math.random() * 5) + 3;

 
  rotation += spins * 360 + (isHead ? 0 : 180);

  coin.style.transform = `rotateY(${rotation}deg)`;

  
  setTimeout(() => {
    isFlipping = false;
  }, 1000); 
}
