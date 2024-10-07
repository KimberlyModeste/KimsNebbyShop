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
  })
  
  async function itemsGet() {
    const temp : string | Item[] = await searchItems("");
    if(typeof(temp)!=='string'){
        setItemsArr(temp)
    }
  }
  return (
	<div>
	  
	</div>
  )
}


PictureCardList.propTypes = {

}


export default PictureCardList
