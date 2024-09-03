import React from 'react'
import Menubar from '../Components/Menubar'
import PostCard from '../Components/PostCard'

const Home = () => {
  return (
    <div>
      <Menubar />
      <div>
        <PostCard body='something something' color={3}/>
      </div>
      
    </div>
  )
}

export default Home
