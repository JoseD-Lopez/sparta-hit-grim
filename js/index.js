



  var word  = document.getElementById("uname");

document.querySelector('form.wordform').addEventListener("submit", function(event){
   event.preventDefault();
   var value = word.value;
   console.log(value);
   word.value="";
		 });