import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react'
import { Item } from '../Models/Item';
import { searchItems } from '../Api/ItemApi';

import { Card, Grid, GridColumn, GridRow, Image, Icon } from 'semantic-ui-react'
import noImage from "../Resources/NoImage.jpg"
import Slider from "react-slick";
import $ from "jquery"
import { useNavigate } from 'react-router-dom';



interface props {
  name: string
}

//Full Description Card
const FDCard = ({name}:props) => {
  const [images, setImages] = useState<string[]>();
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [hasArrows, setHasArrows] = useState<boolean>(true);
  const navigate = useNavigate();


  useEffect(() => {
    if(!name) {
      return
    }

    async function itemsGet() {
      var nTemp = name.replaceAll("?", "")
      nTemp = nTemp.replaceAll("%20","")
      nTemp = nTemp.replaceAll("%","")
      nTemp = nTemp.replaceAll(" ","%20")
      nTemp = nTemp.replaceAll("é","%C3%A9")

      const temp : (string | Item | undefined)[] = (await searchItems("?Name="+nTemp+"&isExactly=true"));
      if(temp.length===0)
      {
        navigate("/")
      }
      else if(typeof(temp)!=='string'){
          if(temp[0]?.valueOf() !== undefined && typeof(temp[0])!=='string')
          {
            let arrTemp : string[] | Item[] | undefined = temp[0].images.map(img => img.url)
            setImages(arrTemp)
            setHasArrows(arrTemp.length > 1)
            console.log(arrTemp.length)
          }
          else
            return undefined
      }

    }

    if(!hasLoaded){
      itemsGet()
      setHasLoaded(true)
      const slicker = document.getElementsByClassName("slick-slider slick-initialized")[0]
      const parent : HTMLDivElement = document.createElement('div')
      const cList  = document.querySelectorAll(".slick-list")
      parent.className= "image-container"
      cList.forEach(e => parent.appendChild(e))
      slicker.appendChild(parent)
      $('.slick-dots').insertBefore('.slick-prev');
    }
  },[hasLoaded, name, navigate])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: hasArrows,
    appendDots: (dots: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => (
      <div>
        <ul className='carousel-dots'> {dots} </ul>
      </div>
    ),
    customPaging: (i : number)  => (

      <div>
        {
          images !== undefined && images.length > 0 ?
          <Image src={images[i]} />
          :
          <Image src={noImage} />
        }
      </div>
    )
  };

  return (
    <div className='full-desc-card'>
      <Grid>
        <GridRow>
          <GridColumn className='fdc-column left'>
            <Slider {...settings}>
            {
              images !== undefined && images.length > 0 ?
              images.map(img => (
                <div>
                  <Image className='carousel-img' src={img} />
                </div>
              ))
              :
              <div>
                <Image className='carousel-img' src={noImage} />
              </div>
            }
            </Slider>
          </GridColumn>

          <GridColumn className='fdc-column right'>
            <Card>Hi</Card>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  )
}

export default FDCard
