const members = [
  // { name: 'Naruto Fase Criança', id: 'crianca' },
  { name: 'Fase Adolescente', id: 'adolescente' },
  { name: 'Modo Senin', id: 'senin' },
  // { name: 'Naruto Fase Adulta', id: 'adulto' },
  { name: 'Modo Kurama', id: 'kurama' },
  { name: 'Hokage', id: 'hokage' },
]

let activeMember = 0
const images = document.getElementById('images')
const menu = document.getElementById('menu')
const memberName = document.getElementById('member__name')

function changeStatusButtons(){
  const prev = document.getElementById('button__prev')
  const isFirst = activeMember === 0
  prev.disabled = isFirst

  const next = document.getElementById('button__next')
  const isLast = activeMember === members.length -1
  prev.disabled = isLast

}

function navigationMember(direction) {
    activeMember = activeMember + direction

    const member = members[activeMember]

    images.style.transform = `translateY(${-100 * activeMember}vh)`
    memberName.classList = member.id

    changeStatusButtons()
} 

