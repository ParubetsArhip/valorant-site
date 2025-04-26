// class Gekko {
//    constructor() {
//       (async () => {
//          const getAgents = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
//          const { data } = await getAgents.json()
//          const getGekko = document.getElementById('header__gekko-right')
//
//          const gekko = data.find(agent => agent.displayName === 'Gekko')
//
//          if (gekko) {
//             getGekko.innerHTML = `
//                 <img src="${gekko.fullPortraitV2 || gekko.fullPortrait}" width="450">
//             `
//          }
//       })()
//
//       console.log('hello')
//    }
// }
//
// export default Gekko


class Gekko {
   constructor() {
      this.init()
   }

   async init() {
      const response = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
      const { data } = await response.json()
      const gekkoContainer = document.getElementById('header__gekko-right')

      const gekko = data.find(agent => agent.displayName === 'Sova')

      if (gekko) {
         gekkoContainer.innerHTML = `
            <img class="header__gekko-image" src="${gekko.fullPortraitV2 || gekko.fullPortrait}" width="450" alt="Gekko">
         `
      }
   }
}

export default Gekko
