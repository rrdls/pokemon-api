import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Container,
  Name,
  Types,
  Image,
  Index,
  Top,
  Center,
  Bottom,
} from "./styles";
import { CardProps } from "../../types/index";

const Card: React.FC<CardProps> = (props) => {
  const { pokemon } = props;
  const history = useHistory();
  const [color, setColor] = useState();
  const types = pokemon.types.map((type: any) => type.type.name);
  const getPokemonColorFromApi = async () => {
    const colorName = await axios.get(pokemon.species.url);
    setColor(colorName.data.color.name);
  };
  useEffect(() => {
    getPokemonColorFromApi();
  }, [pokemon]);

  const goToDetail = () => {
    history.push("detail", { pokemon, color });
  };

  return (
    <Container color={color || "white"} onClick={goToDetail}>
      <Top>
        <Name>{pokemon.name}</Name>
        <Index>#00{pokemon.id}</Index>
      </Top>
      <Center>
        {types.map((type: any, index: number) => (
          <Types key={index}>{type}</Types>
        ))}
      </Center>
      <Bottom>
        <Image src={pokemon.sprites.other["official-artwork"].front_default} />
      </Bottom>
    </Container>
  );
};

export default Card;
