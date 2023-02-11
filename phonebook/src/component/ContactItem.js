import React from 'react'
import {Row,Col} from 'react-bootstrap'

const ContactItem = ({item}) => {

    
  return (
    <Row>
        <Col lg={3}>
            <img width={80} src='https://media.licdn.com/dms/image/C4D0BAQHoF4WE36349A/company-logo_200_200/0/1649886588741?e=2147483647&v=beta&t=9c8j56Ix5iy6JrmCAKn-PI8-z06Tf6N_J5hjJD0J-40'/>
        </Col>
        <Col lg={9}>
            <div>{item.name}</div>
            <div>{item.num}</div>
        </Col>
    </Row>
  
  )
}

export default ContactItem