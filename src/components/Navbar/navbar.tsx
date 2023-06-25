import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div>
      <div className=" navbar bg-base-100">
        <Link className="  z-50 btn btn-ghost normal-case text-xl" href={'/'}>React Hooks</Link> 
      </div>
    </div>
  )
}

export default navbar
