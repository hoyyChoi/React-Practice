import { type } from '@testing-library/user-event/dist/type';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Create from './component/Create';
import Search from './component/Search';
import { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import ContactList from './component/ContactList';

function App() {

  const [arr,setArr] = useState([])
  console.log(arr)

  return (
    <div>
      <h1 style={{display:"flex",justifyContent:"center"}}>PHONE BOOK</h1>
      <Container>
        <Row>
          <Col>
            <Create />
          </Col>
          <Col>
            <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
