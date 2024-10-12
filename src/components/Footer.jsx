import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='footer d-flex align-items-center justify-content-evenly'>
        <div style={{ width: '400px' }}>
          <h5 className='textstyle'><i class="fa-solid fa-video text-warning me-3" ></i>
            Media Player </h5>
          <p style={{ textAlign: 'justify' }} className='textstyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed neque et magna tempor sagittis ut
            vitae magna. Cras a neque neque. Nunc bibendum efficitur ligula, sed cursus sem ullamcorper sed.
            Nullam nec lorem ut nulla ultricies auctor. Mauris non justo et augue tincidunt pulvinar
          </p>
        </div>

        <div className='d-flex flex-column ms-5'>
          <h4 className='textstyle'>Links</h4>
          <Link to='/' style={{textDecoration:'none',color:'white'}}>Landing Page
          </Link>
          <Link to='/home' style={{textDecoration:'none',color:'white'}}>
            Home Page</Link>
          <Link to='/watch' style={{textDecoration:'none',color:'white'}}>Watch History</Link>
        </div>
        <div className='d-flex flex-column ms-5'>
          <h4 className='textstyle'>Guides</h4>
          <Link to='https://react.dev/' target='_blank' style={{textDecoration:'none',color:'white'}}>React
          </Link>
          <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to='https://www.npmjs.com/package/json-server' target='_blank' style={{textDecoration:'none',color:'white'}}>Json Server</Link>
        </div>
        <div className='ms-5'>
          <h4 className='textstyle'>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your email id' />
            <button className='btn btn-warning ms-2'>SUBSCRIBE</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center mt-3'>
          <Link to='https://www.instagram.com/' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i>
          </Link>
          <Link to='/home' style={{textDecoration:'none',color:'white'}}>
          <i class="fa-brands fa-twitter fa-2x"></i></Link>
          <Link to='/watch' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          <Link to='/watch' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i> </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer