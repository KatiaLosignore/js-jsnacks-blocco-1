console.log('JS OK');

// Prendo l'elemento da DOM
const totalNumber = document.getElementById('total');


let sum = 0;



// Chiedo 10 volte all'utente di inserire un numero

for (let i = 1 ; i <= 10; i++) {


   let userNumber = prompt('Inserisci un numero');

   console.log(userNumber);


   if (userNumber && !isNaN(userNumber)) {
      const numerConverted = parseInt(userNumber);
      sum += numerConverted;

   } else {
     alert('Attenzione non hai inserito un numero corretto');
   }     
   
}

// Stampo in pagina la somma

totalNumber.innerText = sum;


