const createMatchBtn = document.querySelector('.create-match-section__btn');
const createMatchContainer = document.querySelector('.create-match-section');
const teamA = document.querySelector('.team-a');
const teamB = document.querySelector('.team-b');

function AddPlayer(player) {
    const nameProp = document.querySelector('#' + player + '-name');
    const heightProp = document.querySelector('#' + player + '-height');
    const defProp = document.querySelector('#' + player + '-def');
    const phyProp = document.querySelector('#' + player + '-phy');
    const drribleProp = document.querySelector('#' + player + '-drrible');
    const paceProp = document.querySelector('#' + player + '-pace');
    const mainFootProp = document.querySelector('#' + player + '-main-foot');
}

createMatchBtn.onclick = () => {
    createMatchContainer.classList.add('hidden');
    teamA.classList.remove(teamA.classList[1]);
    teamB.classList.remove(teamB.classList[1]);
}