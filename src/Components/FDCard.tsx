import { useEffect, useState } from 'react'
import { Item } from '../Models/Item';
import { searchItems } from '../Api/ItemApi';
import { Carousel } from "react-responsive-carousel";
import { Image } from 'semantic-ui-react'
import noImage from "../Resources/NoImage.jpg"

interface props {
  name: string
}

//Full Description Card
const FDCard = ({name}:props) => {
  const [item, setItem] = useState<Item>();
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  console.log("Item:",item)
  const images = [
    noImage
  ];

  useEffect(() => {
    if(!name) {
      return
    }

    async function itemsGet() {
      console.log(name)
      var nTemp = name.replaceAll("?", "")
      nTemp = nTemp.replaceAll("%20","")
      nTemp = nTemp.replaceAll("%","")
      nTemp = nTemp.replaceAll(" ","%20")
      nTemp = nTemp.replaceAll("é","%C3%A9")

  
      const temp : string | Item[] = await searchItems("?Name="+nTemp);
      if(typeof(temp)!=='string'){
          const item : Item = temp[0]
          setItem(item)
      }
    }

    if(!hasLoaded){
      itemsGet()
      setHasLoaded(true)
    }
  },[item, hasLoaded, name])

  return (
    <div className='full-desc-card'>
      <div className='fd-card-left'>
      <Carousel useKeyboardArrows={true} className='carousel'>
        {
          item ?
          item.images.map((img, index) => (
          <div className="slide">
            <img alt="sample_file" className='item-image' src={img.url} key={index} />
          </div>
          ))
          :
          images.map((URL, index) => (
            <div className="slide">
              <img alt="sample_file" className='item-image' src={URL} key={index} />
            </div>
          ))
      }

      </Carousel>
        {/* <Carousel className='carousel' >
          {
            item ?
            item.images.map(img =>(
              <div className="slide">
                <img src={img.url} key={0} />
              </div>
                // <Image src={img.url} className='item-image' />
            ))
            :
            // <Carousel.Item>
            //   <Image src={noImage} />
            // </Carousel.Item>
            <></>
          }
        </Carousel> */}
      </div>
      <div className='fd-card-right'>

      </div>
    
    </div>
  )
}

export default FDCard
