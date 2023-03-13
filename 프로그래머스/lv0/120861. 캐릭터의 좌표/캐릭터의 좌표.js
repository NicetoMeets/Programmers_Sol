function solution(keyinput, board) {
    var pos = [0,0];
    var boardRadius = [parseInt(board[0]/2), parseInt(board[1]/2)];

    keyinput.forEach((input) => {

        if (input == "left"){
            pos[0] = pos[0] - 1;
        }
        else if (input == "right"){
            pos[0] = pos[0] + 1;
        }
        else if (input == "down"){
            pos[1] = pos[1] - 1;
        }
        else{
            pos[1] = pos[1] + 1;
        }

        if (pos[0] < -boardRadius[0])
            pos[0] = -boardRadius[0];
        if (pos[0] > boardRadius[0])
            pos[0] = boardRadius[0];

        if (pos[1] < -boardRadius[1])
            pos[1] = -boardRadius[1];
        if (pos[1] > boardRadius[1])
            pos[1] = boardRadius[1];
    });

    return pos;
}