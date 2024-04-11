const check = document.getElementById("check")
const divAnswer = document.getElementById("divAnswer")
let Answer = null

check.addEventListener('click', (event) => {
    event.preventDefault()

    let drug = document.getElementById("drug").value
    let health = document.getElementById("health").value
    let age = parseInt(document.getElementById("age").value)
    let weight = parseFloat(document.getElementById("weight").value)

    verify(drug, health, age, weight)
})

function verify(drug, health, age, weight) {
    if (Answer === null) {
        Answer = document.createElement('p')
        divAnswer.appendChild(Answer)
    }

    if (drug === 'nao' && health === 'sim' && age >= 18 && age <= 69 && weight >= 50) {
        Answer.innerHTML = 'Parabéns, você pode doar!'
        Answer.className = 'Positiveresponse'
    } else {
        Answer.innerHTML = 'Ops..., você não pode doar.'
        Answer.className = 'NegativeAnswer'
    }
}
