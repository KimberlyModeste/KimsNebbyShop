import { Images } from "./Image"
import { Tags } from "./Tags"

export interface Item {
	id: number
	name: string
	desc: string
	price: number
	onSale: boolean
	onSaleBy: number
	images: Images[]
	tags: Tags[]
};