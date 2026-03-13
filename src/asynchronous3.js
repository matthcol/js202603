function attente(periodeMs) {
    return new Promise(resolve => setTimeout(resolve, periodeMs))
}

async function compter(start, stop){
    for (let i = start; i < stop; i++) {
        await attente(1000)
        console.log(`counteur: ${i}`)
    }
    console.log('Compteur stoppé')
}

await compter(1, 11)
