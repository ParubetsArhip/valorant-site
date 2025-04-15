class Arsenal {
    constructor() {
        (async () => {
            const getAgents = await fetch('https://valorant-api.com/v1/weapons')
            const { data } = await getAgents.json()
            const arsenal = document.getElementById('arsenal')

            const uniqueAgents = []
            const namesSet = new Set()

            data.forEach(arsenal => {
                if (!namesSet.has(arsenal.displayName)) {
                    namesSet.add(arsenal.displayName)
                    uniqueAgents.push(arsenal)
                }
            })

            uniqueAgents.forEach(a => {
                arsenal.innerHTML += `
                <div class="main__cards__arsenal1">
                    <img class="main__cards-arsenal2" src="${a.displayIcon}" width="450">
                    <div class="main__cards-bottom-arsenal">
                        <p>${a.displayName}</p>
                    </div>
                </div>
                `
            })
        })()
    }
}

export default Arsenal
