import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react'
import { Item } from '../Models/Item';
import { searchItems } from '../Api/ItemApi';

import { Carousel } from "react-responsive-carousel";
import { Card, Grid, GridColumn, GridRow, Image } from 'semantic-ui-react'
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

  
      const temp : string | Item = (await searchItems("?Name="+nTemp))[0];
      if(temp === undefined)
      {
        navigate("/")
      }
        
      if(typeof(temp)!=='string'){
          let arrTemp : string[] = temp.images.map(img => {return img.url});
          setImages(arrTemp)
      }

    }

    if(!hasLoaded){
      itemsGet()
      setHasLoaded(true)
      $('.slick-dots').insertBefore('.slick-list');
    }
  },[hasLoaded, name, navigate])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
                  <Image src={img} />
                </div>
              ))
              :
              <div>
                <Image src={noImage} />
              </div>
            }
            </Slider>
          </GridColumn>

          <GridColumn className='fdc-column right'>

          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  )
}

export default FDCard
