import React, { useEffect, useState, useRef } from "react";
import { Container, Title, CardsWrapper, Header } from "./styles";
import { api } from "../../api/api";
import Card from "../../components/Card";
import axios from "axios";
import { PokemonType } from "../../types/index";

const Home: React.FC = () => {
  const scrollObserve = useRef<any>();
  const [pokemonsDetails, setPokemonsDetails] = useState<PokemonType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantityOfCards, setQuantityOfCards] = useState(20);
  const [scrollRatio, setScrollRatio] = useState<any>();

  const intersectionObserver = new IntersectionObserver((entries) => {
    const ratio = entries[0].intersectionRatio;
    setScrollRatio(ratio);
  });

  const getPokemonsDetails = async () => {
    const pokemons = await getPokemons();
    setIsLoading(true);
    const promises: any = [];
    for (let pokemon of pokemons.results) {
      const url = pokemon.url;
      const promise = await axios(url);
      promises.push(promise.data);
    }
    setPokemonsDetails([...pokemonsDetails, ...promises]);
    setIsLoading(false);
  };

  const getPokemons = async () => {
    setQuantityOfCards(pokemonsDetails.length + 10);
    const response = await api.get(
      `pokemon?limit=${quantityOfCards}&offset=${pokemonsDetails.length}`
    );
    return response.data;
  };

  useEffect(() => {
    getPokemonsDetails();
  }, []);

  useEffect(() => {
    intersectionObserver.observe(scrollObserve.current);
    return () => {
      intersectionObserver.disconnect();
    };
  }, [scrollRatio]);

  useEffect(() => {
    if (scrollRatio > 0 && !isLoading) {
      getPokemonsDetails();
    }
    console.log(scrollRatio);
  }, [scrollRatio]);

  return (
    <Container>
      <Header>
        <Title>Pokemon API</Title>
      </Header>
      <CardsWrapper>
        {pokemonsDetails.map((pokemon) => {
          return <Card key={pokemon.id} pokemon={pokemon} />;
        })}
        {isLoading && <p>Loading !!!!</p>}
      </CardsWrapper>
      <div ref={scrollObserve}></div>
    </Container>
  );
};

export default Home;
