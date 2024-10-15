import React, {useEffect, useState} from 'react'
import { Item } from '../Models/Item'
import { searchItems } from '../Api/ItemApi'
import PictureCard from '../Components/PictureCard'


const PictureCardList = () => {
	const [itemsArr, setItemsArr] = useState< Item[]>([]);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() =>{
    if(!hasLoaded){
      itemsGet()
      setHasLoaded(true)
    }
  },[itemsArr, hasLoaded])
  
  async function itemsGet() {
    // const temp : string | Item[] = await searchItems("");
    // if(typeof(temp)!=='string'){
    //     setItemsArr(temp)
    // }
    
    const temp : (string | Item | undefined)[]  = await searchItems("");
    if(typeof(temp) !== "string")
    {
      let arrTemp : Item[] = [];

      temp.map(t => {
        if(t !== undefined && typeof(t) !== "string")
          arrTemp.push(t)
      })
      setItemsArr(arrTemp!)
      setHasLoaded(true)

    }
  }


  return (
	<div>
    {
      itemsArr ? 
      itemsArr.map(item => 
        (
          <PictureCard 
            type={false} 
            title={item.name} 
            price={item.price} 
            onSale={item.onSale} 
            onSaleBy={item.onSaleBy}
            url={item.images.map(image => image.url)}
        ></PictureCard>
      ))
      :
      <></>
    }

	</div>
  )
}


PictureCardList.propTypes = {

}


export default PictureCardList
