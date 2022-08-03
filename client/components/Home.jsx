import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className='home'>
      <Link to="/myalbums">
        <button>My Albums</button>
      </Link>
    </div>
  )
}

export default Home