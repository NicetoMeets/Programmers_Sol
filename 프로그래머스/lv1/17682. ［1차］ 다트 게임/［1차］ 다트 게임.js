function solution(dartResult) {

    var answer = 0;
    var semiScore = [0, 0, 0]
    var semiBonus = [1, 1, 1]
    var semiOption = [1, 1, 1]
    var roundScore = [0, 0, 0]

    for (let i = 0; i < 3; i++) {

        semiScore[i] = parseInt(dartResult)
        dartResult = dartResult.slice(String(semiScore[i]).length)

        if (dartResult[0] == 'S' || dartResult[0] == 'D' || dartResult[0] == 'T') {
            switch (dartResult[0]) {
                case 'S':
                    semiBonus[i] = 1; break;
                case 'D':
                    semiBonus[i] = 2; break;
                case 'T':
                    semiBonus[i] = 3; break;
            }
            dartResult = dartResult.slice(1)
        }

        if (dartResult[0] == '*' || dartResult[0] == '#') {
            switch (dartResult[0]) {
                case '*':
                    semiOption[i] = 2; break;
                case '#':
                    semiOption[i] = -1; break;
            }
            dartResult = dartResult.slice(1)
        }
    }

    for (let i = 0; i < 3; i++) {
        roundScore[i] = semiScore[i] ** semiBonus[i];
        roundScore[i] = roundScore[i] * semiOption[i];
        if (i > 0 && semiOption[i] == 2) {
            roundScore[i - 1] = roundScore[i - 1] * semiOption[i];
        }
    }

    answer = roundScore.reduce((acc, score) => { return acc + score }, 0)
    return answer;
}