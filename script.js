let gridTotal = 16;
let newDiv = 'null';

function gridCreate(gridTotal) {
    for(let i = 0; i < gridTotal; i++) {
        newDiv = document.createElement('div');
        newDiv.id = `grid${i}`;
        newDiv.className = 'grid';
        container.appendChild(newDiv);
    }
}

gridCreate(gridTotal);

for(let x = 0; x < gridTotal; x++) {
    document.getElementById(`grid${x}`).style.backgroundColor = 'purple';
}

let reset = document.getElementById('reset');
reset.addEventListener('click', () => alert('test'));
