import React, { createContext, useReducer, useEffect, useState } from 'react'

export const APIContext = createContext()



function reducer(state, action) {
    switch (action.type) {
        case 'setAllCharacters':
            return {
                ...state,
                allCharacters: action.payload
            }
        case 'setCharacter':
            return {
                ...state,
                character: action.payload
            }

        case 'setLoading':
            return {
                ...state,
                isLoading: action.payload
            }

        default:
            return state;
    }
}

const initialState = {
    allCharacters: {},
    character: {},
    isLoading: true,
}

export default function APIContainer(props) {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        getAllCharacters()
    }, [])

    async function getAllCharacters() {
        const responce = await fetch("https://swapi.dev/api/people/")
        const data = await responce.json()
        dispatch({ type: 'setAllCharacters', payload: data })
        dispatch({ type: 'setLoading', payload: false })
    }

    async function getOneCharacter(characterId) {
        const responce = await fetch("https://swapi.dev/api/people/" + characterId)
        const data = await responce.json()
        dispatch({ type: 'setCharacter', payload: data })
        dispatch({ type: 'setLoading', payload: false })
    }

    return (
        <>
            <APIContext.Provider value={
                {
                    getOneCharacter,
                    state
                }
            }>
                {props.children}
            </APIContext.Provider>
        </>
    )
}
