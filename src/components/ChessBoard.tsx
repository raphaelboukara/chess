import React, { useState, useEffect } from 'react';
import './ChessBoard.css';
import ChessPiece from './ChessPiece';

export interface ChessMove {
  from: string;
  to: string;
  piece: string;
  color: 'w' | 'b';
  description?: string;
}

interface ChessBoardProps {
  moves: ChessMove[];
  initialPosition?: string[][];
  title?: string;
  description?: string;
}

const ChessBoard: React.FC<ChessBoardProps> = ({ 
  moves, 
  initialPosition, 
  title = "Chess Move Player",
}) => {
  const [currentMoveIndex, setCurrentMoveIndex] = useState(-1);
  const [board, setBoard] = useState<string[][]>([]);

  // Initialize the board with the starting position
  const getInitialBoard = (): string[][] => {
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
  };

  // Convert chess notation to board coordinates
  const notationToCoords = (notation: string): [number, number] => {
    const file = notation.charCodeAt(0) - 97; // 'a' = 0, 'b' = 1, etc.
    const rank = 8 - parseInt(notation[1]); // '1' = 7, '2' = 6, etc.
    return [rank, file];
  };

  // Apply a move to the board
  const applyMove = (move: ChessMove, boardState: string[][]): string[][] => {
    const newBoard = boardState.map(row => [...row]);
    const [fromRank, fromFile] = notationToCoords(move.from);
    const [toRank, toFile] = notationToCoords(move.to);
    
    // Handle different piece code formats
    let pieceCode = move.piece;
    
    // If it's a single character (like 'P', 'R', etc.), convert to full code
    if (pieceCode.length === 1) {
      pieceCode = move.color + pieceCode;
    }
    
    console.log(`Move: ${move.from} to ${move.to}, Piece: ${move.piece} -> ${pieceCode}`);
    
    newBoard[toRank][toFile] = pieceCode;
    newBoard[fromRank][fromFile] = '';
    
    return newBoard;
  };

  // Get piece color class
  const getPieceColor = (piece: string): string => {
    return piece.startsWith('w') ? 'white' : 'black';
  };

  // Initialize board
  useEffect(() => {
    setBoard(getInitialBoard());
  }, []);

  // Apply moves up to current index
  useEffect(() => {
    let currentBoard = getInitialBoard();
    
    for (let i = 0; i <= currentMoveIndex; i++) {
      if (moves[i]) {
        currentBoard = applyMove(moves[i], currentBoard);
      }
    }
    
    setBoard(currentBoard);
  }, [currentMoveIndex, moves]);

  const goToMove = (index: number) => {
    setCurrentMoveIndex(Math.max(-1, Math.min(index, moves.length - 1)));
  };


  const goBack = () => goToMove(currentMoveIndex - 1);
  const goForward = () => goToMove(currentMoveIndex + 1);

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
              className={`square ${
                (rankIndex + fileIndex) % 2 === 0 ? 'light' : 'dark'
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
          {moves[currentMoveIndex]?.description}
        </div>
        
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
      </div>
    </div>
  );
};

export default ChessBoard; 