import React from 'react'

function CardUserFetching() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pt-8 px-14">
        <div className="animate-pulse">
          <div className="flex flex-col items-center pb-10">
            <div className="w-24 h-24 mb-3 bg-gray-200 rounded-full "></div>
            <div className=" bg-gray-200 rounded  w-3/5 h-5 "></div>
            <div className="space-y-3 ">
              <div className="grid grid-cols-2 gap-4 ">
                <div className="mt-5 bg-gray-200 rounded w-20 h-7 "></div>
                <div className="mt-5 bg-gray-200 rounded w-20 h-7 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardUserFetching
