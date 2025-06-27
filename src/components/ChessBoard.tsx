import React, { useState, useEffect, useCallback } from 'react';
import './ChessBoard.css';
import ChessPiece from './ChessPiece';

export interface ChessMove {
  from: string;
  to: string;
  description?: string;
}

interface ChessBoardProps {
  moves: (ChessMove | ChessMove[])[];
  initialPosition?: string[][];
  title?: string;
  description?: string;
}

const ChessBoard: React.FC<ChessBoardProps> = ({
  moves,
  initialPosition,
  title = "Chess Move Player",
  description = ""
}) => {
  const [currentMoveIndex, setCurrentMoveIndex] = useState(-1);
  const [board, setBoard] = useState<string[][]>([]);

  // Initialize the board with the starting position
  const getInitialBoard = useCallback((): string[][] => {
    if (initialPosition) return initialPosition;

    return [
      ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
      ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
      ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr']
    ];
  }, [initialPosition]);

  // Convert chess notation to board coordinates
  const notationToCoords = useCallback((notation: string): [number, number] => {
    const file = notation.charCodeAt(0) - 97; // 'a' = 0, 'b' = 1, etc.
    const rank = 8 - parseInt(notation[1]); // '1' = 7, '2' = 6, etc.
    return [rank, file];
  }, []);

  // Apply a single move to the board
  const applySingleMove = useCallback((move: ChessMove, boardState: string[][]): string[][] => {
    console.log('Applying single move');
    const newBoard = boardState.map(row => [...row]);
    const [fromRank, fromFile] = notationToCoords(move.from);
    const [toRank, toFile] = notationToCoords(move.to);

    console.log(`Move: ${move.from} to ${move.to}, Piece: ${newBoard[fromRank][fromFile]}`);

    newBoard[toRank][toFile] = newBoard[fromRank][fromFile];
    newBoard[fromRank][fromFile] = '';

    return newBoard;
  }, [notationToCoords]);

  // Apply a move (single or multiple) to the board
  const applyMove = useCallback((move: ChessMove | ChessMove[], boardState: string[][]): string[][] => {
    let newBoard = boardState.map(row => [...row]);

    if (Array.isArray(move)) {
      for (const singleMove of move) {
        newBoard = applySingleMove(singleMove, newBoard);
      }
    } else {
      newBoard = applySingleMove(move, newBoard);
    }

    return newBoard;
  }, [applySingleMove]);

  // Get piece color class
  const getPieceColor = useCallback((piece: string): string => {
    return piece.startsWith('w') ? 'white' : 'black';
  }, []);

  // Get description for a move (single or multiple)
  const getMoveDescription = useCallback((move: ChessMove | ChessMove[] | undefined): string | undefined => {
    if (!move) return undefined;

    if (Array.isArray(move)) {
      return `${move[0]?.description} ${move[1]?.description}`;
    }
    return move.description;
  }, []);

  // Initialize board
  useEffect(() => {
    setBoard(getInitialBoard());
  }, [getInitialBoard]);

  // Apply moves up to current index
  useEffect(() => {
    let currentBoard = getInitialBoard();

    for (let i = 0; i <= currentMoveIndex; i++) {
      if (moves[i]) {
        currentBoard = applyMove(moves[i], currentBoard);
      }
    }

    setBoard(currentBoard);
  }, [currentMoveIndex, moves, getInitialBoard, applyMove]);

  const goToMove = useCallback((index: number) => {
    setCurrentMoveIndex(Math.max(-1, Math.min(index, moves.length - 1)));
  }, [moves.length]);

  const goBack = useCallback(() => goToMove(currentMoveIndex - 1), [goToMove, currentMoveIndex]);
  const goForward = useCallback(() => goToMove(currentMoveIndex + 1), [goToMove, currentMoveIndex]);

  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  return (
    <div className="chess-container">
      {/* Chess Board */}
      <div className="chess-board">
        {/* Rank labels */}
        {ranks.map((rank, index) => (
          <div
            key={`rank-${rank}`}
            className="rank-label"
            style={{ gridRow: index + 1 }}
          >
            {rank}
          </div>
        ))}

        {/* Chess squares */}
        {board.map((rank, rankIndex) =>
          rank.map((piece, fileIndex) => (
            <div
              key={`${rankIndex}-${fileIndex}`}
              className={`square ${(rankIndex + fileIndex) % 2 === 0 ? 'light' : 'dark'
                }`}
              style={{
                gridRow: rankIndex + 1,
                gridColumn: fileIndex + 2
              }}
            >
              {piece && (
                <div className={`piece ${getPieceColor(piece)}`}>
                  <ChessPiece piece={piece} size={45} />
                </div>
              )}
            </div>
          ))
        )}

        {/* File labels */}
        {files.map((file, index) => (
          <div
            key={`file-${file}`}
            className="file-label"
            style={{ gridColumn: index + 2, gridRow: 9 }}
          >
            {file}
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="chess-sidebar">
        <h1>
          {title}
        </h1>

        <div className="move-description">
          {getMoveDescription(moves[currentMoveIndex]) || description}
        </div>

        {moves.length > 0 && (
          <div className="controls">
            <span>{currentMoveIndex + 1}/{moves.length}</span>

            <input type="range"
              min="-1"
              max={Math.max(-1, moves.length - 1)}
              value={currentMoveIndex}
              onChange={(e) => goToMove(parseInt(e.target.value))}
              className="slider"
            />

            <div className="control-buttons">
              <button onClick={goBack} disabled={currentMoveIndex === -1}>
                ◀
              </button>
              <button onClick={goForward} disabled={currentMoveIndex === moves.length - 1}>
                ▶
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChessBoard; 