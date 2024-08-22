import React, { Fragment } from "react";
import { TheJumbotron } from "./TheJumbotron.jsx";
import { TheNavbar } from "./TheNavbar.jsx";
import { TheCards } from "./TheCards.jsx";
import { CardGroup } from "react-bootstrap";
import { TheFooter } from "./TheFooter.jsx";

const cardsContents = [
  {
    img: "https://images.pushsquare.com/53c4649119f7b/cyberpunk-2077-cover.cover_large.jpg",
    title: "Cyberpunk 2077",
    text: "Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt Red, and published by CD Projekt, and based on Mike Pondsmith's Cyberpunk tabletop game series. The plot is set in the fictional metropolis of Night City, California. ",
    footer: "CD Projekt Red",
  },
  {
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
    title: "The Witcher 3: Wild Hunt",
    text: "The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher. Geralt walks, runs, rolls and dodges, and (for the first time in the series) jumps, climbs and swims. ",
    footer: "CD Projekt Red",
  },
  {
    img: "https://pbs.twimg.com/media/BxVM8YhCcAEm8QX.jpg",
    title: "GTA V",
    text: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall.",
    footer: "Rockstar Games",
  },
];

const addGamesHTML = () => {
  return cardsContents.map((game, index) => (
    <TheCards
      img={game.img}
      title={game.title}
      text={game.text}
      footer={game.footer}
      key={index.toString()}
    />
  ));
};

export function Home() {
  return (
    <Fragment>
      <TheNavbar />
      <TheJumbotron />
      <CardGroup >{addGamesHTML()}</CardGroup>
      <TheFooter />
    </Fragment>
  );
}
