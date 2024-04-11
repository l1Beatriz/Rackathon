const check = document.getElementById("check");
const divAnswer = document.getElementById("divAnswer");
let respostaElement = null;

check.addEventListener('click', (event) => {
    event.preventDefault();

    let drug = document.getElementById("drug").value;
    let health = document.getElementById("health").value;
    let age = parseInt(document.getElementById("age").value);
    let weight = parseFloat(document.getElementById("weight").value);

    verify(drug, health, age, weight);
});

function verify(drug, health, age, weight) {
    // Se já houver uma resposta, atualiza-a, caso contrário, cria uma nova
    if (respostaElement === null) {
        respostaElement = document.createElement('p');
        divAnswer.appendChild(respostaElement);
    }

    if (drug === 'nao' && health === 'sim' && age >= 18 && age <= 69 && weight >= 50) {
        respostaElement.innerHTML = 'Parabéns, você pode doar!';
        respostaElement.className = 'Positiveresponse';
    } else {
        respostaElement.innerHTML = 'Ops..., você não pode doar.';
        respostaElement.className = 'NegativeAnswer';
    }
}
