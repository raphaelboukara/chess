import ChessBoard from './components/ChessBoard';
import type { ChessMove } from './components/ChessBoard';

const caroKannMoves: (ChessMove | ChessMove[])[] = [
  {
    from: 'e2',
    to: 'e4',
    piece: 'wp',
    description: 'Les Blancs contrôlent le centre et ouvrent des lignes pour la dame et le fou.'
  },
  {
    from: 'c7',
    to: 'c6',
    piece: 'bp',
    description: 'Le coup emblématique de la Défense Caro-Kann. Prépare le coup d5 tout en gardant une position solide.'
  },
  {
    from: 'd2',
    to: 'd4',
    piece: 'wp',
    description: 'Les Blancs s’emparent de plus d’espace central et soutiennent le pion e4.'
  },
  {
    from: 'd7',
    to: 'd5',
    piece: 'bp',
    description: 'Les Noirs contestent directement le centre, maintenant que c6 soutient cette poussée.'
  },
  {
    from: 'e4',
    to: 'd5',
    piece: 'wp',
    description: 'Les Blancs capturent et forcent les Noirs à choisir leur manière de reprendre.'
  },
  {
    from: 'c6',
    to: 'd5',
    piece: 'bp',
    description: 'Les Noirs reprennent vers le centre, établissant une présence de pions.'
  },
  {
    from: 'g1',
    to: 'f3',
    piece: 'wn',
    description: 'Les Blancs développent un cavalier tout en visant des cases centrales et du flanc roi.'
  },
  {
    from: 'g8',
    to: 'f6',
    piece: 'bn',
    description: 'Les Noirs développent un cavalier et exerce une pression sur e4.'
  },
  {
    from: 'c1',
    to: 'f4',
    piece: 'wb',
    description: 'Les Blancs développent le fou sur une case active avant de fermer la diagonale avec e3.'
  },
  {
    from: 'e7',
    to: 'e6',
    piece: 'bp',
    description: 'Les Noirs solidifient le centre et ouvre la diagonale du fou de cases noires.'
  },
  {
    from: 'f1',
    to: 'd3',
    piece: 'wb',
    description: 'Le fou des Blancs vise le flanc roi et contribue au contrôle de la case e4.'
  },
  {
    from: 'f8',
    to: 'e7',
    piece: 'bb',
    description: 'Les Noirs Préparent le roque et place le fou sur une case sûre.'
  },
  [
    {
      from: 'e1',
      to: 'g1',
      piece: 'wk',
      description: 'Les Blancs roquent côté roi, sécurisant le roi et connectant les tours.'
    },
    {
      from: 'h1',
      to: 'f1',
      piece: 'wr',
      description: 'Les Blancs roquent côté roi, sécurisant le roi et connectant les tours.'
    }
  ],
  [
    {
      from: 'e8',
      to: 'g8',
      piece: 'bk',
      description: 'Les Noirs roquent pour mettre le roi en sécurité et activer la tour.'
    },{
      from: 'h8',
      to: 'f8',
      piece: 'br',
      description: 'Les Noirs roquent pour mettre le roi en sécurité et activer la tour.'
    }
  ]
];

const londonSystemMoves: (ChessMove | ChessMove[])[] = [
  {
    from: 'd2',
    to: 'd4',
    piece: 'wp',
    description: 'Les Blancs occupent le centre avec un pion et préparent une structure solide.'
  },
  {
    from: 'd7',
    to: 'd5',
    piece: 'bp',
    description: 'Les Noirs répondent en occupant également le centre.'
  },
  {
    from: 'g1',
    to: 'f3',
    piece: 'wn',
    description: 'Les Blancs développent un cavalier vers le centre et protègent le pion d4.'
  },
  {
    from: 'g8',
    to: 'f6',
    piece: 'bn',
    description: 'Les Noirs développent un cavalier et mettent la pression sur le centre.'
  },
  {
    from: 'c1',
    to: 'f4',
    piece: 'wb',
    description: 'Les Blancs développent leur fou en dehors de la chaîne de pions avant de jouer e3.'
  },
  {
    from: 'e7',
    to: 'e6',
    piece: 'bp',
    description: 'Les Noirs consolident le centre et libèrent leur fou de cases noires.'
  },
  {
    from: 'e2',
    to: 'e3',
    piece: 'wp',
    description: 'Les Blancs ferment la structure de pions, soutiennent le fou et préparent le développement du fou roi.'
  },
  {
    from: 'f8',
    to: 'e7',
    piece: 'bb',
    description: 'Les Noirs développent leur fou sur une case modérément active et préparent le roque.'
  },
  {
    from: 'f1',
    to: 'd3',
    piece: 'wb',
    description: 'Les Blancs centralisent leur fou et visent le roque roi.'
  },
  {
    from: 'b8',
    to: 'd7',
    piece: 'bn',
    description: 'Les Noirs développent leur cavalier, souvent pour soutenir une poussée c5 future.'
  },
  {
    from: 'b1',
    to: 'd2',
    piece: 'wn',
    description: 'Les Blancs développent leur dernier cavalier et préparent le roque.'
  },
  [
    {
      from: 'e1',
      to: 'g1',
      piece: 'wk',
      description: 'Les Blancs roquent côté roi pour mettre leur roi en sécurité.'
    },
    {
      from: 'h1',
      to: 'f1',
      piece: 'wr',
      description: 'Les Blancs roquent côté roi pour connecter les tours.'
    }
  ],
  [
    {
      from: 'e8',
      to: 'g8',
      piece: 'bk',
      description: 'Les Noirs roquent également pour sécuriser leur roi.'
    },
    {
      from: 'h8',
      to: 'f8',
      piece: 'br',
      description: 'Les Noirs roquent également pour connecter leurs tours.'
    }
  ],
  {
    from: 'c2',
    to: 'c3',
    piece: 'wp',
    description: 'Les Blancs stabilisent leur centre avec un triangle de pions d4-e3-c3, typique du système de Londres.'
  }
];

const frenchDefenseMoves: (ChessMove | ChessMove[])[] = [
  {
    from: 'e2',
    to: 'e4',
    piece: 'wp',
    description: 'Les Blancs prennent le centre, ouvrant des lignes pour la dame et le fou.'
  },
  {
    from: 'e7',
    to: 'e6',
    piece: 'bp',
    description: 'Premier coup de la Défense Française : les Noirs préparent la poussée d5 pour contester le centre.'
  },
  {
    from: 'd2',
    to: 'd4',
    piece: 'wp',
    description: 'Les Blancs soutiennent le pion e4 et contrôlent encore plus de centre.'
  },
  {
    from: 'd7',
    to: 'd5',
    piece: 'bp',
    description: 'Les Noirs contestent directement le centre, conformément à l’esprit de la Française.'
  },
  {
    from: 'e4',
    to: 'e5',
    piece: 'wp',
    description: 'Variante d’avance : les Blancs gagnent de l’espace, mais les Noirs pourront attaquer la chaîne de pions.'
  },
  {
    from: 'c8',
    to: 'd7',
    piece: 'bb',
    description: 'Les Noirs développent leur fou passif, souvent avant de verrouiller la diagonale avec ...c5.'
  },
  {
    from: 'g1',
    to: 'f3',
    piece: 'wn',
    description: 'Les Blancs développent leur cavalier vers le centre et préparent le roque.'
  },
  {
    from: 'c7',
    to: 'c5',
    piece: 'bp',
    description: 'Les Noirs attaquent la base de la chaîne de pions blanche (d4), thème classique de la Française.'
  },
  {
    from: 'c2',
    to: 'c3',
    piece: 'wp',
    description: 'Les Blancs soutiennent le pion d4 et stabilisent la structure centrale.'
  },
  {
    from: 'b8',
    to: 'c6',
    piece: 'bn',
    description: 'Les Noirs développent une pièce tout en mettant de la pression sur d4.'
  },
  {
    from: 'f1',
    to: 'd3',
    piece: 'wb',
    description: 'Le fou blanc vise l’aile roi et soutient potentiellement une attaque sur h7.'
  },
  {
    from: 'g8',
    to: 'e7',
    piece: 'bn',
    description: 'Les Noirs préfèrent développer ce cavalier par e7 pour soutenir f5 ou libérer f6 plus tard.'
  },
  [
    {
      from: 'e1',
      to: 'g1',
      piece: 'wk',
      description: 'Les Blancs roquent côté roi pour sécuriser le roi et activer la tour.'
    },
    {
      from: 'h1',
      to: 'f1',
      piece: 'wr',
      description: 'Les Blancs roquent côté roi pour sécuriser le roi et activer la tour.'
    }
  ],
  [
    {
      from: 'e8',
      to: 'g8',
      piece: 'bk',
      description: 'Les Noirs roquent à leur tour, amenant le roi en sécurité.'
    },
    {
      from: 'h8',
      to: 'f8',
      piece: 'br',
      description: 'Les Noirs roquent à leur tour, amenant le roi en sécurité.'
    }
  ]
];

function App() {
  return (
    <>
      <ChessBoard
        moves={caroKannMoves}
        title="Défense Caro-Kann"
      />
      <ChessBoard
        moves={londonSystemMoves}
        title="Système de Londres"
      />
      <ChessBoard
        moves={frenchDefenseMoves}
        title="Défense Française"
      />
    </>
    
  );
}

export default App;
