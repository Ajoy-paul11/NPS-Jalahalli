import React from 'react'
import { Link } from 'react-router-dom'
import { BiHome } from "react-icons/bi";


function ErrorComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f4f5ff]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-4">Oops! Page not found</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for is temporarily unavailable, or might have been removed, or had its name changed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors duration-200"
        >
          <BiHome className="mr-2 h-7 w-7" />
          Go back home
        </Link>
      </div>
    </div>
  )
}

export default ErrorComponent