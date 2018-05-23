		//this function is getting the Name and welcome to player
		function getName() {
			let namePlayer = $(".name").val();
			if(namePlayer.length === 0) {
				alert("Name is required!");
				$(".boxPlayer").hide();
                $('#firstPart').show();
                
			} 
		}

		//this function is generating a random number and returns the random number
		//between 1 and input
		function generateRandomNumber(max) {
			let randomNumber = Math.floor((Math.random() * max) + 1);
			console.log("randomNumber is: " + randomNumber);
			return randomNumber;
		}

		//this function is getting the number from UI and returns it          
		function getMaxFromUser() {
            let intNumberPlay = Number($(".maxNumber").val());
            
			// console.log("intNumberPlay is: " + intNumberPlay);
			if(isNaN(intNumberPlay) || intNumberPlay === 0){
				alert("Please, give a valid number!")
				$(".boxPlayer").hide();
				$('#firstPart').show();
                $(".maxNumber").val("");
                $(".name").val("");
               
				 console.log(typeof intNumberPlay);
			} else {
                let namePlayer = $(".name").val();
                $(".titleName").append('WELCOME, ' + namePlayer+'!')
                return intNumberPlay;
			}
		}
       
        //this function is get the value from the second input box   
                     
		function getGuessFromUser() {
            let checkIsNumber;
            let intNumberGuess = Number($(".numberPlayer").val());
           console.log(typeof intNumberGuess);
			if(isNaN(intNumberGuess)) {
				alert("Please, enter a number!");
                $(".numberPlayer").val("");
                $(".answer").hide() ;         
                checkIsNumber = true;
                return checkIsNumber
                
			} else {
			console.log("intNumberGuess is: " + intNumberGuess);
            checkIsNumber = false;
            return intNumberGuess
            console.log('is number')
            } 
		}

		//this function is checking if the guess is correct with second submit
		function isGuessCorrect(goal, guess) {
            let resultPlay;
            console.log(goal)
            console.log(guess)
			if (guess === 0) {
				alert('Game Over');
                myFunction();
                resultPlay = true
                return resultPlay;

			} else if (guess === goal) {
				alert('Congratulations, You win!');
                myFunction();
                resultPlay = true;
				return resultPlay;

			 }else if (guess < goal) {
				$(".answer").html("");
				$(".answer").append("Too low, try again!");
				console.log('Too low!!');
				resultPlay = false;
                return resultPlay;

			} else {
				$(".answer").html("");
				$(".answer").append("Too high, try again!");
				console.log('Too high');
				resultPlay = false;
				return resultPlay;
			}
		}

		//this function is for re-start the game
		function myFunction() {
			let txt;
			const pressButton = confirm('Would you like to try again?');
			if (pressButton === true) {
				location.reload();
				startGame();
			} else {
				txt = "Thank you!";
			}
		}

		function startGame() {
			getName();
			let numberMaxUser = getMaxFromUser();
			let numberRandom = generateRandomNumber(numberMaxUser);

			$(".insertNumber").on('click', function () {
				event.preventDefault();

                let numberGuess = getGuessFromUser();
                if(numberGuess !== true){
                let bolleanResult = isGuessCorrect(numberRandom, numberGuess);

				if (bolleanResult === false) {
                    $('.numberPlayer').val("");
					let playNumber = getGuessFromUser();
					// let bolleanResult = isGuessCorrect(numberRandom, playNumber);
					
					let timer = add();

					if (timer == 10) {
						alert("You tried 10 times! sorry you lost!");
					}
                }
            } else {
                return getGuessFromUser()
            }
			})

		}

		let add = (function () {
			let counter = 0;
			return function () { return counter += 1; }
		})();

		//DOM READY FUNCTION
		$(document).ready(function () {
			$(".boxPlayer").hide();
			$(".letsPlay").on('click', function () {
				event.preventDefault();
				$('#firstPart').hide()
				$(".boxPlayer").show();
				startGame();
        })
    })