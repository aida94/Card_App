import { useState, useEffect } from "react";

import { CardInterface } from "model/card";
import { Constant } from "model/constant";

export const useCard = () => {
  const storage = localStorage.getItem(Constant.CARDS_STORAGE);
  const [cards, setCards] = useState<CardInterface[]>([]);

  useEffect(() => {
    if (storage) {
      const cards = JSON.parse(storage);
      const sortedCards = cards.sort((a: CardInterface, b: CardInterface) =>
        a.name.localeCompare(b.name)
      );

      setCards(sortedCards);
    }
  }, [storage]);

  return {
    cards,
    setCards,
  };
};
