// --- HAMBURGER MENU ---
const hamburger = document.querySelector(".hamburger")
const menu = document.createElement("div");
menu.classList.add("menu");
const menuItems = ["Home", "Old", "New", "Large", "Small"];
const ul = document.createElement("ul");

menuItems.forEach(item => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = item;
  a.id = item.toLowerCase(); // assign id for filtering
  li.appendChild(a);
  ul.appendChild(li);
});
menu.appendChild(ul);
document.body.appendChild(menu);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  menu.classList.toggle("active");
});

// --- FOOTER ---
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modification: " + document.lastModified;

// --- TEMPLE DATA ARRAY ---
const temples = [
  { templeName: "Salt Lake Temple", location: "Salt Lake City, Utah", dedicated: "1893-04-06", area: 253015, imageUrl: "https://www.churchofjesuschrist.org/bc/content/ldsorg/temples/temple-images/salt-lake-ut.jpg" },
  { templeName: "Los Angeles California Temple", location: "Los Angeles, California", dedicated: "1956-03-11", area: 108200, imageUrl: "https://www.churchofjesuschrist.org/bc/content/ldsorg/temples/temple-images/los-angeles-ca.jpg" },
  { templeName: "Rome Italy Temple", location: "Rome, Italy", dedicated: "2019-03-10", area: 171500, imageUrl: "https://www.churchofjesuschrist.org/bc/content/ldsorg/temples/temple-images/rome-italy.jpg" },
  { templeName: "Tokyo Japan Temple", location: "Tokyo, Japan", dedicated: "1980-10-27", area: 52800, imageUrl: "https://www.churchofjesuschrist.org/bc/content/ldsorg/temples/temple-images/tokyo-japan.jpg" },
  { templeName: "Paris France Temple", location: "Paris, France", dedicated: "2017-05-21", area: 77500, imageUrl: "https://www.churchofjesuschrist.org/bc/content/ldsorg/temples/temple-images/paris-france.jpg" },
  { templeName: "St. George Utah Temple", location: "St. George, Utah", dedicated: "1877-04-06", area: 90000, imageUrl: "https://www.churchofjesuschrist.org/bc/content/ldsorg/temples/temple-images/st-george-ut.jpg" },
  { templeName: "Denver Colorado Temple", location: "Denver, Colorado", dedicated: "1986-04-06", area: 55400, imageUrl: "https://www.churchofjesuschrist.org/bc/content/ldsorg/temples/temple-images/denver-co.jpg" },
  { templeName: "Washington DC Temple", location: "Washington, DC", dedicated: "1974-11-19", area: 123000, imageUrl: "https://www.churchofjesuschrist.org/bc/content/ldsorg/temples/temple-images/washington-dc.jpg" },
  { templeName: "Bern Switzerland Temple", location: "Bern, Switzerland", dedicated: "1955-09-11", area: 118000, imageUrl: "https://www.churchofjesuschrist.org/bc/content/ldsorg/temples/temple-images/bern-switzerland.jpg" },
  { templeName: "Hong Kong China Temple", location: "Hong Kong, China", dedicated: "1996-07-26", area: 64000, imageUrl: "https://www.churchofjesuschrist.org/bc/content/ldsorg/temples/temple-images/hong-kong-china.jpg" }
];

// --- FUNCTION TO DISPLAY TEMPLE CARDS ---
const templeContainer = document.getElementById("temples");

function displayTemples(list) {
  templeContainer.innerHTML = ""; // clear old cards
  list.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy"; // native lazy loading

    card.append(name, location, dedicated, area, img);
    templeContainer.appendChild(card);
  });
}

// --- INITIAL DISPLAY ---
displayTemples(temples);

// --- FILTERING LOGIC ---
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () => displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900)));
document.getElementById("new").addEventListener("click", () => displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000)));
document.getElementById("large").addEventListener("click", () => displayTemples(temples.filter(t => t.area > 90000)));
document.getElementById("small").addEventListener("click", () => displayTemples(temples.filter(t => t.area < 10000)));
