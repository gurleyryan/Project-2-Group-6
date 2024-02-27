
const dateDiv = document.getElementById('date-div');
function myDateFunction() {
  const now = new Date();
  const nowStr = now.toLocaleString('en-US');
  dateDiv.innerHTML = `Current Date&Time: `+nowStr;
}
setInterval(myDateFunction, 1000);
