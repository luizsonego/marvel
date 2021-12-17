import React from 'react'

function ProfileFetching() {
  return (
    <div className="container animate-pulse ">
      <div className="md:flex no-wrap md:-mx-2 ">
        <div className="w-full md:w-3/12 md:mx-2">
          <div className="image overflow-hidden">
            <div className="h-72 w-full mx-auto bg-gray-200 rounded" ></div>
          </div>
          <div className="mx-5 md:mx-1 mb-8">
            <div className="h-8 bg-gray-200 rounded my-3"></div>
            <div className="h-5 bg-gray-200 rounded my-3"></div>
            <div className="h-14 bg-gray-200 rounded my-3"></div>
          </div>
        </div>

        <div className="md:w-9/12 mx-2 h-64 py-5 px-1">
          <div className="flex justify-center">
            <div className="w-full">
              <div className="w-1/2 h-6 bg-gray-200 rounded my-3"></div>
              <div className="w-1/2 h-4 bg-gray-200 rounded my-3"></div>
            </div>
            <div className="w-full">
              <div className="w-1/2 h-6 bg-gray-200 rounded my-3"></div>
              <div className="w-1/2 h-4 bg-gray-200 rounded my-3"></div>
            </div>
            <div className="w-full">
              <div className="w-1/2 h-6 bg-gray-200 rounded my-3"></div>
              <div className="w-1/2 h-4 bg-gray-200 rounded my-3"></div>
            </div>
            <div className="w-full">
              <div className="w-1/2 h-6 bg-gray-200 rounded my-3"></div>
              <div className="w-1/2 h-4 bg-gray-200 rounded my-3"></div>
            </div>
          </div>
        </div>


      </div>
    </div >
  )
}

export default ProfileFetching
