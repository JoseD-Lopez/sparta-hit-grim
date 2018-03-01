
	
	var bushes = document.querySelectorAll('.bush');
	var scoreBoard = document.querySelector('.score');
	var finished = document.querySelector('.final');
	var grims = document.querySelectorAll('.grim');
	var kittys = document.querySelectorAll('.kitty');
	
	var vidMut = document.getElementById("stopMusic");
	vidMut.addEventListener('click', stopMusicPl);
	var vidMut = document.getElementById("stopMusic1");
	vidMut.addEventListener('click', stopMusicPl);

	var start = document.getElementById('startGame');
	start.addEventListener('click', startGame);	
	var stop = document.getElementById('stopGame');
	stop.addEventListener('click', stopGame);

	var getShotSound = document.getElementById('shotgunAudio');
	getShotSound.addEventListener('click', playSound);

	var getKittySound= document.getElementById('kittyAudio');
	getKittySound.addEventListener('click', playKittySound);

	var getDemonSound = document.getElementById('demonAudio');
	getDemonSound.addEventListener('click', playDemonSound);

	var getScreamSound = document.getElementById('screamAudio');
	getScreamSound.addEventListener('click', playScreamSound);

	var getBombSound = document.getElementById('tickingTimeBombAudio');
	getBombSound.addEventListener('click', playBombSound);

	var lastBush;
	var timeup = false;
	var score = 0;
	var timerTime = 15000;



 function playSound() {
 
          getShotSound.play();
      }
 function playKittySound() {
 
          getKittySound.play();
      }
 function playDemonSound() {
 
          getDemonSound.play();
      }
 function playScreamSound() {
 
          getScreamSound.play();
      }
function playBombSound() {
 
          getBombSound.play();
      }

	function randomTime(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	} 

	function randomBush(bushes){
		var idx = Math.floor(Math.random() * bushes.length);
		var bush = bushes[idx];
		if(bush === lastBush){
			return randomHole(bushes);
		}
			lastHBush = bush;
			return bush;
	}

	function stopMusicPl(){
		var vid = document.getElementById("myVideo");
		vid.muted = true;

		var vid2 = document.getElementById("myVideo2");
		vid2.muted = true;

		var vid3 = document.getElementById("myVideo3");
		vid3.muted = true;

		playSound();
	}
	
	function startGame(){
		scoreBoard.textContent = 0;
		timeup = false;
		score = 0;
		peep();
		peep2();
		countdown();
		playSound();
		setTimeout(() => timeup = true, timerTime);
		if(score != 0){
			startGame();
		}
	}

	function countdown() {
		var seconds = document.getElementById('countdown').innerHTML;
		seconds = parseInt(seconds, 10);

	if (seconds < 0) {
  		var temp = document.getElementById('countdown');
  		temp.innerHTML = "all done, bye bye"; 
  		temp.innerHTML = 16;      	
  		return;
	}
	seconds--;
		temp = document.getElementById('countdown');
		temp.innerHTML = seconds;
		setTimeout(countdown, 1000);
		} 

	function stopGame(){
		timeup = true;
		playSound();
	}

	function peep(){
		var time = randomTime(20, 1600);
		var bush = randomBush(bushes); 
		bush.classList.add('up');
		setTimeout(() => {
			bush.classList.remove('up');
			if(!timeup){ 
			peep();
			}
			else{
				nameScore();
			}
		}, time);
	}

	function peep2(){
		var time = randomTime(20, 2000);
		var bush = randomBush(bushes); 
		bush.classList.add('up2');
		setTimeout(() => {
			bush.classList.remove('up2');
			if(!timeup) {
				peep2();
			}
		}, time);
	}

	function hit(e){
		if(!e.isTrusted) 
			return;
		score++;
		scoreBoard.textContent = score;
		playSound();
		playScreamSound();
		playDemonSound();

	}
	grims.forEach(grim => grim.addEventListener('click', hit));	
 
	function hit2(e){
		if(!e.isTrusted) return;
		score--;
		scoreBoard.textContent = score;
		playSound();
		playKittySound();
	}
	kittys.forEach(kitty => kitty.addEventListener('click', hit2));

	function nameScore(){	
		switchVisibleHeading();

		if(score <= 0){
			rslt2.innerHTML= nameDisplay + ': ' + 'The Innocent kittys ' + 'Your score : ' + score + '!';
		}
		else if(score > 0 && score <= 5){
			rslt2.innerHTML= nameDisplay + ': ' + 'No no no! practice! '+ 'Your score : ' + score + '!';
		}
		else if(score > 5){
			rslt2.innerHTML= nameDisplay + ': ' + 'Kickass! '+'Your score : ' + score + '!';
		}	
	}






