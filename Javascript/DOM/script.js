//DOM selection

//Get Element By id

const judul = document.getElementById('judul');

judul.style.color = 'blue';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Rasdi Abdulrohman';


//document.getElementsbyTagName()
// ->html colections
const p = document.getElementsByTagName('p');

for (let i=0; i< p.length; i++){
    p[i].style.backgroundColor = 'yellow';
}


const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

//document.getElementsByClassName()
// -> mengembalikan html collection

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini dirubah menjadi Javascript';

