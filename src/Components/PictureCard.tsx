import { Card, Image } from 'semantic-ui-react'
import noImage from "../Resources/NoImage.jpg"
import {Link} from 'react-router-dom';


interface props {
  type: boolean //true for semi-circle picture : false for square
  title: string
  price: number
  onSale: boolean
  onSaleBy: number
  url: string[]
}

const PictureCard = ({type, title, price, onSale, onSaleBy, url}:props) => {
  
  return (
    <Link to={"/full-page/"+title.replaceAll(" ", "-")}>
      <Card className={type === true ? "picture-card semi" :"picture-card" } >
        <Image className={type === true ? "picture-card-image semi" :"picture-card-image" } src={ url.length !== 0 ? url[0] : noImage} />
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
    </Link>
  )
}

export default PictureCard
