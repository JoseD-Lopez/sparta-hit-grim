



  var word  = document.getElementById("uname");
  var div1 = document.getElementById('initpage'),
  var div2 = document.getElementById('gamecontainer');
  var nameSubmited;

document.querySelector('form.wordform').addEventListener("submit", function(event){
   event.preventDefault();
   var value = word.value;
   sendname(value);
   word.value="";
		 });

function sendname(message){
	nameSubmited = message;
	console.log(nameSubmited);
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