var carNumber= function(carNumber) {

			console.log('specialNumber:',carNumber)
 
	 	}

function myFunction() {
		if (car1.classList.contains)			

				if (carNumber == randomNumber){
					changeState(8)
				} 	else {
					changeState(9)
				};
	}

var changeState= function (state) {
	document.body.className = 'body-state'+state;


	if (state == 3){ 
		changeState(4);
	} else if (state == 4){
		changeState(5)
	} else if (state == 5){
		changeState(6)

	var randomNumber = Math.floor(Math.random() *4) + 1;

		console.log('randomNumber:',randomNumber)

		if (randomNumber == 1) {
			document.getElementById('car1').className = 'car1 win';
		} else{
			document.getElementById('car1').className = 'car1';
		}

		if (randomNumber == 2) {
			document.getElementById('car2').className = 'car2 win';
		} else{
			document.getElementById('car2').className = 'car2';
		}
		
		if (randomNumber == 3) {
			document.getElementById('car3').className = 'car3 win';
		} else{
			document.getElementById('car3').className = 'car3';
		}

		if (randomNumber == 4) {
			document.getElementById('car4').className = 'car4 win';
		} else{
			document.getElementById('car4').className = 'car4';
		}




		
};

}


