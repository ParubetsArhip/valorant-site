class Agents {
    constructor () {
        (async () => {
            const res = await fetch("https://valorant-api.com/v1/agents");
            const { data } = await res.json();
            const el = document.getElementById("agents");

            data.forEach(a => {
                el.innerHTML += `
                <div>
                   <h2>${a.displayName}</h2>
                   <img src="${a.fullPortraitV2 || a.fullPortrait}" width="352">
                </div>
                `
            });
        })();
    }
}

export default Agents








    // (async () => {
    //     const getAgents = await fetch('https://valorant-api.com/v1/agents')
    //     const { data } = await getAgents.json()
    //     const elementsAgents = document.getElementById('agents')
    //
    //     const agentName = 'Phoenix'
    //
    //     const selectAgent = data.find(a => a.displayName === agentName)
    //
    //     if (selectAgent) {
    //         elementsAgents.innerHTML = `
    //             <div>
    //                 <h1 class="agent-name">${selectAgent.displayName}</h1>
    //                 <img src="${selectAgent.fullPortraitV2}" alt="" width="300">
    //             </div>
    //             `
    //     }else {
    //         elementsAgents.innerHTML = `<p>Агент не найден</p>`
    //     }
    // })()
