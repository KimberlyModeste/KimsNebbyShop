import React, { useEffect } from 'react'

const Background = () => {
  useEffect(()=>{
    if(document.getElementsByTagName("body")[0]){

      var scrollHeight : number = document.getElementsByTagName("body")[0].scrollHeight //The whole scrolling page
      var top : number = document.getElementsByClassName("top")[0].scrollHeight         //The height of the top bg element
      var spacer : number = document.getElementsByTagName("body")[0].clientHeight       //50vh half the height of the screen

      scrollHeight = scrollHeight - (top+ spacer/2)   //Make the bottom scroll height the whole screen minue the top and the spacer to get the correct height
      document.documentElement.style.setProperty("--scroll-height", scrollHeight.toString()+"px") //Add it to the css file
    }

  })

  return (
  <div>
    <div className="background-div">
      <div className='top background'></div>
      <div className='back background'></div>
    </div>
    <div className='b-background'></div>
  </div>
  )
}

export default Background
