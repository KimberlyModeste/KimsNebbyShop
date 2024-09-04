import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import imgTest from "../Resources/ItemTest.jpg"

interface props {
  type: string,
  body: string
  nextText: string
}

const PictureCard = ({type, body, nextText}:props) => {

  return (
    <Card className={type === "sc" ? "picture-card semi" :"picture-card" }  >
      <Image className={type === "sc" ? "picture-card-image semi" :"picture-card-image" } src={imgTest} />
      <Card.Description>
        {body}
      </Card.Description>
      {
        type === "sc" ?
        <Button className='semi'>{nextText}</Button>
        :
        <a href="" className="picture-card-link">{nextText} -{'>'}</a>
      }
    </Card>
  )
}

export default PictureCard
