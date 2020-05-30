let gridTotal = 16;

function createGrid(gridTotal) {
    for(let i = 0; i < gridTotal * gridTotal; i++) {
        let newDiv = document.createElement('div');
        newDiv.id = `grid${i}`;
        newDiv.className = 'gridClass';
        container.appendChild(newDiv);
        container.style.setProperty('grid-template-columns', `repeat(${gridTotal}, auto)`);
        document.getElementById(`grid${i}`).style.backgroundColor = 'purple';
        newDiv.addEventListener('mouseenter', () => {
            document.getElementById(`grid${i}`).style.backgroundColor = 'black';
        });
    }
}

function removeGrid(gridTotal) {
    for(let i = 0; i < gridTotal * gridTotal; i++) {
        let removeDiv = document.getElementById(`grid${i}`);
        removeDiv.remove();
    }
}

createGrid(gridTotal);

let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    removeGrid(gridTotal);
    gridTotal = prompt('What size grid would you like?');
    while(gridTotal > 100) {
        gridTotal = prompt('Please pick a smaller number.');
    }
    createGrid(gridTotal);
});

