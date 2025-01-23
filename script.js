const paragraph = document.querySelector('div > p');
console.log('paragraph');
paragraph.innerHTML=('ciao sono un paragrafo')


// Crea una lista con alcuni elementi <li> e un pulsante che, quando cliccato, cambia il colore del testo di tutti gli elementi della lista.

const btnEl = document.querySelector('button')
const liEl = document.querySelectorAll('li');
// console.log('liEl');

btnEl.addEventListener('click', function(){
    liEl.forEach(function (liEl) {
        liEl.classList.add("red");
        })
    console.log('btnEl');
});


const sendBtn = document.querySelector('form > button');
// console.log('sendBtn');
const ulEl = document.querySelector('ul');
// console.log('ulEL');


sendBtn.addEventListener('click', function(event){
    
    let inpT = document.querySelector('input'); // seleziono l'input 
    
    if (inpT.value ==='') {
        alert('first text inside input');
    
    }else{
        event.preventDefault(); // Previene il comportamento predefinito del pulsante
    
        let newLi = document.createElement('li'); // Crea un nuovo elemento li
    
        newLi.textContent = inpT.value; // Imposta il contenuto del li con il valore dell'input
    
        ulEl.appendChild(newLi); // Aggiungi il nuovo li alla lista ul
    
        inpT.value = ''; // Resetta il valore dell'input
    }
});