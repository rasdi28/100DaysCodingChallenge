// DOM Manipulation

//buat element baru

const pBaru = document.createElement('p');

const textPBaru = document.createTextNode('paragraft Baru');

//simpan tulisan kedalam paragraf

pBaru.appendChild(textPBaru);

//simpan pbaru di akhr section A

const sectionA = document.getElementById('a');

sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('item baru');

liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);
