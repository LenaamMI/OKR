function findWinner(playerss) {
    let maxScore = playerss[0].score;
    let winnerName = playerss[0].name;

    for (let i = 1; i < playerss.length; i++) {
        if (playerss[i].score > maxScore) {
            maxScore = playerss[i].score;
            winnerName = playerss[i].name;
        }
    }
    return winnerName;
}
const players = [
    { name: 'Анна', score: 95 },
    { name: 'Борис', score: 120 },
    { name: 'Виктор', score: 85 },
    { name: 'Галина', score: 110 }
];
console.log(findWinner(players));