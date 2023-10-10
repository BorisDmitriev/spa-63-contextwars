import React, { useContext, useEffect } from "react";
import {APIContext} from "../context/APIContainer";
import { Link } from "react-router-dom";

const StarwarsCharacter = () => {

    const { state } = useContext(APIContext)

    const {isLoading, allCharacters} = state

    if (isLoading) {
        return (
            <h1>...loading</h1>
        )
    }

    return (
        <>
            {
                allCharacters.results.map( (character,index) => {
                    return <h2 key={index}><Link to={`/characterDetails/${index+1}`}>{character.name}</Link></h2>
                } )
            }
        </>
    );
};

export default StarwarsCharacter;
