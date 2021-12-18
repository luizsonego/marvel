import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { axios } from '../../services';
import CardUser from '../CardUser';
import CardUserFetching from '../CardUser/CardUserFetching';

const getCharacters = async () => {
  const { data } = await axios.get(`characters`)
  return data.data
}

function Characters() {
  const {
    isFetching,
    isLoading,
    data: charactersList
  } = useQuery(['characters'], () => getCharacters(),
    {
      keepPreviousData: true,
      cacheTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false
    }
  )

  if (isFetching || isLoading) return (
    <CardUserFetching />
  )

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          charactersList.results?.map((character => (
            <CardUser key={character.id} character={character} />
          )))
        }

      </div>
    </>

  )
}

export default Characters
