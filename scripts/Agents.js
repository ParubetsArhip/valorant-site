class Agents {
    constructor () {
        (async () => {
            const getAgents = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
            const { data } = await getAgents.json()
            const agents = document.getElementById('agents')

            const uniqueAgents = []
            const namesSet = new Set()

            data.forEach(agent => {
                if (!namesSet.has(agent.displayName)) {
                    namesSet.add(agent.displayName)
                    uniqueAgents.push(agent)
                }
            })

            uniqueAgents.forEach(a => {
                agents.innerHTML += `
                <div class="main__cards">
                    <img class="main__cards-agent" src="${a.fullPortraitV2 || a.fullPortrait}" width="450">
                    
                    <div class="main__cards-bottom">
                        <p>${a.displayName}</p>
                    </div>
                </div>
                `
            })
        })()
    }
}

export default Agents
