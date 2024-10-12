import React, {  useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/AllApi'
import {Col, Container, Row} from 'react-bootstrap'

function View({uploadVideoStatus}) {
  const [allVideos,setAllVideos]=useState([])
  const[deleteVideoStatus,setDeletVideoStatus]=useState(false)
  const getVideo = async()=>{
    const response=await getAllVideos();
    console.log('==all videos==');
    console.log(response);
    const {data}=response;
    //data contains the user input it will be store to allVideos
setAllVideos(data);

    
  }
useEffect(()=>{
  getVideo()
  setDeletVideoStatus(false)
  //when we delete next item again its value changes and getVideo will be called again
},[uploadVideoStatus,deleteVideoStatus])
  return (
    <>
 
   <Row>
    {
      allVideos.length>0?
      allVideos.map((videos)=>(
<Col sm={12} lg={2} md={2} xl={3} className='m-4'>

<VideoCard displayVideo={videos} setDeletVideoStatus={setDeletVideoStatus}/>
</Col>
      )):<p style={{fontSize:'30px'}} className='text-warning m-4'>Nothing to display</p>
    }
   </Row>

    </>
  )
}

export default View