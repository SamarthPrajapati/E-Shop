let dayItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
  let futureDate = new Date("15 october 2023");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let mins = Math.floor(myDate / 1000 / 60) % 60;
  let secs = Math.floor(myDate / 1000) % 60;

  dayItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = mins;
  secItem.innerHTML = secs;
};

countDown();
setInterval(countDown, 1000);

// Scroll Up
let scrollTopBack = () => {
  let scrollTopBack = document.querySelector("#scrollUp");
  window.onscroll = () => {
    var scroll = document.documentElement.scrollTop;
    if (scroll >= 250) {
      scrollTopBack.classList.add("scrollActive");
    } else {
      scrollTopBack.classList.remove("scrollActive");
    }
  };
};

scrollTopBack();
