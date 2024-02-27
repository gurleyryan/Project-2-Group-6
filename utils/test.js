
const dayjs = require("dayjs")


function displayTimeDashBoard()
{
var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');

setInterval(displayTimeDashBoard,1000);
console.log(rightNow)
}
displayTimeDashBoard();