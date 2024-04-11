document.querySelector(".form-register").addEventListener("submit", () => {
    
    let data_atual = new Date()
    
    let data_de_nascimento = document.querySelector("#date").value
    data_de_nascimento = new Date(data_de_nascimento)


    let ano_da_maior_idade = (data_atual.getFullYear() - data_de_nascimento.getFullYear()) == 18
    let maior_de_idade = (data_atual.getFullYear() - data_de_nascimento.getFullYear()) > 18
    let mes_da_maior_idade = (data_atual.getMonth() + 1) >= (data_de_nascimento.getMonth() + 1)
    let dia_da_maior_idade = data_atual.getDate() >= data_de_nascimento.getDate() + 1

    if (ano_da_maior_idade && mes_da_maior_idade && dia_da_maior_idade || maior_de_idade) {
        alert("Cadastro realizado com sucesso!")
    } else {
        alert("Infelizmente não foi possível realizar o seu cadastro, você deve ter 18 anos ou mais.")
    }

});