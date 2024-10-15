import { useEffect, useState } from 'react'
import FDCard from '../Components/FDCard'
import { Params, useParams } from 'react-router-dom'

const FullProduct = () => {
  const { name } : Readonly<Params<string>> = useParams()
  const [title, setTitle] = useState("")

  useEffect(()=>{
    if(name !== undefined)
    {
      setTitle(name.replaceAll("-"," "))
    }
  },[title, name])
  
  return (
    <div>
      <div>
        <FDCard name={title} />
      </div>
    </div>
  )
}

export default FullProduct
