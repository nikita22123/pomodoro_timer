const timeMinutes = document.querySelector('.timeMin');
const timeSeconds = document.querySelector('.timeSec');
const buttonStart = document.querySelector('#buttonStart');
const buttonReset = document.querySelector('#buttonReset');
const buttonPause = document.querySelector('#buttonPause');
const userSes = document.querySelector('#numberMin');
const userBreak = document.querySelector('#numberMini');
const arrowTopFirst = document.querySelector('.arrowTopFirst');
const arrowDownFirst = document.querySelector('.arrowDownFirst');
const arrowTopSecond = document.querySelector('.arrowTopSecond');
const arrowDownSecond = document.querySelector('.arrowDownSecond');
let interval;
let isBreak = false;
let isRunning = false;
let minutes = parseInt(userSes.textContent);
let seconds = 0;
$('#buttonPause').hide();
updateTimeDisplay();

buttonStart.addEventListener('click', function () {
  if (!isRunning) {
    startTimer();
    isRunning = true;
     $('#buttonStart').hide();
     $('#buttonPause').show();
  } else {
    pauseTimer();
    isRunning = false;
    $('#buttonStart').show();
     $('#buttonPause').hide();
  }
});
buttonPause.addEventListener('click', function () {
  if (isRunning) {
    pauseTimer();
    isRunning = false;
    $('#buttonStart').show();
     $('#buttonPause').hide();
  }
});

buttonReset.addEventListener('click', function () {
  resetTimer();
});

arrowTopFirst.addEventListener('click', function () {
  if (!isRunning) {
    incrementSessionTime();
  }
});

arrowDownFirst.addEventListener('click', function () {
  if (!isRunning) {
    decrementSessionTime();
  }
});

arrowTopSecond.addEventListener('click', function () {
  if (!isRunning) {
    incrementBreakTime();
  }
});

arrowDownSecond.addEventListener('click', function () {
  if (!isRunning) {
    decrementBreakTime();
  }
});

function startTimer() {
  interval = setInterval(function () {
    if (seconds === 0 && minutes === 0) {
      clearInterval(interval);
      if (isBreak) {
        alert('Break time is over!');
        minutes = parseInt(userSes.textContent);
        isBreak = false;
      } else {
        alert('Time is up!');
        minutes = parseInt(userBreak.textContent);
        isBreak = true;
      }
      seconds = 0;
      updateTimeDisplay();
      startTimer();
    } else {
      if (seconds === 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      updateTimeDisplay();
    }
  }, 1000);

   if (minutes === 0 && seconds === 0) {
    openModal();
  }
}

function pauseTimer() {
  clearInterval(interval);

}

function resetTimer() {
  clearInterval(interval);
  minutes = parseInt(userSes.textContent);
  seconds = 0;
  isBreak = false;
  isRunning = false;
  $('#buttonStart').show();
    $('#buttonPause').hide();
  updateTimeDisplay();
}

function incrementSessionTime() {
  minutes++;
  userSes.textContent = minutes;
  updateTimeDisplay();
}

function decrementSessionTime() {
  if (minutes > 1) {
    minutes--;
    userSes.textContent = minutes;
    updateTimeDisplay();
  }
}

function incrementBreakTime() {
  let breakTime = parseInt(userBreak.textContent);
  if (breakTime < 30) {
    breakTime++;
    userBreak.textContent = breakTime;
    if (isBreak) {
      minutes = breakTime;
      updateTimeDisplay();
    }
  }
}

function decrementBreakTime() {
  let breakTime = parseInt(userBreak.textContent);
  if (breakTime > 1) {
    breakTime--;
    userBreak.textContent = breakTime;
    if (isBreak) {
      minutes = breakTime;
      updateTimeDisplay();
    }
  }
}

function updateTimeDisplay() {
  let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  timeMinutes.textContent = formattedMinutes;
  timeSeconds.textContent = formattedSeconds;
}

const modal = document.getElementById('myModal');
const closeButton = document.getElementsByClassName('close')[0];
const alarmSound = document.getElementById('alarmSound');

// Открытие модального окна
function openModal() {
  modal.style.display = 'block';
  alarmSound.play();
}

// Закрытие модального окна
function closeModal() {
  modal.style.display = 'none';
  alarmSound.pause();
}

// Закрытие модального окна при клике на кнопку закрытия
closeButton.addEventListener('click', closeModal);

// Закрытие модального окна при клике вне окна
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    closeModal();
  }
});

