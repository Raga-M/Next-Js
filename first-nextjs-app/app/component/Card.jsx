import React from 'react'

export default function Card({children}) {
  return (
    <div className='p-10 border border-slate-200 rounded-md dark:shadow-lg shadow-lg hover:shadow-md transition duration-300 '>
{children}

    </div>
  )
}

 