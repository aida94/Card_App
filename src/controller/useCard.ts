import { useState, useEffect } from "react";

import { CardInterface } from "model/card";
import { Constant } from "model/constant";

export const useCard = () => {
  const storage = localStorage.getItem(Constant.CARDS_STORAGE);
  const [cards, setCards] = useState<CardInterface[]>([]);

  useEffect(() => {
    if (storage) {
      setCards(JSON.parse(storage));
    }
  }, [storage]);

  return {
    cards,
    setCards,
  };
};
