//DOCUMENT QUERY SELECTOR

//document.querySelector()- > element

const p4 = document.querySelector('#b p');
p4.style.color = 'yellow';
p4.style.fontSize = '40px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'blue';

const p = document.querySelector('p');
p.innerHTML = 'ini dirubah menjadi Javascript';


//document.queySelectorAll()
const pAll = document.querySelectorAll('p');

for (let i= 0; i<pAll.length; i++){
    pAll[i].style.backgroundColor = 'lightblue';

}