import { Description } from "./Description"
import { Images } from "./Image"
import { Tags } from "./Tags"

export interface Item {
	id: number
	name: string
	description: Description
	price: number
	onSale: boolean
	onSaleBy: number
	images: Images[]
	tags: Tags[]
	amount: number
};