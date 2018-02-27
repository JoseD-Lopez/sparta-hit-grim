	
		
		const bushes = document.querySelectorAll('.bush');
		const scoreBoard = document.querySelector('.score');
		const finished = document.querySelector('.final');
		const grims = document.querySelectorAll('.grim');
		const kittys = document.querySelectorAll('.kitty');
		var vid = document.getElementById("myVideo");
	
  		var start = document.getElementById('startGame');
  		start.addEventListener('click', startGame);
  		var stop = document.getElementById('stopGame');
  		stop.addEventListener('click', stopGame);

		let lastBush;
		let timeup = false;
		let score = 0;
		let nameScoreArray = [];

		

		function randomTime(min, max) {
			return Math.round(Math.random() * (max - min) + min);
		} 

		function randomBush(bushes){
			const idx = Math.floor(Math.random() * bushes.length);

			const bush = bushes[idx];
		
			if(bush === lastBush){
				return randomHole(bushes);
			}
			lastHBush = bush;
			return bush;
		}

		function stopMusic(){
			vid.muted = true;
		}
	
     
		function startGame(){
			scoreBoard.textContent = 0;
			timeup = false;
			score = 0;
			peep();
			peep2();
			setTimeout(() => timeup = true, 10000);
			
		}
		function stopGame(){
			timeup = true;
		}

		function peep(){
			
			const time = randomTime(20, 1000);
			var bush = randomBush(bushes); 

			bush.classList.add('up');

			setTimeout(() => {
				bush.classList.remove('up');

				console.log(time);
				if(!timeup){ 
				peep();
				}
				else{
					nameScore();
				}
			}, time);
		}

			function peep2(){
			
			const time = randomTime(20, 2000);
			var bush = randomBush(bushes); 

			bush.classList.add('up2');

			setTimeout(() => {
				bush.classList.remove('up2');

				console.log(this);
				if(!timeup) peep2();
			}, time);
		}

		function hit(e){
			if(!e.isTrusted) 
				return;
			score++;
			scoreBoard.textContent = score;
		}

this.removeEventListener('click', hit);
		
		grims.forEach(grim => grim.addEventListener('click', hit));

		function hit2(e){
			if(!e.isTrusted) return;
			score--;
			scoreBoard.textContent = score;
		}
		kittys.forEach(kitty => kitty.addEventListener('click', hit2));


		function nameScore(){
			
		nameScoreArray = nameDisplay + " " + score;
		switchVisibleHeading();

		rslt2.innerHTML='Your Score is:' + nameScoreArray + '!';

		console.log(nameScoreArray);
			
		}






