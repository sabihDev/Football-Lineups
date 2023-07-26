const createMatchBtn = document.querySelector('.create-match-section__btn');
const createMatchContainer = document.querySelector('.create-match-section');
const dialogBox = document.querySelector('.dialog-box');
const teamA = document.querySelector('.team-a');
const teamB = document.querySelector('.team-b');
const submitBtn = document.querySelector('#form__submit-btn');

function AddPlayer(player) {
    const playerProps = {
        nameProp: document.querySelector('#' + player + '-name'),
        heightProp: document.querySelector('#' + player + '-height'),
        defProp: document.querySelector('#' + player + '-def'),
        phyProp: document.querySelector('#' + player + '-phy'),
        drribleProp: document.querySelector('#' + player + '-drrible'),
        paceProp: document.querySelector('#' + player + '-pace'),
        mainFootProp: document.querySelector('#' + player + '-main-foot'),
        addPlayerBtn: document.querySelector('#add-' + player + '-btn'),
    };

    submitBtn.onclick = () => {
        playerProps.nameProp.textContent = propsInput.nameInput.value;
        playerProps.heightProp.textContent = propsInput.heightInput.value;
        playerProps.phyProp.textContent = propsInput.phyInput.value;
        playerProps.defProp.textContent = propsInput.defInput.value;
        playerProps.drribleProp.textContent = propsInput.drribleInput.value;
        playerProps.paceProp.textContent = propsInput.paceInput.value;
        playerProps.mainFootProp.textContent = propsInput.mainFootInput.value;

        playerProps.nameProp.parentElement.classList.remove(playerProps.nameProp.parentElement.classList[1]);
        dialogBox.classList.add('hidden');
        playerProps.addPlayerBtn.classList.add('hidden');
        playerProps.nameProp.parentElement.parentElement.onmouseover = () => {
            playerProps.paceProp.parentElement.parentElement.classList.remove(playerProps.paceProp.parentElement.parentElement.classList[1]);
        }

        playerProps.nameProp.parentElement.parentElement.onmouseout = () => {
            playerProps.paceProp.parentElement.parentElement.classList.add('hidden');
        }
        playerProps.paceProp.parentElement.parentElement.style.cursor = 'pointer';
    }

    const propsInput = {
        nameInput: document.querySelector('#player-input__name'),
        heightInput: document.querySelector('#player-input__height'),
        phyInput: document.querySelector('#player-input__phy'),
        defInput: document.querySelector('#player-input__def'),
        drribleInput: document.querySelector('#player-input__drrible'),
        paceInput: document.querySelector('#player-input__pace'),
        mainFootInput: document.querySelector('#player-input__main-foot'),
    };

    playerProps['addPlayerBtn'].onclick = () => {
        dialogBox.classList.remove(dialogBox.classList[1]);
    }

};
createMatchBtn.onclick = () => {
    createMatchContainer.classList.add('hidden');
    teamA.classList.remove(teamA.classList[1]);
    teamB.classList.remove(teamB.classList[1]);
}
