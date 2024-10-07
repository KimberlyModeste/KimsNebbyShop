import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import imgTest from "../Resources/ItemTest.jpg"

interface props {
  type: boolean, //true for semi-circle picture : false for square
  body: string
  nextText: string
}

const PictureCard = ({type, body, nextText}:props) => {
  

  return (
    <Card className={type === true ? "picture-card semi" :"picture-card" }  >
      <Image className={type === true ? "picture-card-image semi" :"picture-card-image" } src={imgTest} />
      <Card.Description>
        {body}
      </Card.Description>
      {
        type === true ?
        <Button className='semi'>{nextText}</Button>
        :
        <a href="" className="picture-card-link">{nextText} -{'>'}</a>
      }
    </Card>
  )
}

export default PictureCard
