import React from 'react'

function Details() {
    const {name}=useContext (LastContext)
    const{userid}=useParams()
    const userIdx =parseInt(userid);
    const currentdata = name.find(items =>items.Id  === userIdx);
  return (
    <div>

<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{currentdata.Name}</Card.Title>
      <h1>{currentdata.age}</h1>
      <h1>{currentdata.gender}</h1>
      
      
          
      <Button variant="primary">GO</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default Details