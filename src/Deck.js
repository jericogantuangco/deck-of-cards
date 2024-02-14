import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle";

function Deck() {
  const [deck, setDeck] = useState(null);

  async function fetchData() {
    let deck = await axios.get(API_URL);
    setDeck(deck.data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Card Dealer</h1>
    </div>
  );
}

export default Deck;
