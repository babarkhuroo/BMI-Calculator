const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const submit = document.querySelector('#submit')
const display = document.querySelector('#res-value')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    const weightValue = weight.value
    let heightValue = height.value
    heightValue = heightValue / 100
    const bmi = weightValue / Math.pow(heightValue, 2)
    display.innerText = bmi.toFixed(1)
})