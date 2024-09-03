import React from 'react'
import { Card } from 'semantic-ui-react'
import topCardTest from '../Resources/card-top.png'

interface props {
  body: string
  color: number
}


const PostCard = ({body, color}:props) => {
  const colorPicker : string[] = ["#F2ECEC","#F5EDE8","#F4EBE6","#F1EAE3", "#EFE8EA"]

  return (
    <Card id = "templates" className = 'ui centered card'  style={{marginTop:"2rem",marginBottom:"2rem"}}>
      <Card.Header>
        <img src={topCardTest} style={{width: '100%', height:'100px', backgroundColor: colorPicker[color], borderRadius: '30px 0px 10px 10px'}}></img>
      </Card.Header>
      <Card.Description>
        {body}
      </Card.Description>
      <Card.Header>
        <img id="template-bottom" src={topCardTest} style={{width: '100%', height:'100px', backgroundColor: colorPicker[color], borderRadius: '0px 30px 10px 10px'}}></img>
      </Card.Header>
    </Card>
	)
}

export default PostCard
