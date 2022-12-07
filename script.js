const currentDate = new Date();
const newDate = new Date('1/1/31');
const timeDifference = newDate.getTime() - currentDate.getTime();

const hourDifference = timeDifference / (60 * 60 * 1000);
const hourResult = hourDifference.toFixed(0);
document.getElementById("hours").innerHTML = hourResult + " Hours";

const dayDifference = timeDifference / (1000 * 3600 * 24); 
const dayResult = dayDifference.toFixed(0);
document.getElementById("newDate").innerHTML = dayResult + " Days"; 

const weekDifference = timeDifference / (7 * 24 * 60 * 60 * 1000);
const weekResult = weekDifference.toFixed(0);
document.getElementById("weeks").innerHTML = weekResult + " Weeks"; 

const monthDifference = timeDifference / (1000 * 3600 * 24) / 31; 
const monthResult = monthDifference.toFixed(0);
document.getElementById("months").innerHTML = monthResult + " Months";

const yearDifference = monthDifference / 12;
const yearResult = yearDifference.toFixed(0);
document.getElementById("years").innerHTML = yearResult + " Years";
