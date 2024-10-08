import React, {useEffect, useState} from 'react'
import { Item } from '../Models/Item'
import { searchItems } from '../Api/ItemApi'
import PictureCard from '../Components/PictureCard'


const PictureCardList = () => {
	const [itemsArr, setItemsArr] = useState<Item[]>();
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() =>{
    if(!hasLoaded){
      itemsGet()
      setHasLoaded(true)
      console.log("Items Arr", itemsArr)
    }
  },[itemsArr, hasLoaded])
  
  async function itemsGet() {
    const temp : string | Item[] = await searchItems("");
    if(typeof(temp)!=='string'){
        setItemsArr(temp)
    }
  }
  return (
	<div>
    {/* <PictureCard type={false} title="Title? something price" price={1} ></PictureCard> */}
    {
      itemsArr ? 
      itemsArr.map(item => (
        <PictureCard 
          type={false} 
          title={item.name} 
          price={item.price} 
          onSale={item.onSale} 
          onSaleBy={item.onSaleBy}
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
