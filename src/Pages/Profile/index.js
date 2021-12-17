import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from "react-router-dom";
import Collections from '../../Components/Collections';
import ProfileFetching from '../../Components/Profile/ProfileFetching';
import { formatDateDMY } from '../../helpers/formatTime';
import { axios, queryClient } from '../../services';


const getCharacter = async (id) => {
  const { data } = await axios.get(`characters/${id}`)
  return data.data.results
}

function Profile() {
  const params = useParams()
  const { isLoading, data: character } = useQuery(['character', params.id], () => getCharacter(params.id),
    {
      keepPreviousData: true,
      cacheTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false
    })
  const [uriCollection, setUriCollection] = useState('');

  const handleSetCollection = (collection) => {
    queryClient.invalidateQueries('collection')
    setUriCollection(collection)
  }



  if (isLoading) return (<ProfileFetching />)

  return (
    <div className="container">

      <div className="fixed h-14 w-14 left-4 top-3 md:top-7">
        <Link to="/" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-gray-200 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>


      <div className="md:flex no-wrap md:-mx-2 ">

        {/* LEFT */}
        <div className="w-full md:w-3/12 md:mx-2">
          <div className="image overflow-hidden">
            <img className="h-auto w-full mx-auto" src={`${character[0].thumbnail?.path}.${character[0].thumbnail?.extension}`} alt="" />
          </div>

          <div className="mx-5 md:mx-1 mb-8">
            <h1 className="text-3xl md:text-2xl py-8 md:py-5 text-center dark:text-gray-200">{character[0].name}</h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6 pb-5 md:py-5 text-center">Atualizado em: {formatDateDMY(character[0]?.modified)}</h3>
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{character[0].description}</p>
          </div>

        </div>


        {/* RIGHT */}
        <div className="md:w-9/12 mx-2 h-64 py-5 px-1">


          <nav className="flex justify-between divide-x">
            <button className="w-full" onClick={() => handleSetCollection(`${character[0].id}/comics`)}>
              <div className="text-lg font-sans antialiased font-medium text-slate-500">
                Comics
                <p><small>{character[0].comics?.available}</small></p>
              </div>
            </button>

            <button className="w-full " onClick={() => handleSetCollection(`${character[0].id}/series`)}>
              <div className="text-lg font-sans antialiased font-medium text-slate-500">
                Series
                <p><small>{character[0].series?.available}</small></p>
              </div>
            </button>
            <button className="w-full " onClick={() => handleSetCollection(`${character[0].id}/stories`)}>
              <div className="text-lg font-sans antialiased font-medium text-slate-500">
                Stories
                <p><small>{character[0].stories?.available}</small></p>
              </div>
            </button>
            <button className="w-full " onClick={() => handleSetCollection(`${character[0].id}/events`)}>
              <div className="text-lg font-sans antialiased font-medium text-slate-500">
                Events
                <p><small>{character[0].events?.available}</small></p>
              </div>
            </button>
          </nav>

          <div className="mx-auto my-5 p-5">
            {
              uriCollection !== '' ? (<Collections uri={uriCollection} />) : (null)
            }
          </div>


        </div>

      </div>

    </div >
  )
}

export default Profile
