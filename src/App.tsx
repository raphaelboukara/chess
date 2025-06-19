import ChessBoard from './components/ChessBoard';
import type { ChessMove } from './components/ChessBoard';

const caroKannMoves: ChessMove[] = [
  {
    from: 'e2',
    to: 'e4',
    piece: 'wp',
    color: 'w',
    san: 'e4',
    description: 'White controls the center and opens lines for the queen and bishop.'
  },
  {
    from: 'c7',
    to: 'c6',
    piece: 'bp',
    color: 'b',
    san: 'c6',
    description: 'The hallmark of the Caro-Kann Defense. Prepares d5 while keeping the position solid.'
  },
  {
    from: 'd2',
    to: 'd4',
    piece: 'wp',
    color: 'w',
    san: 'd4',
    description: 'White grabs more central space and supports the e4 pawn.'
  },
  {
    from: 'd7',
    to: 'd5',
    piece: 'bp',
    color: 'b',
    san: 'd5',
    description: 'Black challenges the center directly, now that c6 supports this push.'
  },
  {
    from: 'e4',
    to: 'd5',
    piece: 'wp',
    color: 'w',
    san: 'exd5',
    description: 'White captures and forces Black to decide how to recapture.'
  },
  {
    from: 'c6',
    to: 'd5',
    piece: 'bp',
    color: 'b',
    san: 'cxd5',
    description: 'Black recaptures toward the center, establishing a pawn presence.'
  },
  {
    from: 'g1',
    to: 'f3',
    piece: 'wn',
    color: 'w',
    san: 'Nf3',
    description: 'Develops a knight while eyeing key central and kingside squares.'
  },
  {
    from: 'g8',
    to: 'f6',
    piece: 'bn',
    color: 'b',
    san: 'Nf6',
    description: 'Develops a knight and applies pressure to e4.'
  },
  {
    from: 'c1',
    to: 'f4',
    piece: 'wb',
    color: 'w',
    san: 'Bf4',
    description: 'Develops the bishop to an active square before closing the diagonal with e3.'
  },
  {
    from: 'e7',
    to: 'e6',
    piece: 'bp',
    color: 'b',
    san: 'e6',
    description: 'Solidifies the center and opens the diagonal for the dark-squared bishop.'
  },
  {
    from: 'e1',
    to: 'g1',
    piece: 'wk',
    color: 'w',
    san: 'O-O',
    description: 'White castles kingside, securing the king and connecting the rooks.'
  },
  {
    from: 'f8',
    to: 'e7',
    piece: 'bb',
    color: 'b',
    san: 'Be7',
    description: 'Prepares castling and places the bishop on a solid square.'
  },
  {
    from: 'f1',
    to: 'd3',
    piece: 'wb',
    color: 'w',
    san: 'Bd3',
    description: 'The bishop aims toward the kingside and helps control e4.'
  },
  {
    from: 'e8',
    to: 'g8',
    piece: 'bk',
    color: 'b',
    san: 'O-O',
    description: 'Black castles to safety and activates the rook.'
  }
];

const sampleMoves: ChessMove[] = [
  {
    from: 'e2',
    to: 'e4',
    piece: 'wp',
    color: 'w',
    san: 'e4'
  },
  {
    from: 'e7',
    to: 'e5',
    piece: 'bp',
    color: 'b',
    san: 'e5'
  },
  {
    from: 'g1',
    to: 'f3',
    piece: 'wn',
    color: 'w',
    san: 'Nf3'
  },
  {
    from: 'b8',
    to: 'c6',
    piece: 'bn',
    color: 'b',
    san: 'Nc6'
  },
  {
    from: 'f1',
    to: 'c4',
    piece: 'wb',
    color: 'w',
    san: 'Bc4'
  },
  {
    from: 'f8',
    to: 'c5',
    piece: 'bb',
    color: 'b',
    san: 'Bc5'
  },
  {
    from: 'e1',
    to: 'g1',
    piece: 'wk',
    color: 'w',
    san: 'O-O'
  },
  {
    from: 'g8',
    to: 'f6',
    piece: 'bn',
    color: 'b',
    san: 'Nf6'
  }
];

function App() {
  return (
    <ChessBoard
      moves={caroKannMoves}
      title="Caro-Kann Defense"
    />
  );
}

export default App;
