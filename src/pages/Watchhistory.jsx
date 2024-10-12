import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { deleteHistory, getHistory } from '../services/AllApi';


function Watchhistory() {
  const [allHistory,setAllHistory]=useState([])
  const getWatchHistory=async()=>{
    const {data}=await getHistory();
    setAllHistory(data);
    console.log(data);
    
  }
  useEffect(()=>{
    getWatchHistory();
  },[])
  const handleDelete=async(historyId)=>{
 await deleteHistory(historyId);
 //then just call getWatchHistory it will fetch all the remaining datas so that data will be removed fro the screen while clicking
 //delete button
 getWatchHistory()
  }
 
  return (
    <>
    <div className='container mt-5 d-flex justify-content-between mb-5'>
      <h3 className='textstyle'>Watch History</h3>
    <Link  to='/home' style={{textDecoration:'none', color:'white',fontWeight:'750',fontsize:'20'}}><i class='fa-solid fa-arrow-left me-2'></i>
    Back to Home</Link>
    </div>
    <table className='table container mb-5 mt-5' data-bs-theme='dark'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          allHistory.length>0?
          allHistory.map((item)=>(
            <tr>
            <td>{item.id}</td>
            <td>{item.caption}</td>
  
            <td>{item.url}</td>
            <td>{item.timeStamp}</td>
            <td><Button variant='danger' onClick={()=>handleDelete(item?.id)}><i className='fa-solid fa-trash' ></i></Button></td>
            
          </tr>
          )):<p  style={{fontSize:'30px'}} className='text-warning m-4'>No item found</p>
        }
       
        
      </tbody>
    </table>
    </>
  )
}

export default Watchhistory