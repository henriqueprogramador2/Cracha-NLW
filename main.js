const Links = {
  github: 'henriqueprogramador2',
  linkedin: '/in/henriquesilva',
  facebook: 'henrique.augusto',
  tiktok: '@henriqueaugusto294',
  instagram: 'rick_style2015',
  twitter: 'haugusto455'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${Links[social]}`
    // para o computador não importa a quantidade, mas sim a posição.
  }
}

changeSocialMediaLinks()

// pega informações do github.
function getGutHubProfileInfos() {
  const url = `https://api.github.com/users/${Links.github}`

  fetch(url)
    .then(response => response.json())

    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html.url
      userLogin.textContent = data.login
    })
}

getGutHubProfileInfos()
