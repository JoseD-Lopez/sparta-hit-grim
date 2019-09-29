#Spartan hit the Grim


##Synopsis

###The main goal the development of a game.  

###The modality of the game is a first person shooter based around the theme of "whack a mole". 
### Instead of innocent moles I have chosen the Grim Reaper as the protagonist / enemy that you have to click on or 'shoot' as the sound effects will suggest before the grim disappears behind a bush. 

###An additional element is the appearance of an innocent cat that also appears in the same fashion as the Grim Reaper and when clicked on 'shot' removes a point from your score.

##Motivation
>###This project is to show that I am capable of effectively using the technologies taught to us within the first two weeks of the course to create a product.
>###I was given a week to from start to finish to create the product, write up the documentation and give a presentation.
>###To initialize the project I first come up with a game idea and presented it before our instructors and once approved we had until the middle of the week to present sprint one. 
>###This first sprint consisted of a minimum viable product and any ideas of extra features to develop and include in the program. 
>### I then had until the end of the week to create any of the extra features and write up any of the documentation. Finally I had to prepare for the presentation by creating the necessary slides and develop clear ideas of things I want to cover during my talk presenting the game.  
>###The technologies that we where expected to use were HTML, CSS, JavaScript and the JQuery framework. 
>###For managing our programming we used git to divied up our progress in stages and the github platform to be able to make pull request from my instructors for evaluation and to save for future reference.

##Functionality
>####The idea was created around the idea of the game whack a mole game 
>####The principal logical constructs for thre game are:
* First the heart of the program are two functions that use Math.random functions
	* first one selects a random time for the character to move up and down
	* second one selects a random bush for the character to pop-out off
* There are two identical functions for each of the two characters 
	* Each character makes use of the random time - thats how fast they will go up and back down  
	* Each character make use of the random bush that choses which bush div to appear out off
* There is a function to initialize the game and creates a timer that counts down from a specifed amount of time
* Finally there is a function that senses when a click has been effectively made on one of the characters and updates the score
	* If click on the grim score goes up if on the kitty it goes down
* The entire interface was created using one HTML page that uses buttons attached to javascript functions to switch between the content
* The first display contains the name entry for the player, it also contains a button to allow you to view the game instructions and mute the music. 
* The second display contains the game itself, with a timer, scoreboard and control panel with buttons that allow you to start another game, stop the game, another to go back to the first display and mute the music. 

##Running the game

The game is running on the browser  


##Code Example

	function peep(){ 
		var time = randomTime(20, 1100); //calls the randomTime function to get a random time between the two parameters
		var bush = randomBush(bushes); //calls the randomBush function to get a single random selection between the 6 different available bushes  
		bush.classList.add('up'); // the randomly chosen bush class is given a second class 'up' within the DOM which physically exists in a css file
		setTimeout(() => { //initiates a timer to countdown a set number seconds before execution of the remove function
			bush.classList.remove('up'); // removes the 'up' class from the div of the bush class 
			if(!timeup){ // Checks if the timer has not finished if it has not then it executes whats inside  
			peep();// the function enters here and makes a recursive function call
			}
			else{
				nameScore(); // if the time is finished then it calls the nameScore function to give the final score 
			}
		}, time);
	}


##Built With

* HTML5 - Markup 
* CSS3 - Styling
* JavaScript - Browser based programming language
* Sublime Text - Text Editor
* Chrome Browser - Browser, Developer tools


