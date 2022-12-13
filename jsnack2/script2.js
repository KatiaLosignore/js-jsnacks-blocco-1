console.log('JS OK');


// Inserisco i nomi degli invitati, in un Array
const listNames = ['andrea', 'roberta', 'ludovico', 'alessia', 'luigi'];

// Prendo gli elementi dal DOM
const userName = document.getElementById('name-invite');
const buttonClick = document.getElementById('button');
const checkName = document.getElementById('check');

// Al click del button creo una funzione che controlla l'esito del login
buttonClick.addEventListener("click", function () {
// Raccolgo il valore dall'input (name)
  const valueName = userName.value.trim().toLowerCase();

  // Validazione
  if (!valueName || !isNaN(valueName)) {
    checkName.innerText = 'Non hai inserito un nome corretto';
    return;
  }


  let isValid = false;

//   Controlliamo se i nomi inseriti sono tra quelli presenti in lista
  for (let i = 0; !isValid && i < listNames.length; i++) {
    const currentName = listNames[i];
    console.log(currentName, valueName);

    if (currentName === valueName) {
        isValid = true;
    }

  }


  // Operatore Ternario da stampare in pagina

  checkName.innerText = isValid ? 'Puoi partecipare alla festa' : 'Non puoi partecipare alla festa';
  


});
