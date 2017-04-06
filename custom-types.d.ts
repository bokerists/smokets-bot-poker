
interface IPlayer {
  id: string;
  name: string;
  status: string;
  cards: ICard[];
  chips: number;
  chipsBet: number;
}

interface ICard {
  rank: string;
  type: string;
}

interface ISidepot {
  quote: number;
  amount: number;
}

interface IGamestate {
  tournamentId: string;
  game: number;
  hand: number;
  spinCount: number;
  buyin: number;
  sb: number;
  pot: number;
  sidepots: ISidepot[];
  commonCards: ICard[];
  players: IPlayer[];
  db: number;
  me: number;
  callAmount: number;
  minimumRaiseAmount: number;
}
