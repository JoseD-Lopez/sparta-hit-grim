
  var myh3 = document.getElementById("results");
  var myh2 = document.getElementById("results2");
  var word  = document.getElementById("inputname");
  var div1 = document.getElementById('initpage'),
  div2 = document.getElementById('gamecontainer');
  


  var nameDisplay = "";


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


