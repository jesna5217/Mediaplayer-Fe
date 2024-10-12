import React from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
function Landingpage() {
  return (
  <>
  <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
  <Row>
    <Col>
    <h3 className='textstyle' >Welcome To <span className='text-warning'>Media Player</span></h3>
    <p className='textstyle' style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil consequatur ratione eius alias cupiditate quam nam,
       accusamus quae voluptatum dolorum veritatis obcaecati exercitationem harum quas sunt possimus. Deleniti, facilis consectetur.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quasi dignissimos. Voluptatem omnis magnam ipsam facere soluta, nisi ex placeat voluptate temporibus, 
       repudiandae assumenda earum, obcaecati architecto totam minus nihil.</p>
       <Link>
       <button className='btn btn-warning mt-5'><Link to='/home' style={{color:'black',textDecoration:'none'}}>Get Started</Link><i class="fa-solid fa-arrow-right ms-2" ></i>
        </button></Link>
    </Col>
    <Col>
    <img class="image1" src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" className='ms-5' height={'400px'} />
    </Col>
  </Row>
  </Container>
  <div className="container">
    <h3 className='textstyle'>Features</h3>
  <div className='cards d-flex align-items-center justify-content-evenly'>
    <Card style={{width:'18rem'}} className='card'>
      <Card.Img  variant='top' src='https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif' height={'250px'}></Card.Img>
      <Card.Body className='bg-dark'>
        <Card.Title className='textstyle'>Card Title</Card.Title>
        <Card.Text className='textstyle'>Some quick example to build on the car title</Card.Text>
      </Card.Body>
    </Card>

    <Card style={{width:'18rem'}}>
      <Card.Img  variant='top' src='https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif' height={'250px'}></Card.Img>
      <Card.Body className='bg-dark'>
        <Card.Title className='textstyle'>Card Title</Card.Title>
        <Card.Text className='textstyle'>Some quick example to build on the car title</Card.Text>
      </Card.Body>
    </Card>

    <Card style={{width:'18rem'}}>
      <Card.Img variant='top' src='https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif' height={'250px'}></Card.Img>
      <Card.Body className='bg-dark'>
        <Card.Title className='textstyle'>Card Title</Card.Title>
        <Card.Text className='textstyle'>Some quick example to build on the car title</Card.Text>
      </Card.Body>
    </Card>
  </div>
  </div>
  <div className="container mb-5 mt-5 border border-2 border-secondary rounded p-5 text-container">
    <Row className='content-row'>
      <Col className='content'>
      <h3 className='textstyle mb-3'>Simple and Powerful</h3>
      <p className='textstyle'><span className='fs-5 fw-bolder bold'>Play Everything : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, eius quae earum odio obcaecati architecto sit veritatis deleniti sapiente, quis nemo quibusdam deserunt unde perspiciatis commodi doloribus! Dolorum, minima assumenda!</p>
      <p className='textstyle'><span className='fs-5 fw-bolder bold'>Play Everything : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, eius quae earum odio obcaecati architecto sit veritatis deleniti sapiente, quis nemo quibusdam deserunt unde perspiciatis commodi doloribus! Dolorum, minima assumenda!</p>
      <p className='textstyle'><span className='fs-5 fw-bolder bold'>Play Everything : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, eius quae earum odio obcaecati architecto sit veritatis deleniti sapiente, quis nemo quibusdam deserunt unde perspiciatis commodi doloribus! Dolorum, minima assumenda!</p>
      
      </Col>
      <Col>
      <div>
        <iframe width="600" height="400" src="https://www.youtube.com/embed/oZptUgr5kgE" title="Nin Koode Njan Illayo - Pachuvum Athbutha Vilakkum | Fahadh Faasil | Justin Prabhakaran | Akhil S" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        </Col>
    </Row>
  </div>
  </>
  )
}

export default Landingpage