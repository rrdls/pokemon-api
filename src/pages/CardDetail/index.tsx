import React, { useState } from "react";
import { PokemonType, CardDetailProps } from "../../types/index";
import {
  Container,
  Chart,
  Profile,
  Name,
  Index,
  Types,
  TypesSection,
  Image,
  Data,
  Wrapper,
  Moves,
  TitleSection,
  ScrollArea,
} from "./styles";
import { useHistory } from "react-router-dom";

import { ArrowBack, ArrowForward } from "@material-ui/icons";

import SkillBar from "react-skillbars";

const CardDetail: React.FC<CardDetailProps> = (props) => {
  const { pokemon, color } = props.location.state;

  const abilities = pokemon.abilities.map((ability) => ability.ability.name);

  const types = pokemon.types.map((type) => type.type.name);

  const stats = pokemon.stats.map((stat) => {
    return { level: stat.base_stat, type: stat.stat.name };
  });

  const moves = pokemon.moves.map((move) => move.move.name);

  const history = useHistory();

  const goBackToHome = () => {
    history.goBack();
  };

  const goToMoves = () => {};

  return (
    <Container>
      <Wrapper>
        <Profile color={color}>
          <ArrowBack onClick={goBackToHome} />
          <Name>{pokemon.name}</Name>
          <Index>#00{pokemon.id}</Index>
          <TypesSection>
            {types.map((type, index) => (
              <Types key={index} color={color}>
                {type}
              </Types>
            ))}
          </TypesSection>
          <Data>
            <p>
              Height: {pokemon.height / 10} <span>cm</span>
            </p>
            <p>
              Weight: {pokemon.weight / 10} <span>kg</span>
            </p>
            <p>Abilities: {abilities.toString()}</p>
          </Data>
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
          />
        </Profile>
        <ScrollArea>
          <Chart color={color}>
            <TitleSection color={color}>Stats</TitleSection>
            <SkillBar skills={stats} height={40} />
          </Chart>

          <Moves>
            <TitleSection color={color}>Moves</TitleSection>
            <div>
              {moves.map((move) => (
                <Types key={move} color={color}>
                  {move}
                </Types>
              ))}
            </div>
          </Moves>
        </ScrollArea>
      </Wrapper>
    </Container>
  );
};

export default CardDetail;
