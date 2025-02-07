import {
  EuchreCard,
  EuchreGameState,
  EuchrePlayerState,
  EuchreRank,
  Phase,
  Pile,
  PlayingCardSuit,
  getHandValue,
  getHighestCard,
  getLeftBowerSuit,
  isLeftBower,
} from "../../";

export const selectCurrentPlayer = (state: EuchreGameState) =>
  state.currentPlayer;

export const selectLeadingPlayer = (state: EuchreGameState) =>
  state.leadingPlayer;

export const selectDealerPointer = (state: EuchreGameState) => state.dealer;

export const selectPile = (pile: string) => (state: EuchreGameState) =>
  state.piles[pile];

export const selectPhase = (state: EuchreGameState) => state.phase;

export const selectPlayerHand = (player: number) => (state: EuchreGameState) =>
  state.players[player].hand;

export const selectPlayers = (state: EuchreGameState) => state.players;

export const selectPlayer = (player: number) => (state: EuchreGameState) =>
  state.players[player];

export const findPlayer =
  (player: number) =>
  (state: EuchreGameState): EuchrePlayerState => {
    return state.players[player];
  };

export const selectCanBid = (player: number) => (state: EuchreGameState) =>
  state.currentPlayer === player && state.phase === Phase.BIDDING;

export const selectCanDeal = (player: number) => (state: EuchreGameState) =>
  state.currentPlayer === player && state.phase === Phase.DEALING;

export const selectCanPlay = (player: number) => (state: EuchreGameState) =>
  state.currentPlayer === player && state.phase === Phase.PLAYING_TRICKS;

export const selectMustDeclare =
  (player: number) => (state: EuchreGameState) => {
    const makerIndex = state.players.findIndex((p) => p.role === "M");

    return makerIndex === player && state.phase === Phase.DECLARING;
  };

export const selectMustDiscard = (player: number) => (state: EuchreGameState) =>
  state.currentPlayer === player && state.phase === Phase.DISCARDING;

export const selectCanCallTrump =
  (player: number) => (state: EuchreGameState) =>
    state.currentPlayer === player && state.phase === Phase.CALLING_TRUMP;

export const selectMustCallTrump =
  (player: number) => (state: EuchreGameState) =>
    state.dealer === player && state.phase === Phase.CALLING_TRUMP;

export const selectSittingOut =
  (player: number) => (state: EuchreGameState) => {
    return state.players[player].sittingOut;
  };

export const selectLeftBower = (state: EuchreGameState) => {
  return getLeftBowerSuit(state.trump as PlayingCardSuit);
};

export const selectSuit = (card: EuchreCard) => (state: EuchreGameState) => {
  return isLeftBower(card, state.trump as PlayingCardSuit)
    ? state.trump
    : card.suit;
};

export const selectHighestCard =
  (pile: Pile<PlayingCardSuit, EuchreRank>) => (state: EuchreGameState) => {
    const trump = state.trump as PlayingCardSuit;
    const leadingSuit = state.leadingSuit as PlayingCardSuit;

    return getHighestCard(pile, trump, leadingSuit);
  };

export const selectHandTotal = (player: number) => (state: EuchreGameState) => {
  const hand = state.piles[`player${player + 1}`];
  return getHandValue(hand, state.trump, state.leadingSuit);
};
