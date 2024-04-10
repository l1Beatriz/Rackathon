// Código relacionado ao menu da página
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

// Código relacionado a funcionalidade do form
class Agendamento {
    constructor(nomeCompleto, dataNascimento, tipoSanguineo, possuiDoenca, endereco){
        this.nomeCompleto = nomeCompleto;
        this.dataNascimento = dataNascimento;
        this.tipoSanguineo = tipoSanguineo;
        this.possuiDoenca = possuiDoenca;
        this.endereco = endereco;
    }
}

const botaoConfirmar = document.getElementById('botao-confirmar');

botaoConfirmar.addEventListener('click', (event) => {
    event.preventDefault()
    const nomeCompleto = document.getElementById('nome_completo').value;
    const dataNascimento = document.getElementById('data_nascimento').value;
    const tipoSanguineo = document.getElementById('tipo_sanguineo').value;
    const possuiDoenca = document.getElementById('possui_doenca').value;
    const endereço = document.getElementById('endereco').value;

    const agendamento = new Agendamento(nomeCompleto, dataNascimento, tipoSanguineo, possuiDoenca,endereço);
    console.log(agendamento);
})


