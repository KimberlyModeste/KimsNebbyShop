import axios from "axios"
import { Item } from "../Models/Item"
import all_product from '../Resources/AllProductTest'

export const searchItems = async (query : string) =>{
	// try {
	// 	const data = await axios.get<Item[]>('http://localhost:5261/kimsnebbyshopserver/item'+query,
	// 		{
	// 			headers:{
	// 				"Content-Type":"application/json; charset=utf-8"
	// 			}
	// 		}
	// 	)
	// 	console.log("This is data", data.data)
	// 	return data.data
	// }
	// catch (error){
	// 	if(axios.isAxiosError(error)){
	// 		console.log("Error Message: ", error.message)
	// 		return error.message
	// 	}
	// 	else {
	// 		console.log("Unexpected error: ", error)
	// 		return "An unexpected error has occured."
	// 	}
	// }
	if(query==="")
	{
    if(all_product.filter(function(val){if(val.id !== undefined){return val}}))
    {
      // console.log
      return all_product
    }
		  return [""]
  
	}
	else {
    console.timeLog(query)
    let temp : string = query.replace("?", "").split("&").map(
      function(t):string 
      {
        if(t.search("Name") > -1)
        {
          return t
        }
        else
        {
          return ""
        }
      }
    ).toString()
    temp = temp.split("=")[1].replaceAll("%20", " ")
    temp = temp.substring(0, temp.length-1)
    if(query.match("isExactly"))
    {
      return [all_product.find((val) => val.name === temp)]
    }
    else
    {
      all_product.filter(function(val){return val.name.includes(temp)})
    }
    return all_product
	}
}