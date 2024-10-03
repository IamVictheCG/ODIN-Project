let cacheDom = () => {
    // $("h1").css("color", "red");                 
    let players = $(".players");
    let cells = $(".cell");
    let cellsText = $(".cell p");
    let allCells = Array.from(cells);
    let board = $(".board");
    let winnerMsg = $(".winMessage")
    let restart = $(".restart")
    console.log($(board).width());
    // $(board).css("borderColor", "red");                 
    
    return {
        players,
        allCells,
        cellsText,
        winnerMsg,
        restart,
        board
    };
};

const Gameboard = function () {
    const cachedElements = cacheDom();
    const cellContainer = cachedElements.board;
    const board = [];
    const row = 3;
    const column = 3;
    const allCells = cachedElements.allCells;
    const restart = cachedElements.restart  
    let isBoardFull = false

    for (let i = 0; i < row; i++) {
        board[i] = [];

        for (let j = 0; j < column; j++) {
            const cellObj = cell();
            board[i].push(cellObj); // Only push the cell object once

            let cellInDom = document.createElement("div");
            $(cellContainer)[0].appendChild(cellInDom);
            $(cellInDom).attr("class", "cell");
            $(cellInDom).attr("row", i);
            $(cellInDom).attr("column", j);
            $(cellInDom).html(`<p>${cellObj.getValue()}</p>`);
            allCells.push(cellInDom);

            cellInDom.addEventListener("click", () => {
                handleCellClick(i, j, cellInDom); // Use the correct reference for row and column
            });
        }
    }

    const handleCellClick = (row, column, cellElement) => {
        const cellText = cachedElements.cellsText
        const currentPlayer = gameController.getActivePlayer(); // Get the current player
        const validMove = gameController.playRound(row, column); // Try to place the token
        
        if (validMove) {
            const cellValue = board[row][column].getValue();
            $(cellElement).html(`<p>${cellValue}</p>`);
            // console.log(currentPlayer);
            boardStatus()
            if (boardStatus()) {
                console.log("FULL");
                isBoardFull = true
                const cachedPlayers = cachedElements.players;
                $(cachedPlayers[0]).attr('id', 'player1');
                $(restart).css("display", "block");
                $(restart).click(() => gameController.startOver());
            }
            console.log("isBoardFull:" + isBoardFull);

            if (currentPlayer.symbol === "X") {
                $(cellElement).find(cellText);
                $(cellElement).addClass("player1")
                // console.log($(cellElement).addClass("player1"));
                console.log($(cellElement));
            } else {
                $(cellElement).find(cellText);                                      
                $(cellElement).addClass("player2")
                // console.log($(cellElement).addClass("player2"));
                console.log($(cellElement));
                // console.log($(cellElement).css("color"));
            }
        }
    };

    const getBoard = () => board;

    const placeToken = (row, column, player) => {
        if (board[row][column].getValue() != 0) {
            console.log("Invalid: Cell already occupied");
            return false;
        }

        board[row][column].addToken(player); // Add token to the board cell

        allCells.forEach((element) => {
            if ($(element).attr("row") == row && $(element).attr("column") == column) {
                $(element).html(`<p>${board[row][column].getValue()}</p>`);
            }
        });
        return true;
    };

    const checkWinner = () => {
        let winningCells = [];
        
        // Check for row winners
        for (let i = 0; i < 3; i++) {
            if (
                board[i][0].getValue() !== "" &&
                board[i][0].getValue() === board[i][1].getValue() &&
                board[i][0].getValue() === board[i][2].getValue()
            ) {
                winningCells = [[i, 0], [i, 1], [i, 2]];
                return { winner: board[i][0], winningCells };
            }
        }
    
        // Check for column winners
        for (let i = 0; i < 3; i++) {
            if (
                board[0][i].getValue() !== "" &&
                board[0][i].getValue() === board[1][i].getValue() &&
                board[0][i].getValue() === board[2][i].getValue()
            ) {
                winningCells = [[0, i], [1, i], [2, i]];
                return { winner: board[0][i], winningCells };
            }
        }
    
        // Check for diagonal winners
        if (
            board[0][0].getValue() !== "" &&
            board[0][0].getValue() === board[1][1].getValue() &&
            board[0][0].getValue() === board[2][2].getValue()
        ) {
            winningCells = [[0, 0], [1, 1], [2, 2]];
            return { winner: board[0][0], winningCells };
        }
    
        if (
            board[0][2].getValue() !== "" &&
            board[0][2].getValue() === board[1][1].getValue() &&
            board[0][2].getValue() === board[2][0].getValue()
        ) {
            winningCells = [[0, 2], [1, 1], [2, 0]];
            return { winner: board[0][2], winningCells };
        }
    
        return { winner: null, winningCells: [] };
    };
    

    const printBoard = () => {
        const boardWithCellsValues = board.map((row) =>
            row.map((cell) => cell.getValue())
        );
        console.log(boardWithCellsValues);
        // boardStatus()
    };
    const resetBoard = () => {
        allCells.forEach((cell) => {
            $(cell).html("<p> </p>")
            $(cell).removeClass("player1 player2 winner")
        })
        const boardWithoutCellsValues = board.map((row) =>
            row.map((cell) => cell.resetCell())
        );
        console.log(boardWithoutCellsValues);
    };
    const boardStatus = () => {
        console.log(board.every((row) => row.every((cell) => cell.getValue() !== "")));
        return board.every((row) => row.every((cell) => cell.getValue() !== ""))
    }

    
    // console.log(isBoardFull);
    // $(restart).click(() => resetBoard())
    return { placeToken, getBoard, printBoard, checkWinner, handleCellClick, resetBoard, isBoardFull };
};

let GameController = function () {
    const board = Gameboard();

    const players = [
        { name: "Player 1", symbol: "X" },
        { name: "Player 2", symbol: "O" }
    ];

    let activePlayer = players[0];
    let gameWon = false;
    let allMoves = [];
    let player_1_Cells = [];
    let player_2_Cells = [];
    let cachedElements = cacheDom();
    let winnerMsg = cachedElements.winnerMsg
    let restart = cachedElements.restart
    let allCells = cachedElements.allCells;
    let isBoardFull = board.isBoardFull
    console.log(allCells);
    const cachedPlayers = cachedElements.players;
    $(cachedPlayers[0]).attr('id', 'player1');

    const switchPlayers = () => {
        console.log(cachedPlayers);
        activePlayer = activePlayer === players[0] ?( () => {
            $(cachedPlayers[0]).attr('id', '');
            $(cachedPlayers[1]).attr('id', 'player2');
            return players[1];
        })() : (() => {
            $(cachedPlayers[1]).attr('id', '');
            // console.log(cachedPlayers[0]);
            $(cachedPlayers[0]).attr('id', 'player1');
            return players[0];
        })()
    };

    const getActivePlayer = () => activePlayer;
    console.log(getActivePlayer());

    const printNewTurn = () => {
        board.printBoard();
        if (!gameWon) {
            console.log(`${getActivePlayer().name}'s turn.`);
        }
    };

    const startOver = () => {
        const cachedPlayers = cacheDom().players;
        gameWon = false;
        switchPlayers()
        allMoves = [];
        board.resetBoard();
        $(winnerMsg).css("display", "none")
        $(cachedPlayers[1]).attr('id', '');
        $(cachedPlayers[0]).attr('id', 'player1');
        console.log("Restarted");
        $(restart).css('display', 'none')
    }

    const playRound = (row, column) => {
        const player = getActivePlayer();
        console.log(player);
        if (gameWon) {
            console.log("Game already won");
            return false;
        }

        console.log(`Placing ${player.name}'s token in row ${row}, column ${column}...`);
        
        const validMove = board.placeToken(row, column, player.symbol);
        if (!validMove) return false;

        // Track the move by adding it to the moves array
        allMoves.push({ player: player.name, symbol: player.symbol, row, column });
        console.log("Moves so far: ", allMoves);  // Print the moves for debugging

        let player_1_moves = allMoves.filter((move) => move.symbol === "X");
        let player_2_moves = allMoves.filter((move) => move.symbol === "O");
        
        // console.log(player_1_moves[0].player);
        
        player_1_Cells = []
        player_2_Cells = []
        // console.log(player_1_Cells);
        
        player_1_moves.forEach((move) => {
            for (let i = 0; i < allCells.length; i++) {
                if (
                    move.row == $(allCells[i]).attr("row") &&
                    move.column == $(allCells[i]).attr("column")
                ) {
                    // console.log(allCells[i]);
                    player_1_Cells.push(allCells[i])
                }
                
            }
        })
        player_2_moves.forEach((move) => {
            for (let i = 0; i < allCells.length; i++) {
                if (
                    move.row == $(allCells[i]).attr("row") &&
                    move.column == $(allCells[i]).attr("column")
                ) {
                    // console.log(allCells[i]);
                    player_2_Cells.push(allCells[i])
                }
                
            }
        })
        console.log(`Player 1 cells: ${player_1_Cells.length}`);
        console.log($(player_1_Cells[1]).attr("row"), ($(player_1_Cells[1]).attr("column")));
        // console.log(`Player 2 cells: ${player_2_Cells.length}`);
        console.log($(player_2_Cells[1]).attr("row"), ($(player_2_Cells[1]).attr("column")));

        // if (isBoardFull) {
        //     console.log(isBoardFull);
        //     $(restart).css("display", "block")
        //     $(restart).click(() => startOver())
        // }

        const {winner, winningCells} = board.checkWinner();

        if (winner) {
            gameWon = true;
            console.log(`${player.name} wins!`);
            console.log(player_1_Cells.length);

            winningCells.forEach(([r, c]) => {
                allCells.forEach(element => {
                    if ($(element).attr('row') == r && $(element).attr('column') == c) {
                        $(element).addClass("winner");
                    }
                })
            })

            $(winnerMsg).text(`${player.name} wins!`)
            $(restart).css("display", "block")
            $(restart).click(() => startOver())
        } else {
            switchPlayers();
            printNewTurn();
        }
        return true;
    };
    
    printNewTurn();
    
    return {
        getActivePlayer,
        playRound,
        allMoves,
        player_1_Cells,
        player_2_Cells, 
        startOver
    };
};

let cell = function () {
    let value = "";

    const addToken = (player) => {
        value = player;
    };

    const getValue = () => value;

    const resetCell = () => value = "";


    return {
        addToken,
        getValue,
        resetCell
    };
};

// Initialize the GameController
const gameController = GameController();
// gameController.playRound(0, 0); // Player 1 places token in top-left corner
// gameController.playRound(1, 1); // Player 2 places token in the middle
