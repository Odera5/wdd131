const hamburger = document.querySelector(".hamburger")
const menu = document.createElement("div");
menu.classList.add("menu");
const menuItems = ["Home", "Old", "New", "Large", "Small"];
const ul = document.createElement("ul");

menuItems.forEach(item => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";           // replace with real links
  a.textContent = item;
  li.appendChild(a);
  ul.appendChild(li);
});
menu.appendChild(ul);
const body = document.body
body.appendChild(menu);

hamburger.addEventListener("click", ()=>{
hamburger.classList.toggle("active")

 menu.classList.toggle("active");
});

document.querySelector("footer span").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML ="Last modification: " + document.lastModified;