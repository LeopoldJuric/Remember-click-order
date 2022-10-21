document.addEventListener('click', function() {
    if (!event.target.classList.contains('tile')) return;
    if (clickedTiles.includes(event.target)) return;
    event.target.classList.add('selected');
    clickedTiles.push(event.target);
    console.log(clickedTiles);

    if (clickedTiles.length >= 9) {
        const interval = setInterval(() => {
            const tile = clickedTiles.shift();
            tile.classList.remove('selected');
            if (clickedTiles.length === 0) {
                clearInterval(interval);
            }
        }, 500);
    }
});

const clickedTiles = [];