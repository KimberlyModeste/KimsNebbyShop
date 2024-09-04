import React from 'react'
import Menubar from '../Components/Menubar'
import PostCard from '../Components/PostCard'
import PictureCard from '../Components/PictureCard'

const Home = () => {
  return (
    <div>
      <Menubar />
      <div>
        <PictureCard type="sc" body="ROW FOR YOUR LIVES!!!!" nextText="Apollo"/>
        <PictureCard type="sq" body="DROWN IN YOUR SORROWS AND FEARS! CHOKE ON YOUR BLOOD AND YOUR TEARS!! BLEED TILL YOU'VE RUN OUT OF YEARS!!! WE MUST DO WHAT IT TAKES TO SURVIVE!!!!" nextText='Hephestus'/>
        <PictureCard type="sq" body="GIVE UP YOUR HONOR AND FAITH! LIVE UP YOUR LIFE AS A WRAITH!! DIE IN THE BLOOD WHERE YOU BATHE!!! WE MUST DO WHAT IT TAKES TO SURVIVE!!!!" nextText='Aphrodite'/>
        <PictureCard type="sq" body="We are the same you and " nextText='Ares'/>
        <PictureCard type="sq" body="I~~~~" nextText='Hera'/>
        <PictureCard type="sc" body="I~~~~" nextText='THUNDER BRINGER'/>
      </div>
      
    </div>
  )
}

export default Home
