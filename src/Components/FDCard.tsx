import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react'
import { Item } from '../Models/Item';
import { searchItems } from '../Api/ItemApi';

import { Card, Grid, GridColumn, GridRow, Image, Button, Dropdown } from 'semantic-ui-react'
import noImage from "../Resources/NoImage.jpg"
import Slider from "react-slick";
import $ from "jquery"
import { useNavigate } from 'react-router-dom';
import { Options } from '../Models/Options';
import rand_desc from '../Resources/RandomDesc'



interface props {
  name: string
}

//Full Description Card
const FDCard = ({name}:props) => {
  const [images, setImages] = useState<string[]>();
  const [item, setItem] = useState<Item>();
  const [options, setOptions] = useState<Options[]>();
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [hasArrows, setHasArrows] = useState<boolean>(true);
  const [funnyrand, setFunnyRand] = useState<number>(1);
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
            let arrTemp : string[] | Item[] = temp[0].images.map(img => img.url)
            let itemTemp : string | Item = temp[0]
            let optionTemp : Options[] = [];

            for(let i = 0; i < (itemTemp.amount <= 10 ? itemTemp.amount : 10); i++ )
            {
              optionTemp.push({
                key: (i+1).toString(),
                text: "Quantity:   "+(i+1).toString(),
                value: (i+1).toString(),
                content: (i+1).toString()
              })
            }
            
            console.log("Temp: ",temp[0])
            let min = 0
            let max = 3
            let rand : number = Math.floor(min + Math.random() * (max - min));
            setFunnyRand(rand)
            console.log("funny desc", rand_desc[rand])
            setOptions(optionTemp)
            setItem(itemTemp)
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
            <div className='fdc-right-card'>
              {
                item ? 
                <Card className="fdc-card">
                  <Card.Header className="fdc-card-head">{item!.name}</Card.Header>
                  <div className='fdc-border'></div>
                  <Card.Description className='fdc-desc'>
                    <div className='fdc-price'>
                      {
                        item.onSale ?
                        <>
                          <div className='fdc-onSaleBy'>- {item.onSaleBy}%</div> 
                          <div>${(item.price*(item.onSaleBy/100)).toFixed(2)} </div>
                          <div className='fdc-list-price'><s>Original price:  ${item.price.toFixed(2)}</s></div>
                        </>
                        :
                        `$${item.price.toFixed(2)}`
                      }
                    </div>
                  </Card.Description>
                  <div className='fdc-border'></div>
                  <Card.Description className='fdc-desc'>
                  <div className='fdc-about'>
                      {
                        item ?
                          item.description.about !== "" ?
                            <p>{item.description.about}</p>
                          :
                            <p>{rand_desc[funnyrand]}</p>
                        :
                        <p>{rand_desc[funnyrand]}</p>
                      }
                    </div>
                  </Card.Description>
                  <Card.Content>
                    {
                      item ?
                        item.amount > 0 ?
                        <div>
                          <div className='in-stock'>In Stock</div>
                          <div className='quantity'>
                            <Dropdown 
                              // search
                              selection
                              fluid
                              allowAdditions
                              upward={false}
                              options={options} 
                              defaultValue={options ? options[0].value : 1}
                            />
                          </div>
                          <Button className='fdc-atc-button'>Add To Cart</Button>
                        </div>
                        :
                        <div>
                          <div className='not-in-stock'>Not In Stock</div>
                          <div>
                            <p>We're out of stock, but give us your info and we'll send you one email when this product is back in stock!</p>
                            <Button className='fdc-atc-button'>Notify Me</Button>
                          </div>
                        </div>
                      :
                      <></>
                    }
                    {/* <Button className='fdc-atc-button'>Add To Cart</Button> */}
                  </Card.Content>
                </Card>
                :
                <></>
              }
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  )
}

export default FDCard
