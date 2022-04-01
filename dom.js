//DOM
//nulis ke page browser
document.write("DOM Manipulation");

//ngambil element html by acessor  id
console.info(document.getElementById("title"));

//ambil element html by class
console.info(document.getElementsByClassName("sub-titlr"));

//ngambil element html bt tag
console.info(document.getElementsByTagName("h1"));

//ngambil element html by query selector
console.info(document.querySelector("h1"));

//
document.getElementById("sub-content").innerHTML = "Lorem ipsum dolor amet";

document.getElementById("lorem").style.color = 'blue';

var paragraph = document.createElement("h1");

paragraph.textContent = "NCT DREAM Glitch Mode";

document.body.append(paragraph);

function ambilValueDropdown(){
    let element = document.getElementById("country");
    const value = element.options[element.selectedIndex].value;
    const text = element.options[element.selectedIndex].text;
    
    console.log("ambil value dari dropdown : ",value);
    console.log("ambil text dari dropdown : ",text);
}
