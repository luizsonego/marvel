import React, { useEffect, useState } from 'react'
import api from '../../services/api';

function Collections({ uri }) {
  const [collection, setCollection] = useState([]);

  console.log('uri', uri)
  useEffect(() => {
    try {
      api.get(uri).then((response) => {
        setCollection(response.data.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [setCollection, uri]);

  // const [collection, setCollection] = useState([]);
  // useEffect(() => {
  //   async function loadCollection() {
  //     const response = await api.get(url)
  //     const [col] = response.data.data.results
  //     setCollection(col)
  //   }
  //   loadCollection()
  // }, [])

  console.log('collection', collection)
  return (
    <div className="columns-2 md:columns-3">

      {
        collection.map((collectionList) => (
          <img className="w-full mb-5 bg-slate-100" src={`${collectionList.thumbnail?.path}.${collectionList.thumbnail?.extension}`} alt="" />
        ))
      }


    </div>
  )
}

export default Collections
