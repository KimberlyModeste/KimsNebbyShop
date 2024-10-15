import { Item } from "../Models/Item"

const all_product : Item[] = [
	{
		id: 1,
		name: "Pokeball Plush",
		price: 3,
		amount: 10,
		onSale: false,
		onSaleBy: 0,
		description: {
      id: 0,
      about: ""
    },
		images: [
      {
        id: 1005,
        url: "https://previews.dropbox.com/p/thumb/ACbQU4c5VMzt63Uh0bC7AsCY3Vbqv-njAtpIjoKKJUEYBLDXcSm2JUX1Y-4CAn8fWIh1lzNCuU7macuCY5kkrWQc-bJrkNvWDgXQP5GqJvCSy8e5vOXaiKmMZofihkQvhQgshK0Zr7tzBEhlQkKqZjryoogKjElmHzXpAg-aBQDGLOSoP6nCBnllxbGEaCyvIkyK1akNgP-M9OR3y3RcLSy00fmNxI9uoPOzr0efoU9uPCxY4_d_hmXqy0y-ZP2U6dVvxYASB8zhk0LXxIFFYmmjfNDLbXcTzLPF2S27X7jqIuT0CuYKz9vk4che0T4CsJ8/p.jpeg"
      },
      {
        id: 1006,
        url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqv4EBSLad_1dF2sf7aNj7n6X6yeSLXqzwsIWIqV6SrzEOBEkn-MDTsJ3332tJKwa-fX4Y-oY6nxgYOTAPhI11fjG1DLrOHgCyKqJaw6dO&usqp=CAc"
      }
  ],
		tags: [
      {
        tag: {  id: 2,  name: 'Pokemon'},
        tagId: 2
      },
      {
        tag: {  id: 3,  name: 'Plushie'},
        tagId: 3
      },
      {
        tag: {  id: 36,  name: 'Pokeball'},
        tagId: 36
      }]
	},
  {
		id: 2,
		name: "Snake Plush",
		price: 10,
		amount: 5,
		onSale: false,
		onSaleBy: 0,
		description: {
      id: 1,
      about: ""
    },
		images: [
      {

        id: 4,
        url: "https://previews.dropbox.com/p/thumb/ACZf_iKhcjqoYGoM7OPSCTJUkGZZiMF32pI7gm1Oz1kapmaEVKpsTG_QBhL8uLJtce7ymna-2n-mLR5mvIg1fCaH08Z6-VrxTBk6SQFahs07GsqTG-f7AGoKAl8CFeMZS7roL33D1gUpOtMi5uVYDpTwhyLsl4NI4nDmuuk88RHvVFcRfxUwfJ23RWhdmbW5iwA3oS0VjDIIbJUaHCDvgMsZzKj-s565RoiNfbUVgUByZfbMz9lMw1h4phTQMle4B14_3-WmXgjlbZ_3vNERzhKD6oTBB5EvnmrdvI-hD3wlg_9u87UVU0ppvFnUZWxiT5SWNbDGxy-PN-SDlcnxK6jG/p.jpeg?is_prewarmed=true"
      }
    ],
		tags: [
      {
        tag: {  id: 1,  name: 'Animal'},
        tagId: 1
      },
      {
        tag: {  id: 3,  name: 'Plushie'},
        tagId: 3
      }]
	},
  {
		id: 3,
		name: "Great Ball Plush",
		price: 3,
		amount: 10,
		onSale: false,
		onSaleBy: 0,
		description: {
      id: 2,
      about: ""
    },
		images: [
      {
        id: 1008,
        url: "data:image/jpeg;base64,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"      
      },
    ],
		tags: [
      {
        tag: {  id: 2,  name: 'Pokemon'},
        tagId: 2
      },
      {
        tag: {  id: 3,  name: 'Plushie'},
        tagId: 3
      },
      {
        tag: {  id: 36,  name: 'Pokeball'},
        tagId: 36
      }]
	},
  {
		id: 6,
		name: "Seasons Tree Painting",
		price: 20,
		amount: 5,
		onSale: false,
		onSaleBy: 0,
		description: {
      id: 3,
      about: ""
    },
		images: [
      {
        id: 1007,
        url: "https://previews.dropbox.com/p/thumb/ACawBgZJD0VRPpVNmrdS6BTFzRQRq-_p89ChsMnNJtIlrMulWCErQw-Ez0-FxfoFnCPUzI-UH0sipfXVhzRhMQqoXTYs1v9mrKKXM32mu4dn5LhifKT4a0bkDSF28Z530ZxI9rn2MBBtQM9Le4Hz7GyvsWGVZJy4EgWLE6iAV7ipXwtjd-dKsk3xoCGLSFypYBhy12kf596_c_jPPXBcJUxMZsesl_SJc1Aukg4hk5FS0KSP3Isv79UFrR5_QmKr7QnT_bIqUK44ZnrvWoEA8kaOIMpIV5uZ1_s22TCfcd8EQj0N0yGINVtACva78HJJIIU/p.png"
      }
    ],
		tags: [
      {
        tag: {  id: 1,  name: 'Animal'},
        tagId: 1
      },
      {
        tag: {  id: 6,  name: 'Dragon'},
        tagId: 3
      },
      {
        tag: {  id: 7,  name: 'Painting'},
        tagId: 7
      }]
	},
  {
		id: 37,
		name: "Saros Stars",
		price: 50,
		amount: 10,
		onSale: false,
		onSaleBy: 0,
		description: {
      id: 4,
      about: ""
    },
		images: [
      {
        id: 1009,
        url: "https://m.media-amazon.com/images/I/61UUVe96ZnS._AC_UF894,1000_QL80_.jpg"
      },
      {
        id: 2001,
        url: "https://m.media-amazon.com/images/I/614YTVKbAxS.jpg"      
      },
    ],
		tags: [
      {
        tag: {  id: 5,  name: 'Space'},
        tagId: 5
      }]
	},
  {
		id: 38,
		name: "Mirror of Clarity",
		price: 50,
		amount: 0,
		onSale: false,
		onSaleBy: 0,
		description: {
      id: 5,
      about: ""
    },
		images: [],
		tags: []
	}
]

export default all_product