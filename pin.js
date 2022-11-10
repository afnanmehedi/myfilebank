function getRandomPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else {
        return getRandomPin();
    }
}

function generatePin(){
    pin = getRandomPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    number = event.target.innerText;
   const typedNumbers = document.getElementById('typed-numbers');
   
   if(isNaN(number)){
    if(number == 'C'){
        typedNumbers.value = '';
    }
}

    else {
        const typedNumbersText = typedNumbers.value;
        const updateValue = typedNumbersText + number;
        typedNumbers.value = updateValue;
    }
})

function verifyPin(){
    pin = document.getElementById('display-pin').value;
    typedNumbers = document.getElementById('typed-numbers').value;

    const pinSuccess = document.getElementById('pin-success');
    const pinFail = document.getElementById('pin-fail');
    if(pin == typedNumbers){
        pinSuccess.style.display = 'block';
        pinFail.style.display = 'none';
    }
    else {
        pinSuccess.style.display = 'none';
        pinFail.style.display = 'block';
    }
}