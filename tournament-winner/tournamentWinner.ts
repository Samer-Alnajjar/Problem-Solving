// Time O(n) | Space O(k)
function tournamentWinner(competitions: string[][], results: number[]): string {
    let bestTeam = " ",
        scores = {[bestTeam]: 0};

    for(let i = 0 ; i < competitions.length; i++) {
        let result = results[i];
        let [home, way] = competitions[i];
        let winningTeam = result == 0 ? way : home;

        updateScores(winningTeam, 3, scores)

        bestTeam = scores[winningTeam] > scores[bestTeam] ? winningTeam : bestTeam;
    }

    return bestTeam;
}

function updateScores(team, points, scores) {
    if(!scores[team]) scores[team] = 0;

    scores[team]+= points;
}

console.log(tournamentWinner([['html', 'css'], ['js', 'java'], ['css', 'js']], [1, 1, 0]))
