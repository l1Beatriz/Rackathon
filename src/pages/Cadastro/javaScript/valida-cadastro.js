document.querySelector(".form-register").addEventListener("submit", () => {
    
    let currentDate = new Date()
    
    let dateOfBirth = document.querySelector("#date").value
    dateOfBirth = new Date(dateOfBirth)


    let ano_da_maior_idade = (currentDate.getFullYear() - dateOfBirth.getFullYear()) == 18
    let maior_de_idade = (currentDate.getFullYear() - dateOfBirth.getFullYear()) > 18
    let mes_da_maior_idade = (currentDate.getMonth() + 1) >= (dateOfBirth.getMonth() + 1)
    let dia_da_maior_idade = currentDate.getDate() >= dateOfBirth.getDate() + 1

    if (ano_da_maior_idade && mes_da_maior_idade && dia_da_maior_idade || maior_de_idade) {
        alert("Cadastro realizado com sucesso!")
    } else {
        alert("Infelizmente não foi possível realizar o seu cadastro, você deve ter 18 anos ou mais.")
    }

});