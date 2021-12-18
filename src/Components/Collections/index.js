import React from 'react'
import { useQuery } from 'react-query';
import { axios } from '../../services';
import CollectionsFetching from './CollectionsFetching'

const getListCollections = async (uri) => {
  const { data } = await axios.get(`https://gateway.marvel.com/v1/public/characters/${uri}`)
  return data.data
}

function Collections({ uri }) {
  const { isLoading, data: collection } = useQuery(['collection', uri], () => getListCollections(uri))

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
    </>
  )
}

export default Collections
