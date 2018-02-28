
  let myh3 = document.getElementById("results");
  let myh2 = document.getElementById("results2");
  let word  = document.getElementById("inputname");
  let div1 = document.getElementById('initpage'),
  div2 = document.getElementById('gamecontainer');
  let hnd1 = document.getElementById('heading'),
  rslt2 = document.getElementById('headingResult');


  let nameDisplay = "";


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

function switchVisibleHeading() {

  if (getComputedStyle(hnd1).display == 'block') {
    heading.style.display = 'none';
    headingResult.style.display = 'block';
    nameScore();
  } else {

  }
}
document.getElementById('Button2').addEventListener('click', switchVisible2);

function switchVisible2() {
  if(!initpage) return;
  if (getComputedStyle(div1).display == 'block') {
    initpage.style.display = 'none';
    gamecontainer.style.display = 'block';
  } else {
    initpage.style.display = 'block';
    gamecontainer.style.display = 'none';
    sendname3();
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


