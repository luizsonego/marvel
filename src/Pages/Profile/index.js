import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Collections from '../../Components/Collections';
import api from '../../services/api';

function Profile() {
  const params = useParams();
  const [character, setCharacter] = useState([]);
  const [uriCollection, setUriCollection] = useState();

  useEffect(() => {
    async function loadCharacter() {
      const response = await api.get(`characters/${params.id}`)
      const [char] = response.data.data.results
      setCharacter(char)
    }

    loadCharacter()
  }, [])

  const handleSetCollection = (collection) => {
    console.log(collection)
    setUriCollection(collection)
  }
  return (
    <div className="container mx-auto md:my-5 md:p-5">
      <div className="md:flex no-wrap md:-mx-2 ">

        {/* LEFT */}
        <div className="w-full md:w-3/12 md:mx-2">
          <div className="image overflow-hidden">
            <img className="h-auto w-full mx-auto" src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`} alt="" />
          </div>

          <div className="mx-5 md:mx-1 mb-8">
            <h1 className="text-3xl md:text-2xl py-8 md:py-5 text-center">{character.name}</h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6 pb-5 md:py-5 text-center">Atualizado em: {character.modified}</h3>
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{character.description}</p>
          </div>

        </div>


        {/* RIGHT */}
        <div className="md:w-9/12 mx-2 h-64 py-5 px-1">


          <nav className="flex justify-between divide-x">
            <button className="w-full" onClick={() => handleSetCollection('http://gateway.marvel.com/v1/public/characters/1009144/comics')}>
              <div className="text-lg font-sans antialiased font-medium text-slate-500">
                Comics
                <p><small>{character.comics?.available}</small></p>
              </div>
            </button>

            <button className="w-full " >
              <div className="text-lg font-sans antialiased font-medium text-slate-500">
                Series
                <p><small>{character.series?.available}</small></p>
              </div>
            </button>
            <button className="w-full " >
              <div className="text-lg font-sans antialiased font-medium text-slate-500">
                Stories
                <p><small>{character.stories?.available}</small></p>
              </div>
            </button>
            <button className="w-full " >
              <div className="text-lg font-sans antialiased font-medium text-slate-500">
                Events
                <p><small>{character.events?.available}</small></p>
              </div>
            </button>
          </nav>

          <div className="mx-auto my-5 p-5">
            <Collections uri={uriCollection} />
          </div>


        </div>

      </div>

    </div>
  )
}

export default Profile
