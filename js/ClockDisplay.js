/**
 * @file ClockDisplay.js
 */

const clockDisplay = () => {
  update();
  window.setInterval(update, 1000);
};

const update = () => {
  const dateOutput = $('#date');
  const timeOutput = $('#time');

  const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",
    "Saturday"];

  const date = new Date();

  let ampm = date.getHours() < 12 ? 'AM':'PM';
  let hours = date.getHours() === 0
    ? 12 : date.getHours() > 12
    ? date.getHours() - 12 : date.getHours();
  let minutes = date.getMinutes() < 10
    ? '0' + date.getMinutes() : date.getMinutes();
  let seconds = date.getSeconds() < 10
    ? '0' + date.getSeconds() : date.getSeconds();

  let dayOfWeek = days[date.getDay()];
  let month = months[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();

  const dateString = dayOfWeek + ', ' + month + " " + month + " " + day + ", "
    + year;
  dateOutput.text(dateString);

  const timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
  timeOutput.text(timeString);
};

export default clockDisplay;

