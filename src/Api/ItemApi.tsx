import axios from "axios"
import { Item } from "../Models/Item"

export const searchItems = async (query : string) =>{
	try {
		const data = await axios.get<Item[]>('http://localhost:5261/kimsnebbyshopserver/item'+query,
			{
				headers:{
					"Content-Type":"application/json; charset=utf-8"
				}
			}
		)
		console.log("This is data", data.data)
		return data.data
	}
	catch (error){
		if(axios.isAxiosError(error)){
			console.log("Error Message: ", error.message)
			return error.message
		}
		else {
			console.log("Unexpected error: ", error)
			return "An unexpected error has occured."
		}
	}
}