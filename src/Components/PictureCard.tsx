import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import imgTest from "../Resources/ItemTest.jpg"


interface props {
  type: boolean //true for semi-circle picture : false for square
  title: string
  price: number
  onSale: boolean
  onSaleBy: number
}

const PictureCard = ({type, title, price, onSale, onSaleBy}:props) => {
  

  return (
    <Card className={type === true ? "picture-card semi" :"picture-card" }>
      <Image className={type === true ? "picture-card-image semi" :"picture-card-image" } src={imgTest} />
      <Card.Header className='picture-card-title'>{title}</Card.Header>
      <Card.Description className='picture-card-price'>
        {
          onSale ?
          <>${(price*(onSaleBy/100)).toFixed(2)}   <s>${price.toFixed(2)}</s></>
          :
          `$${price.toFixed(2)}`
        }
      </Card.Description>
    </Card>
  )
}

export default PictureCard
