import React, { useState, useEffect } from 'react';

import {
    Container,
    Label,
    CardPokemon,
    InputSearch,
    ContainerButtonsFilter,
    ButtonReset,
    ButtonTypes
} from './styles';
import Header from '../../components/Header';
import axios from 'axios';

function Home() {
    const [allPokemons, setAllPokemons] = useState([]);
    const [searchPokemon, setSearchPokemon] = useState("");
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [typesPokemon, setTypesPokemon] = useState([]);
    const [activeType, setActiveType] = useState("");

    useEffect(() => {
        async function fetchAllPokemons() {
            const { data } = await axios.get("https://unpkg.com/pokemons@1.1.0/pokemons.json");
            setAllPokemons(data.results);
            setFilteredPokemons(data.results);
        };

        fetchAllPokemons();

        const types = [
            { id: 1, name: 'Fire' },
            { id: 2, name: 'Water' },
            { id: 3, name: 'Grass' },
            { id: 4, name: 'Bug' },
            { id: 5, name: 'Normal' },
            { id: 6, name: 'Dark' },
            { id: 7, name: 'Poison' },
            { id: 8, name: 'Electric' },
            { id: 9, name: 'Ice' },
            { id: 10, name: 'Ground' },
            { id: 11, name: 'Fairy' },
            { id: 12, name: 'Fighting' },
            { id: 13, name: 'Psychic' },
            { id: 14, name: 'Rock' },
            { id: 15, name: 'Ghost' },
            { id: 16, name: 'Dragon' },
            { id: 17, name: 'Steel' },
        ];

        setTypesPokemon(types);
    }, []);

    useEffect(() => {
        const newPokemons = allPokemons.filter(pokemon => pokemon.national_number.toLowerCase().includes(searchPokemon.toLowerCase()) || pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase()));
        setFilteredPokemons(newPokemons);
    }, [searchPokemon]); //eslint-disable-line

    useEffect(() => {
        const newPokemons = allPokemons.filter(pokemon => pokemon.type[0] === activeType);
        setFilteredPokemons(newPokemons);
    }, [activeType]); //eslint-disable-line

    return (
        <Container>
            <Header/>
            <Label>Faça uma busca do Pokémon pelo nome ou número:</Label>
            <InputSearch placeholder="Ex.: Charmander ou 001" type="text" name="Search" onChange={(event) => setSearchPokemon(event.target.value)} />
            <ContainerButtonsFilter>
                <ButtonReset className="button_reset" onClick={()=>{setFilteredPokemons(allPokemons)}}>Todos</ButtonReset>
                {typesPokemon && typesPokemon.map(types => (
                    <ButtonTypes 
                        key={types.id}
                        className={types.name} 
                        onClick={() => { setActiveType(types.name) }}>
                            {types.name}
                    </ButtonTypes>
                ))}
            </ContainerButtonsFilter>
            <CardPokemon>
                {filteredPokemons && filteredPokemons.map(pokemon => (
                    <ul className={pokemon.type[0]}>
                        <b>{pokemon.name}</b>
                        <p># {pokemon.national_number}</p>
                        <img src={pokemon.sprites.normal} alt="pokemon_image" />
                        <p>{pokemon.type[0]}</p>
                    </ul>
                ))}
            </CardPokemon>
        </Container>
    )
};

export default Home;