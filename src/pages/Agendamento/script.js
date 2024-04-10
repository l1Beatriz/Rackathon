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

    verificaAnoNascimento(data_nascimento){
        const dataNascimento = new Date(data_nascimento);
        const anoNascimento = dataNascimento.getFullYear();

        return anoNascimento > 2024 && anoNascimento < 1900;
    }

    verificaIdade(data_nascimento){
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();

        const dataNascimento = new Date(data_nascimento);
        const anoNascimento = dataNascimento.getFullYear();

        const idade = anoAtual - anoNascimento;

        return idade >= 18;
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
    const paragrafo = document.getElementById('paragrafo'); // para quando digitar o ano de nascimento
    const paragrafoErroIdade = document.getElementById('paragrafo-idadeErro');

    const agendamento = new Agendamento(nomeCompleto, dataNascimento, tipoSanguineo, possuiDoenca,endereço);
    console.log(agendamento);

    console.log(agendamento.verificaAnoNascimento(dataNascimento));

    if (agendamento.verificaAnoNascimento(dataNascimento)) {
        paragrafo.innerHTML = 'Ano de nascimento inválido, tente novamente';
    } else if (!agendamento.verificaIdade(dataNascimento)) {
        paragrafoErroIdade.innerHTML = 'Menor de idade não poderá realizar o agendamento';
    } else {
        alert("Cadastro efuatuado com sucesso!!")
    }
})


