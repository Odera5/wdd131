const currentYear = document.querySelector("#currentyear")

const today = new Date();
const year = today.getFullYear();
currentYear.innerHTML = year;

document.getElementById("lastModified").innerHTML ="Last modification: " + document.lastModified;