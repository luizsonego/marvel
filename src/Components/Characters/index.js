import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { axios, queryClient } from '../../services';
import CardUser from '../CardUser';
import CardUserFetching from '../CardUser/CardUserFetching';

const getCharacters = async (page, limit) => {
  const { data } = await axios.get(`characters?limit=${limit}&offset=${page}`)
  return data.data
}

function Characters() {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(12)
  const {
    isFetching,
    isLoading,
    data: charactersList
  } = useQuery(['characters', page, limit], () => getCharacters(page, limit), { keepPreviousData: true })

  useEffect(() => {
    setLimit(limit + page)
  }, [limit, page])

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

      <div className="flex justify-center gap-4 mt-7">
        <Link to="#"
          onClick={() => setPage(page => page - limit)}
          disabled={isLoading || page === 0}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Página Anterior</Link>

        <Link
          to="#"
          onClick={() => setPage(page => page + limit)}
          disabled={isLoading}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Proxima Página</Link>
      </div>
    </>

  )
}

export default Characters
