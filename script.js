const timeSeconds = document.querySelector('.timeSec');
const timeMinutes = document.querySelector('.timeMin');
let buttonStart = document.querySelector('#buttonStart');
let buttonReset = document.querySelector('#buttonReset');
let setMin = document.querySelector('.timeMin');
let setSec = document.querySelector('.timeSec');
let arrowTopFirst = document.querySelector('.arrowTopFirst');
let arrowDownFirst = document.querySelector('.arrowDownFirst');
let arrowTopSecond = document.querySelector('.arrowTopSecond');
let arrowDownSecond = document.querySelector('.arrowDownSecond');
let minutes = setMin.textContent;
let seconds = setSec.textContent;
let userSes = document.querySelector('#numberMin');
let userBreak = document.querySelector('#numberMini');
let userBreakValue = userBreak.textContent;
let userSesValue = userSes.textContent;
let interval;
let buttonPause = document.querySelector('#buttonPause');
$("#buttonPause").hide();

/*let allSec = 59;*/

buttonStart.addEventListener('click', function(event){
	/*minutes--;
	seconds--;*/
	seconds = 59;
	minutes--;
	timeMinutes.textContent = minutes;
	clearInterval(interval);
	startTimer();
	interval = setInterval(startTimer,1000);
	$("#buttonStart").hide();
	$("#buttonPause").show();

});
buttonPause.addEventListener('click', function(event){
	$("#buttonStart").show();
	$("#buttonPause").hide();
	clearInterval(interval);
})
buttonReset.addEventListener('click', function(event){
	clearInterval(interval);
	seconds = 0; 
	timeMinutes.textContent = userSesValue;
	if(seconds == 59){
		timeSeconds.textContent = "00";
	}
	if(seconds < 10){
		timeSeconds.textContent = "0" + seconds;
	}
	if(minutes < 10){
		timeMinutes.textContent = "0" + minutes;
	}

	$("#buttonStart").show();
	$("#buttonPause").hide();

})
 arrowTopFirst.addEventListener('click', function(event){
	if(seconds < 58 && seconds == 0){
	 userSesValue++;
	 userSes.textContent = userSesValue;
	 minutes++;
	 timeMinutes.textContent = minutes;
	}
	 if(minutes < 10){
	 	timeMinutes.textContent = "0" + minutes;
	 }
	 if(minutes > 98){
	 	minutes = 98;
	 }
	 if(userSesValue > 98){
	 	userSesValue = 98;
	 }
})
 arrowDownFirst.addEventListener('click', function(event){
  	if(seconds < 58 && seconds == 0){
	 userSesValue--;
	 userSes.textContent = userSesValue;
	 minutes--;
	 timeMinutes.textContent = minutes;
	}
	 if(minutes < 10){
	 	timeMinutes.textContent = "0" + minutes;
	 }
	 if(minutes < 2){
	 	minutes = 2;
	 }
	 if(userSesValue < 2){
	 	userSesValue = 2;
	 }
	 

})
arrowDownSecond.addEventListener('click', function(event){
	
	if(seconds < 58 && seconds == 0){
	 userBreakValue--;
	 userBreak.textContent = userBreakValue;
	}
	if(userBreakValue < 2){
	 	userBreakValue = 2;
	 }
})
arrowTopSecond.addEventListener('click', function(event){
	
	if(seconds < 58 && seconds == 0){
	 userBreakValue++;
	 userBreak.textContent = userBreakValue;
	}
	if(userBreakValue > 29){
	 	userBreakValue = 29;
	 }
})

function startTimer(){
	if(seconds < 10){
		timeSeconds.textContent = "0" + seconds;
	}
	if(minutes < 10){
		timeMinutes.textContent = "0" + minutes;
	}
		if( seconds < 1 && minutes != 0){
			minutes--;
			timeMinutes.textContent = "0" + minutes;
			seconds = 59;
			timeSeconds.textContent = seconds;
	}

	if(seconds > 9){
	timeSeconds.textContent = seconds;
	}
	if(minutes > 9 ){
		timeMinutes.textContent = minutes;
	}
	if(minutes == 0 && seconds == 0){
		alert("ВРЕМЯ ВЫШЛО!");
		clearInterval(interval);
		timeMinutes.textContent =  "0" + userBreakValue;


	}
	if(seconds > 0 && seconds < 60 ){
		seconds--;
	}
	/*	let newMin = minutes--;
		timeMinutes.textContent = newMin;*/
		/*let newOver = over--;
		timeSeconds.textContent = newOver;*/


		
	

}



