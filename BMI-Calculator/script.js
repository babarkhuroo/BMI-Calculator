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
    let status = ''
    if (bmiValue <= 0 || bmiValue >= 200) {
        alert('woah... what the hell? what values did you insert?')
        display.innerText = ''
    }
    if (bmiValue > 0 && bmiValue < 200) {
        if (bmiValue > 0 && bmiValue <= 18.5) {
            status = 'Underweight'
            display.style.color = 'cyan'
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            status = 'Normal'
            display.style.color = 'lime'
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            status = 'Overweight'
            display.style.color = 'yellow'
        } else if (bmiValue >= 30 && bmiValue <= 34.9) {
            status = 'Obese'
            display.style.color = 'orange'
        } else if (bmiValue >= 35 && bmiValue < 200) {
            status = 'Extremely Obese'
            display.style.color = 'red'
        }
        display.innerText = `${result} : ${status}`
    }
    weight.value = ''
    height.value = ''
}