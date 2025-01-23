const paragraph = document.querySelector('div > p');
console.log('paragraph');
paragraph.innerHTML=('ciao sono un paragrafo')


// Crea una lista con alcuni elementi <li> e un pulsante che, quando cliccato, cambia il colore del testo di tutti gli elementi della lista.

// console.log('liEl');
const btnEl = document.querySelector('button')
const liEl = document.querySelectorAll('li');

btnEl.addEventListener('click', function(){
    liEl.forEach(function (liEl) {
        liEl.classList.add("red");
        })
    console.log('btnEl');
})