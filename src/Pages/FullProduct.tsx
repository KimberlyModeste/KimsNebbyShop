import { useEffect, useState } from 'react'
import Menubar from '../Components/Menubar'
import FDCard from '../Components/FDCard'
import { Params, useParams } from 'react-router-dom'

const FullProduct = () => {
  const { name } : Readonly<Params<string>> = useParams()
  const [title, setTitle] = useState("")

  useEffect(()=>{
    if(name !== undefined)
    {
      setTitle(name.replaceAll("-"," "))
      console.log(title)
    }
  },[title, name])
  
  return (
    <div>
      <Menubar />
      <div>
        <FDCard name={title} />
      </div>
    </div>
  )
}

export default FullProduct
