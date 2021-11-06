const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const submit = document.querySelector('.button')
const gradient = document.querySelector('.gradient')
const pointer = document.querySelector('#pointer')
const appendCont = document.querySelector('.sec-result')
const disRes = document.getElementsByClassName('display-res')
const disStat = document.getElementsByClassName('display-stat')

submit.addEventListener('click', (e) => {
    e.preventDefault()
    // the chunk of code i needed help with
    if (disRes.length > 0 && disStat.length > 0) {
        disRes[0].remove()
        disStat[0].remove()
    }

    if (weight.value && height.value) {
        let weightValue = weight.value
        let heightValue = height.value / 100
        const bmi = weightValue / Math.pow(heightValue, 2)
        displayResult(bmi)
    } else {
        alert('bruh... fill those values')
    }
    weight.value = height.value = ''
})

function displayResult(bmiValue) {
    const result = bmiValue.toFixed(1)
    let status = color = ''
    if (bmiValue <= 0 || bmiValue >= 200) {
        alert('woah... what the hell? what values did you insert?')
    } else {
        if (bmiValue > 0 && bmiValue <= 18.5) {
            status = 'Underweight'
            color = 'cyan'
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            status = 'Normal'
            color = 'lime'
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            status = 'Overweight'
            color = 'yellow'
        } else if (bmiValue >= 30 && bmiValue <= 34.9) {
            status = 'Obese'
            color = 'orange'
        } else if (bmiValue >= 35 && bmiValue < 200) {
            status = 'Extremely Obese'
            color = 'red'
        }
        const displayRes = document.createElement('div')
        displayRes.classList.add('display-res')
        displayRes.innerText = `${result}`
        displayRes.style.color = `${color}`
        const displayStat = document.createElement('div')
        displayStat.classList.add('display-stat')
        displayStat.innerText = `${status}`
        appendCont.appendChild(displayRes)
        appendCont.appendChild(displayStat)
    }
}