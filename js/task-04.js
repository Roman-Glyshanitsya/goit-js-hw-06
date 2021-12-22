const counter = document.querySelector('#value')
const decBtn = document.querySelector('[data-action = "decrement"]')
const incBtn = document.querySelector('[data-action = "increment"]')
let counterValue = 0

decBtn.addEventListener('click', () => {
    counterValue -= 1
    counter.textContent = counterValue
    console.log(counterValue);
})

incBtn.addEventListener('click', () => {
    counterValue += 1
    counter.textContent = counterValue
    console.log(counterValue);
})


