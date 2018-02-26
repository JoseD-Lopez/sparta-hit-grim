
  var myh3 = document.getElementById("results");
  var myh2 = document.getElementById("results2");
  var word  = document.getElementById("inputname");
  var div1 = document.getElementById('initpage'),
  div2 = document.getElementById('gamecontainer');

  const bushes = document.querySelectorAll('.bush');
  var scoreBoard = document.querySelector('.score');
  const finished = document.querySelector('.final');
  const grims = document.querySelectorAll('.grim');

  var start = document.getElementById('startGame');
  start.addEventListener('click', startGame);
  var stop = document.getElementById('stopGame');
  stop.addEventListener('click', stopGame);
  var 


  var nameDisplay = "";


		function randomTime(min, max) {
			return Math.round(Math.random() * (max - min) + min);
		} 

		function randomBush(bushes){
			const idx = Math.floor(Math.random() * bushes.length);

			const bush = bushes[idx];
			if(bush === lastHole){
				return randomHole(holes);
			}
			lastHBush = bush;
		}


function switchVisible() {
  if(!initpage) return;
  if (getComputedStyle(div1).display == 'block') {
    initpage.style.display = 'none';
    gamecontainer.style.display = 'block';
  } else {
    initpage.style.display = 'block';
    gamecontainer.style.display = 'none';
  }
}
document.getElementById('Button1').addEventListener('click', switchVisible);



document.querySelector('form.wordform').addEventListener("submit", function(event){
   event.preventDefault();
   nameDisplay = word.value;
   sendname(nameDisplay);
   sendname2(nameDisplay);
   word.value="";
		 });


function sendname(message){

	myh3.innerHTML='Spartan! '+ message +' Get ready to meet the Grim!';
}

function sendname2(message){

	myh2.innerHTML='Attack ' + message + '!';
  
}


