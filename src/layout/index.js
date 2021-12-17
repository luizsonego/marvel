import React from 'react'
import Navbar from './Navbar'

function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto  md:p-5 dark:bg-gray-900 bg-gray-50">
        <div className=" py-7 md:py-5">
          {children}
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
