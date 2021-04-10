import React, { useState, useContext } from "react";
import { Typography } from "@material-ui/core";

import { CardContext } from "App";
import { CardInterface } from "model/card";
import { Constant } from "model/constant";
import PaginationRounded from "components/Pagination/Pagination";
import CardItem from "components/Card/CardItem";
import CardHeader from "components/Card/CardHeader";
import { useStyles } from "components/CardList/style";

function paginate(
  cards: CardInterface[],
  page_size: number,
  page_number: number
) {
  return cards.slice((page_number - 1) * page_size, page_number * page_size);
}

const CardList: React.FC = () => {
  const classes = useStyles();
  const context = useContext(CardContext);
  const { cards } = context;
  const [page, setPage] = useState<number>(1);

  const count = Math.ceil(cards.length / Constant.PAGE_SIZE);
  const paginatedCards = paginate(cards, Constant.PAGE_SIZE, page);

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Your Cards</h2>

      {cards.length ? (
        <>
          <div className={classes.cards}>
            <CardHeader />
            {paginatedCards.map((card: CardInterface) => (
              <CardItem key={card.id} card={card} />
            ))}
          </div>
          <PaginationRounded count={count} page={page} setPage={setPage} />
        </>
      ) : (
        <Typography className={classes.noData}>No data</Typography>
      )}
    </div>
  );
};

export default CardList;
