document.addEventListener("DOMContentLoaded", ()=>{

const data = document.querySelector(".data");
const temp = document.querySelector(".temp");
let arr1 = ["Area","Population", "Capital", "Language", "Currency", "Time Zone", "Calling Code"];
let arr2 = ["357,600","84,000000","Berlin", "German","Euro","GMT + 1","+42"];
let arrTemp1 = ["Temperature", "Conditions", "Wind", "Wind Chill"];
let arrTemp2 = ["10c", "Partly Cloudy", "5k/h", "9.8c"]

const ul1 = document.createElement("ul");
data.appendChild(ul1);
const ul2 = document.createElement("ul");
temp.appendChild(ul2);

for(let i=0; i<arr1.length; i++){
  const li = document.createElement("li");
  li.innerHTML = `<strong>${arr1[i]}</strong>: ${arr2[i]}`;
  ul1.appendChild(li);
}

for(let i=0; i<arrTemp1.length; i++){
  const li = document.createElement("li");
  li.innerHTML = `<strong>${arrTemp1[i]}</strong>: ${arrTemp2[i]}`;
  ul2.appendChild(li);
}

const  span = document.querySelector(".copyright");
span.textContent = new Date().getFullYear();
const lastModified = document.querySelector(".lastModified");
lastModified.textContent = 'Last Modified:' + " " + document.lastModified;
})
