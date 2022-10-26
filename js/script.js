const nav = ["Home", "About", "Partners",  "Career", "Social", "Contact"];
const links = ["index.html","AboutUs.html", "Partners.html",  "Career.html", "Social.html", "Contact.html"];

let navsigrdze = nav.length;

let navtext = '<ul class="flex">';
for(let i=0; i<navsigrdze; i++){
    navtext += '<li><a href="' +links[i]+'">' + nav[i] + "</a></li>";
    console.log(navtext);
}
navtext += "</ul>";
console.log(navtext);
document.getElementById("nav").innerHTML = navtext;


const nav2 = ["Print Media"," Web Media", "Informational Agency"," Broadcasting", "E-commerce", "Book publishing and distribution", "Advertising agency", "Printing services"];
const links2 = ["#","#", "#",  "#", "#", "#",  "#", "#",];

let nav2sigrdze = nav2.length;

let nav2text = '<ul class="flex">';
for(let i=0; i<nav2sigrdze; i++){
    nav2text += '<li><a href="' +links2[i]+'">' + nav2[i] + "</a></li>";
    console.log(nav2text);
}
nav2text += "</ul>";
console.log(nav2text);
document.getElementById("nav2").innerHTML = nav2text;

