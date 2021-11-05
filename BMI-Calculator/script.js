const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const submit = document.querySelector('.button')
const display = document.querySelector('#res-value')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    const weightValue = weight.value
    const heightValue = height.value / 100
    const bmi = weightValue / Math.pow(heightValue, 2)
    displayResult(bmi)
})

function displayResult(bmiValue) {
    const result = bmiValue.toFixed(1)
    if (bmiValue <= 18.5) {
        display.innerText = `${result} : Underweight`
        display.style.color = 'cyan'
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        display.innerText = `${result} : Normal`
        display.style.color = 'lime'
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        display.innerText = `${result} : Overweight`
        display.style.color = 'yellow'
    } else if (bmiValue >= 30 && bmiValue <= 34.9) {
        display.innerText = `${result} : Obese`
        display.style.color = 'orange'
    } else if (bmiValue >= 35) {
        display.innerText = `${result} : Extremely Obese`
        display.style.color = 'red'
    }
    return bmiValue
}