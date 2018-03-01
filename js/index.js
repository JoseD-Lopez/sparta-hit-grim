
	  var myh3 = document.getElementById("results");
	  var myh2 = document.getElementById("results2");
	  var word  = document.getElementById("inputname");
	  var div1 = document.getElementById('initpage'),
	  div2 = document.getElementById('gamecontainer');
	  var hnd1 = document.getElementById('heading'),
	  rslt2 = document.getElementById('headingResult');
	  var instruct = document.getElementById('instructions'),
	  nameIntro = document.getElementById('penetername');
	  var nameDisplay = "";

	function switchInstructVisible() {
	  if(!initpage) return;
	  if (getComputedStyle(nameIntro).display == 'block') {
	    nameIntro.style.display = 'none';
	    instruct.style.display = 'block';
	    playSound();
	  } else {
	    nameIntro.style.display = 'block';
	    instruct.style.display = 'none';
	    playSound();
	  }
	}
	document.getElementById('instructToggle').addEventListener('click', switchInstructVisible);

	function switchVisible() {
	  if(!initpage) return;
	  if (getComputedStyle(div1).display == 'block') {
	    initpage.style.display = 'none';
	    gamecontainer.style.display = 'block';
	    playBombSound()
	  } else {
	    initpage.style.display = 'block';
	    gamecontainer.style.display = 'none';
	    playSound();
	  }
	}
	document.getElementById('Button1').addEventListener('click', switchVisible);

	function switchVisibleHeading() {

	  if (getComputedStyle(hnd1).display == 'block') {
	    heading.style.display = 'none';
	    headingResult.style.display = 'block';
	    nameScore();
	    playSound();
	  } else {

	  }
	}
	document.getElementById('Button2').addEventListener('click', switchVisible2);

	function switchVisible2() {
	  if(!initpage) return;
	  if (getComputedStyle(div1).display == 'block') {
	    initpage.style.display = 'none';
	    gamecontainer.style.display = 'block';
	    playSound();
	  } else {
	    initpage.style.display = 'block';
	    gamecontainer.style.display = 'none';
	    sendname3();
	    playSound();
	  }
	}

	function sendname3(message){
		myh3.innerHTML='';
	}

	document.querySelector('form.wordform').addEventListener("submit", function(event){
	   event.preventDefault();
	   nameDisplay = word.value;
	   sendname(nameDisplay);
	   sendname2(nameDisplay);
	   word.value="";
	   switchVisible();
			 });

	function sendname(message){
		myh3.innerHTML='Spartan! '+ message +' Get ready to meet the Grim!';
	}

	function sendname2(message){
		myh2.innerHTML='Start! ' + 'Attack ' + message + '!';  
	}


