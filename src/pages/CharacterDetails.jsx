import React, {useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { APIContext } from '../context/APIContainer'
import { useContext } from 'react'

export default function CharacterDetails() {

  const {characterId} = useParams()

  const { getOneCharacter, state } = useContext(APIContext)
  const { isLoading, character } = state;

  useEffect(() => {
    getOneCharacter(characterId)
  }, [] )

  if (isLoading) {
    return (
        <h1>...loading</h1>
    )
  }

  return (
    <>
       <div>
            <h2>Name: {character.name}</h2>
            <h2>Mass: {character.mass}</h2>
            <h2>Eye-Color: {character.eye_color}</h2>

            <h2><Link to={'/starwarsCharacter'} style={{color: 'green'}} >Back...</Link></h2>
      </div>
    </>
  )
}
