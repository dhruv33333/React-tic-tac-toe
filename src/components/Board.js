import React, { useState } from 'react';
import Square from './Square';
import '../index.css';

function Board() {

    const [square, setSquare] = useState(Array(9).fill(null));
    const [X, setX] = useState(true);
    const winner = checkWinner(square); // for checking winner
    const draw = checkDraw(square); // for checking draw
    let status;

    if (winner) {
        alert("Winner: " + winner);
        const boxes = square.slice();
        for (let i = 0; i < boxes.length; i++) {
            boxes[i] = null;
        }
        setSquare(boxes);
    }
    const renderBox = (i) => {
        return (
            <Square value={square[i]} onClick={() => checkTurn(i)} />
        )
    }

    const checkTurn = (i) => {
        const boxes = square.slice();
        if (boxes[i] === null) {
            boxes[i] = X ? 'X' : 'O';
            setSquare(boxes);
            setX(!X);
        } else {
            alert("Can't do that")
        }

    }

    function checkDraw(squares) {
        let checkcheck = false;
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] == null) {
                checkcheck = true;
            }
        }
        if (checkcheck == false) {
            alert("Draw: No One Wins!");
            const boxes = square.slice();
            for (let i = 0; i < boxes.length; i++) {
                boxes[i] = null;
            }
            setSquare(boxes);
        }
    }

    function checkWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

                return squares[a];
            }
        }

        return null;
    }

    return (
        <div className="board">
            <div className="board-row">
                {renderBox(0)}
                {renderBox(1)}
                {renderBox(2)}
            </div>
            <div className="board-row">
                {renderBox(3)}
                {renderBox(4)}
                {renderBox(5)}
            </div>
            <div className="board-row">
                {renderBox(6)}
                {renderBox(7)}
                {renderBox(8)}
            </div>

        </div>
    )
}

export default Board;
