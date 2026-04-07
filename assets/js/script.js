const main = document.querySelector('.main-content')

function loadProfiles(profileData) {

    return `
        <div class="profile-content">
            <h3>${profileData.nome}</h3>
            <img src="${profileData.photo}" title="${profileData.nome}">
            <ul>
                <li>Pontuação: ${profileData.tabela[0].pontuacao} PPM</li>
                <li>Precisão: ${profileData.tabela[0].precisao}%</li>
                <li>Quantidade de Erros: ${profileData.tabela[0].erros}</li>
                <li>Quantidade de Acertos: ${profileData.tabela[0].acertos}</li>
                <li>Letras Digitadas: ${profileData.tabela[0].qtd_letras}</li>
                <li>Data: ${profileData.tabela[0].data}</li>
            </ul>
        </div>
    `

}

(async () => {

    profileApi.getProfiles()
        .then((profiles = []) => {
            const profile = profiles.map(loadProfiles).join('')
            main.innerHTML += profile
        })
    // estatisca geral (velocidade geral, precisão, quantidade de erros e acertos, quantidade de vitórias - campo de dias, quantidade de registros, gráfico - possível, maior pontuação) -> pessoal
    // pagina de comparação (velocidade da ultima partida, precisao, qtd acerto e erro, ultimo ganhador, media de ppm, maior ppm) - por data
    // cadastro de novos registros
    // 

})()