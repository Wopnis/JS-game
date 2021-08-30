const board = document.querySelector('#board'),
    colors = ['#A0A0A4', '#8E402A', 
              '#C8A696', '#212121', 
              '#ABCDEF', '#FFF5EE',
              '#E3256B', '#C71585',
              ' #FC2847', '#CC0605',
              '#120A8F', ' #F75E25',
              '#009A63', ' #7FC7FF'
            ];

const SQUARE_QUANTITY = 400;

for (let i=0; i < SQUARE_QUANTITY; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        setColor(square);
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })
    board.append(square);
};

function setColor(elem) {
    const color = getRandomColor();
    elem.style.background = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 19px ${color}`;
};
function removeColor(elem) {
    elem.style.background = '#1d1d1d';
    elem.style.boxShadow = '0 0 2px #000';
};

function getRandomColor() {
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}