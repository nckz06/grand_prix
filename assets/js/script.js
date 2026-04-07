const main = document.querySelector('.main-content')

function loadProfiles(profileData) {

    let data = new Date(profileData.tabela[profileData.tabela.length - 1].data)
    let maior = loadMaiorPontuacao(profileData)
    let qtd_letras = loadQtdLetrasDigitadas(profileData)
    let precisao = loadMediaPrecisao(profileData)
    let qtd_acertos = loadQtdAcertos(profileData)
    let qtd_erros = loadQtdErros(profileData)

    return `
        <div class="profile-content">
            <h3>${profileData.nome}</h3>
            <img src="${profileData.photo}" title="${profileData.nome}">
            <ul>
                <li>
                    <span>Maior Pontuação:</span> 
                    ${maior} PPM
                </li>
                <li>
                    <span>Total de Letras Digitadas:</span> 
                    ${qtd_letras}
                </li>
                <li>
                    <span>Média de Precisão:</span> 
                    ${precisao.toFixed(2)}%
                </li>
                <li>
                    <span>Quantidade de Palavras Certas:</span> 
                    ${qtd_acertos}
                </li>
                <li>
                    <span>Quantidade de Palavras Erradas:</span> 
                    ${qtd_erros}
                </li>
            </ul>
        </div>
    `

}

function loadMaiorPontuacao(profile) {

    let maior = 0

    for (let i = 0; i < profile.tabela.length; i++) {
        const element = profile.tabela[i].pontuacao;
        
        if (element > maior) {
            maior = element
        }

    }

    return maior

}

function loadQtdLetrasDigitadas(profile) {

    let qtd_letras = 0

    for (let i = 0; i < profile.tabela.length; i++) {
        const element = profile.tabela[i].qtd_letras;

        qtd_letras += element
    }

    return qtd_letras

}

function loadQtdAcertos(profile) {

    let qtd_acertos = 0

    for (let i = 0; i < profile.tabela.length; i++) {
        const element = profile.tabela[i].acertos;

        qtd_acertos += element
    }

    return qtd_acertos

}

function loadQtdErros(profile) {

    let qtd_erros = 0

    for (let i = 0; i < profile.tabela.length; i++) {
        const element = profile.tabela[i].erros;

        qtd_erros += element
    }

    return qtd_erros

}

function loadMediaPrecisao(profile) {

    let soma = 0
    let media = 0

    for (let i = 0; i < profile.tabela.length; i++) {

        const element = profile.tabela[i].precisao

        soma += element

    }

    media = soma / profile.tabela.length

    return media

}

(async () => {

    profileApi.getProfiles()
        .then((profiles = []) => {
            const profile = profiles.map(loadProfiles).join('')
            main.innerHTML += profile
        })
        /* .finally(() => {
            const profileItem = document.querySelectorAll('.profile-content')

            profileItem.forEach(item => {
                item.addEventListener('click', () => {
                    loadMore()
                })
            })
        }) */
    // estatisca geral (velocidade geral, precisão, quantidade de erros e acertos, quantidade de vitórias - campo de dias, quantidade de registros, gráfico - possível, maior pontuação) -> pessoal
    // pagina de comparação (velocidade da ultima partida, precisao, qtd acerto e erro, ultimo ganhador, media de ppm, maior ppm) - por data
    // cadastro de novos registros
    // 

})()