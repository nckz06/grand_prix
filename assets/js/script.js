// COLETA DOS DADOS PARA A PAGINA
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/nckz06/grand_prix/refs/heads/main/data.json'
    const fetching = await fetch(url)
    return await fetching.json()
}

(async () => {

    const profileData = await fetchProfileData()
    // estatisca geral (velocidade geral, precisão, quantidade de erros e acertos, quantidade de vitórias - campo de dias, quantidade de registros, gráfico - possível, maior pontuação) -> pessoal
    // pagina de comparação (velocidade da ultima partida, precisao, qtd acerto e erro, ultimo ganhador, media de ppm, maior ppm) - por data
    // cadastro de novos registros
    // 

    console.log(profileData)

})()