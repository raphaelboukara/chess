import ChessBoard from './components/ChessBoard';
import type { ChessMove } from './components/ChessBoard';

const caroKannMoves: ChessMove[] = [
  {
    from: 'e2',
    to: 'e4',
    piece: 'wp',
    color: 'w',
    description: 'Les Blancs contrôlent le centre et ouvrent des lignes pour la dame et le fou.'
  },
  {
    from: 'c7',
    to: 'c6',
    piece: 'bp',
    color: 'b',
    description: 'Le coup emblématique de la Défense Caro-Kann. Prépare le coup d5 tout en gardant une position solide.'
  },
  {
    from: 'd2',
    to: 'd4',
    piece: 'wp',
    color: 'w',
    description: 'Les Blancs s’emparent de plus d’espace central et soutiennent le pion e4.'
  },
  {
    from: 'd7',
    to: 'd5',
    piece: 'bp',
    color: 'b',
    description: 'Les Noirs contestent directement le centre, maintenant que c6 soutient cette poussée.'
  },
  {
    from: 'e4',
    to: 'd5',
    piece: 'wp',
    color: 'w',
    description: 'Les Blancs capturent et forcent les Noirs à choisir leur manière de reprendre.'
  },
  {
    from: 'c6',
    to: 'd5',
    piece: 'bp',
    color: 'b',
    description: 'Les Noirs reprennent vers le centre, établissant une présence de pions.'
  },
  {
    from: 'g1',
    to: 'f3',
    piece: 'wn',
    color: 'w',
    description: 'Les Blancs développent un cavalier tout en visant des cases centrales et du flanc roi.'
  },
  {
    from: 'g8',
    to: 'f6',
    piece: 'bn',
    color: 'b',
    description: 'Les Noirs développent un cavalier et exerce une pression sur e4.'
  },
  {
    from: 'c1',
    to: 'f4',
    piece: 'wb',
    color: 'w',
    description: 'Les Blancs développent le fou sur une case active avant de fermer la diagonale avec e3.'
  },
  {
    from: 'e7',
    to: 'e6',
    piece: 'bp',
    color: 'b',
    description: 'Les Noirs solidifient le centre et ouvre la diagonale du fou de cases noires.'
  },
  {
    from: 'f1',
    to: 'd3',
    piece: 'wb',
    color: 'w',
    description: 'Le fou des Blancs vise le flanc roi et contribue au contrôle de la case e4.'
  },
  {
    from: 'f8',
    to: 'e7',
    piece: 'bb',
    color: 'b',
    description: 'Les Noirs Préparent le roque et place le fou sur une case sûre.'
  },
  {
    from: 'e1',
    to: 'g1',
    piece: 'wk',
    color: 'w',
    description: 'Les Blancs roquent côté roi, sécurisant le roi et connectant les tours.'
  },
  {
    from: 'e8',
    to: 'g8',
    piece: 'bk',
    color: 'b',
    description: 'Les Noirs roquent pour mettre le roi en sécurité et activer la tour.'
  }
];

function App() {
  return (
    <ChessBoard
      moves={caroKannMoves}
      title="Défense Caro-Kann"
    />
  );
}

export default App;
