myinner = document.querySelector('.test');

myinner.innerHTML = ' This Is innerHTML ' + document.querySelector('.one').innerHTML; // this will pirnt HTML Code With Text


mytext = document.querySelector('.box');

mytext.textContent = ' This Is textContent ' + document.querySelector('.one').textContent; // this will pirnt Text Without HTML Code