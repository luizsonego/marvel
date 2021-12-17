import React from 'react'
import { Link } from 'react-router-dom'

function CardUser({ character }) {
  return (
    <div className=" min-w-80 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-8 px-7 hover:shadow-lg">
      <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{character.name}</h3>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <Link
            to={`/profile/${character.id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
            Ver Perfil
          </Link>

        </div>
      </div>
    </div>
  )
}

export default CardUser
