let btn = document.querySelector('#btn');
let p = document.querySelector('p');
let inpbox = document.querySelector('#inpbox');
btn.addEventListener('click', ()=> {
let input = document.createElement('input');
input.type = 'number';
inpbox.appendChild(input);
    });

    inpbox.addEventListener('input',()=> {
        let sum = 0;
        inpbox.querySelectorAll('input').forEach(el => sum += +el.value)
        p.textContent = `result is ${sum}`;
    })









