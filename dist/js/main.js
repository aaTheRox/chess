function onDrop  (newLocation, oldLocation, source,
        piece, position, orientation) {
        const movesHistory = '#moves-history';
        document.querySelector(movesHistory).innerHTML +=`${oldLocation} > ${newLocation}<br>`
        console.log('New location: ' + newLocation)
        console.log('Old location: ' + oldLocation)
        console.log('Source: ' + source)
        console.log('Piece: ' + piece)
        console.log('Position: ' + Chessboard.objToFen(position))
        console.log('Orientation: ' + orientation)
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

        document.getElementById("notification-sound").innerHTML = '<audio autoplay="true" src="./dist/108615_649468-lq.mp3"></audio>'
        setTimeout(() => {
            document.getElementById("notification-sound").innerHTML = '';
        }, 1000)    
}

    var config = {
        draggable: true,
        moveSpeed: 'slow',
        snapbackSpeed: 500,
        snapSpeed: 100,
        position: 'start',
        onDrop : onDrop 
    }
    var board = Chessboard('puto-pato', config)

$('#ruyLopezBtn').on('click', function () {
    board.position('r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R')
    highlightSquare('.square-a2', 'blue');
    highlightSquare('.square-g2', 'red');
    highlightSquare('.square-h1', 'green');
    
})
$('#startBtn').on('click', board.start);

function highlightSquare(className, color) {
    document.querySelector(className).classList.add(`hightlighted-${color}`);
}
