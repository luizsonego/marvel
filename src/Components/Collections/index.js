import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { axios } from '../../services';
import CollectionsFetching from './CollectionsFetching'

const getListCollections = async (uri, page, limit) => {
  const { data } = await axios.get(`https://gateway.marvel.com/v1/public/characters/${uri}?limit=${limit}&offset=${page}`)
  return data.data
}

function Collections({ uri }) {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(9)
  const { isLoading, data: collection } = useQuery(['collection', uri, page, limit], () => getListCollections(uri, page, limit))

  if (isLoading) return (<CollectionsFetching />)

  return (
    <>
      <div className="columns-2 md:columns-3">
        {
          collection.results?.map((collectionList, index) => (
            <div key={index} className="mb-3">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg" >
                <p className="text-center mt-3">{collectionList.title}</p>
                <img className="w-full mb-5 bg-gray-200" src={`${collectionList.thumbnail?.path}.${collectionList.thumbnail?.extension}`} alt="" />
              </div>
            </div>
          ))
        }
      </div>

      {
        collection.total >= limit ? (
          <div className="flex justify-center gap-4 mt-7">
            <Link to="#"
              onClick={() => setPage(page => page - limit)}
              disabled={isLoading || page <= 0}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Página Anterior</Link>

            <Link
              to="#"
              onClick={() => setPage(page => page + limit)}
              disabled={isLoading}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Proxima Página</Link>
          </div>
        ) : null
      }

    </>
  )
}

export default Collections
