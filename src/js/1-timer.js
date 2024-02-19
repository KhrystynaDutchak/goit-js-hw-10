import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast/dist/js/iziToast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;
let timerInterval;
const startButton = document.querySelector('[data-start]');
const dateTimePicker = document.querySelector('#datetime-picker');
const daysItem = document.querySelector('[data-days]');
const hoursItem = document.querySelector('[data-hours]');
const minutesItem = document.querySelector('[data-minutes]');
const secondsItem = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    updateStartButtonState();
  },
};

flatpickr(dateTimePicker, options);

startButton.addEventListener("click", () => {
  if (!startButton.disabled) {
    startTimer();
  }
});

function updateStartButtonState() {
  if (userSelectedDate > new Date()) {
    startButton.disabled = false;
    iziToast.destroy();
  } else {
    startButton.disabled = true;
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
      position: 'topRight'
    });
  }
}

function startTimer() {
  startButton.disabled = true;
  dateTimePicker.disabled = true;

  timerInterval = setInterval(() => {
    const timeDifference = userSelectedDate - new Date();
    if (timeDifference <= 0) {
      clearInterval(timerInterval);
      resetTimer();
    } else {
      const { days, hours, minutes, seconds } = convertMs(timeDifference);
      updateTimerDisplay(days, hours, minutes, seconds);
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  dateTimePicker.disabled = false;
  updateTimerDisplay(0, 0, 0, 0); 
}

function updateTimerDisplay(days, hours, minutes, seconds) {
  daysItem.textContent = addLeadingZero(days);
  hoursItem.textContent = addLeadingZero(hours);
  minutesItem.textContent = addLeadingZero(minutes);
  secondsItem.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
