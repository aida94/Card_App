import React, { useEffect, createContext } from "react";

import "App.css";
import { cardList } from "data/cardList";
import { Constant } from "model/constant";
import { useCard } from "controller/useCard";
import Home from "pages/Home/Home";

export const CardContext = createContext("" as any);

const App: React.FC = () => {
  const storage = localStorage.getItem(Constant.CARDS_STORAGE);
  const { cards, setCards } = useCard();

  useEffect(() => {
    if (!storage) {
      localStorage.setItem(Constant.CARDS_STORAGE, JSON.stringify(cardList));
      setCards(cardList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storage]);

  return (
    <div className="App">
      <CardContext.Provider value={{ cards, setCards }}>
        <Home />
      </CardContext.Provider>
    </div>
  );
};

export default App;
