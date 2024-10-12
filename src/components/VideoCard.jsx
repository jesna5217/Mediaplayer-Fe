import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VideoCard({displayVideo, setDeletVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    const today=new Date;
    //copied from init.datetimeformat
    const timeStamp=new Intl.DateTimeFormat('en-GB', {
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
      
    }).format(today);
    console.log(timeStamp);
    const reqBody={
      url:displayVideo.youtubeLink,
      caption:displayVideo.caption,
      timeStamp:timeStamp
    }
    await addToHistory(reqBody);
  
    
    setShow(true);
  }
const deleteVideoItem=async(id)=>{
  const response=await deleteVideo(id);
  console.log('response of delete');
  console.log(response);
  if(response.status===200){
    setDeletVideoStatus(true)
console.log('Successfully deleted the video')
  }
  else{
    console.log
    ('Something went wrong')
  }
  
}
const dragStarted=(e,id)=>{
  console.log('DRAG STARTED');
  console.log('video with id started dragging',id);
  //to transfer the data
  e.dataTransfer.setData('videoId',id)
  //next go to where we are dropping ie category
}
  return (
    <>
    
     <Card style={{ width: '16rem',height:'350px'}} draggable onDragStart={(e)=>dragStarted(e,displayVideo.id)}>
      <Card.Img variant="top" src={displayVideo.imageUrl} height='250px' style={{padding:'5px'}} onClick={handleShow} />
      <Card.Body>
      <div className='d-flex justify-content-between'>
      <Card.Title>{displayVideo.caption} </Card.Title>
      <Button variant='danger' onClick={()=>deleteVideoItem(displayVideo.id)}><i class='fa-solid fa-trash'></i></Button>
      </div>
       
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  

    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width='100%' height='400px' src={`${displayVideo.youtubeLink}`} title="YouTube video player" frameborder="0" ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default VideoCard