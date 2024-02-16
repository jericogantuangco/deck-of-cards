import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

function Deck() {
  const [deck, setDeck] = useState(null);
  const [drawn, setDrawn] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    setDeck(deck.data);
  }

  async function getCard() {
    try {
      const cardURL = `${API_BASE_URL}/${deck.deck_id}/draw/`;
      const response = await axios.get(cardURL);

      if (!response.data.success) {
        throw new Error("No cards remaining.");
      }

      const card = response.data.cards[0];
      setDrawn([
        ...drawn,
        {
          id: card.code,
          image: card.image,
          name: `${card.value} of ${card.suit}`,
        },
      ]);
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div>
      <h1>Card Dealer</h1>
      <button onClick={getCard}>Get Card</button>
    </div>
  );
}

export default Deck;
