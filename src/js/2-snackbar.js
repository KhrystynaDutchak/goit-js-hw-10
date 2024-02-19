import iziToast from "izitoast/dist/js/iziToast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const delayInput = form.elements['delay'];
    const stateInput = form.elements['state'];

    const delay = parseInt(delayInput.value, 10);
    const state = stateInput.value;
  
    createPromise(delay, state);
});

function createPromise(delay, state) {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  
    myPromise
      .then((delay) => {
        iziToast.success({
          title: 'Success',
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: 'topRight'
        });
      })
      .catch((delay) => {
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topRight'
        });
      });
  }