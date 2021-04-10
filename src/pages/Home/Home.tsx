import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";

import Logo from "assets/image/casumo-logo.svg";
import { useStyles } from "pages/Home/style";
import CardList from "components/CardList/CardList";

const Home: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const handleAddClick = () => {
    setOpen(true);
  };

  return (
    <div className={classes.home}>
      <h1 className={classes.logo}>
        <img alt="logo" src={Logo}></img>
      </h1>

      <IconButton
        aria-label="search"
        className={classes.addButton}
        onClick={handleAddClick}
      >
        <Add />
      </IconButton>

      <CardList />
    </div>
  );
};

export default Home;
