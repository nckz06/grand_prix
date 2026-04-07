profileApi = {}

function convertProfileApiDetail(profileDetail) {
    
    const profile = new Profile()
    profile.nome = profileDetail.nome
    profile.photo = profileDetail.photo

    profile.tabela = profileDetail.tabela

    return profile

}

profileApi.getProfiles = () => {
    
    const url = 'https://raw.githubusercontent.com/nckz06/grand_prix/refs/heads/main/assets/js/data.json'

    return fetch(url)
        .then(response => response.json())
        .then(users => users.map(convertProfileApiDetail))
        .then(detailRequest => Promise.all(detailRequest))
        .then(profileDetail => profileDetail)

}