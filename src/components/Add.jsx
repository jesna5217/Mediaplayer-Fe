import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';;
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //state to stop all form field values
 //created as objects
    const [VideoDetails,setVideoDetails]=useState({
    
      caption:'',
      imageUrl:'',
      youtubeLink:''
    })

    const addVideoDetails=async()=>{
     // console.log(VideoDetails);
      
         const {caption,imageUrl,youtubeLink}=VideoDetails;
         if( !caption || !imageUrl || !youtubeLink){
          //alert('Please enter the form completely') 
          toast.warning('Please fll the form completely')
         }
         else{
         console.log('final Data');
         console.log(VideoDetails);
         //function calling goes to  AllApi and data will be aded to viddeos db
         const response=await uploadVideo(VideoDetails);
         console.log(response);
         if(response.status===201){
          setUploadVideoStatus(response.data)
         alert(`${response.data.caption} sucessfully uploaded`);
          
            handleClose()
            setVideoDetails(
              {
    
                caption:'',
                imageUrl:'',
                youtubeLink:''
              }
            )
            //otherwise data which is in the state will be uploaded again if we enter with empty columns

         }
         else{
      //  alert('Something went wrong')
      toast.error('Something went wrong')
         }
         
         }


    }
   const getEmbededLink=(data)=>{
    console.log('inside embedded link');
    //copied frpm embed code of any youtube link
    const link=`https://www.youtube.com/embed/${data.slice(-11)}`
    console.log(link);
    //gets the thumbnail of vdeo
    let image_url=`https://img.youtube.com/vi/${data.slice(-11)}/hqdefault.jpg`
    setVideoDetails({...VideoDetails,youtubeLink : link,imageUrl:image_url})
    
   }
  return (
    <>
        <ToastContainer />

    <div className='d-flex align-items-center'>
        <h5 className='textstyle'>Upload A New Video</h5>
        <button className='btn' onClick={handleShow}><i class='fa-solid fa-cloud-arrow-up fs-5'style={{color:'white'}}></i></button>
        </div>
        <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
        <Modal.Header closeButton>
          <Modal.Title><i class='fa-solid fa-film text-warning me-3'></i><span className='textstyle'>Upload Video</span></Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
            <p className='textstyle' style={{fontWeight:'700'}}>Please fill the form</p>
        <Form className='border border-secondary p-3 rounded' data-bs-theme='light'>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideoDetails({...VideoDetails,videoId:e.target.value})} />
        
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideoDetails({...VideoDetails,caption:e.target.value})} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Control type="text" placeholder="Enter your thumbnail URL" onChange={(e)=>setVideoDetails({...VideoDetails,imageUrl:e.target.value})} />
       
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Control type="text" placeholder="Enter Youtube video link" onChange={(e)=>getEmbededLink(e.target.value)}/>
       
      </Form.Group>
       
    </Form>

        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
           CANCEL
          </Button>
          <Button variant="primary" onClick={addVideoDetails} className='btn btn-warning'>
         UPLOAD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add