const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');

    if(height === '' || height < 0 || isNAN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    }else  if(weight === '' || weight < 0 || isNAN(weight)){
        results.innerHTML = `please give a valid height ${weight}`;
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        document.querySelector('cal')
    }

});