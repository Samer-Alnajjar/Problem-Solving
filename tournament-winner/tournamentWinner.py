# Time O(n) | Space O(n)
def tournamentWinner(competitions, result):
    winner = ''
    scores = {winner: 0}
    currentWinner = ''

    for i in range(len(competitions)):
        home, way = competitions[i]

        currentWinner = home if result[i] == 1 else way

        scores.get(currentWinner, 0) + 3

        if(scores[currentWinner] > scores[winner]):
            winner = currentWinner

    return winner




print(tournamentWinner([['html', 'css'], ['js', 'java'], ['css', 'js']], [1, 1, 0]))
