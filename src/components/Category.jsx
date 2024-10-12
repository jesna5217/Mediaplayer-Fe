import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';;
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { addCategory, deleteCategory, getAllCategory, getAllVideosById, updateCategory } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';
import CategoryCard from './CategoryCard';
function Category() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [categoryName,setCategoryName]=useState();
    const [allCategory,setAllCategory]=useState([]);
    const handleAddCategory=async()=>
    {
      if(!categoryName){
        alert('Please fill the form completely')
      }
     else{
      let body={
        categoryName:categoryName,
        allVideos:[]
      }
      const response=await addCategory(body);
      if(response.status===201){
        toast.success(`${categoryName} Added Successfully`);
        handleClose();
        setCategoryName('')
        //otherwise the state will contain the same category name until refresh so even if we add empty value same category will be added again
      }
      else{
        toast.error('Something went wrong')
      }
     }
    }
    //    // onKeyDown={(e)=>manageHandleAdd(e) add in the wanted field
        
  //  const manageHandleAdd=(e)=>{
  //   if(e.key==='Enter'){
  //     handleAddCategory()
  //   }
  //  }

  const getCategory=async()=>{
    const response=await getAllCategory();
    const {data}=response;
    console.log('CATEGORY DETAILS',data);
    setAllCategory(data);
  }
  useEffect(()=>{
    getCategory()
  },[])

  const handleCategoryDelete=async(categoryId)=>{
   const result=await deleteCategory(categoryId);
   console.log('deleted',result);
   if(result.status===200){
    getCategory()
   }
   else{
    toast.error('Something went wrong')
   }
  }

const videoDrop=async(e,id)=>{
console.log("==on drop==");
//get videoID THAT we pass from video card
const videoId=e.dataTransfer.getData("videoId");
console.log(`Video with id ${videoId} need to put inside category with id ${id}`)
const {data}=await getAllVideosById(videoId);
console.log('VideoDetails',data);
const selectedCategory=allCategory.find((item)=>item.id===id);
//we are pushing the video details to allvideos in allCategory
selectedCategory.allVideos.push(data)
console.log('selected category',selectedCategory);
const response=await updateCategory(selectedCategory,id);
//to see it without refreshing
getCategory()
//now when we delte from  category it will also be deleted from ALL VIDEOS
  }
  const dragOver=(e)=>{
    //onDragOver method will trigger page refresh so the video id we are passing may loss so use
    e.preventDefault();
    console.log('inside drag over');
    
  }
  //to delete videos from category
  const handleCategoryVideoDelete=async(idOfCategory,itemid)=>{
const deletedItemCategory=allCategory.find(item=>item.id===idOfCategory);
deletedItemCategory.allVideos=deletedItemCategory.allVideos.filter(video=>video.id!==itemid);
console.log(deletedItemCategory.allVideos);

 // Update the category with the modified videos list
const response=await updateCategory(deletedItemCategory,idOfCategory)
getCategory()
  }
  return (
    <>

    <button className='btn btn-warning' onClick={handleShow}>Add new category</button>
    {
      allCategory.length>0?
      allCategory.map((item)=>(
<div className='border m-3 border-secondary rounded p-3'
droppable onDragOver={(e)=>dragOver(e)}
onDrop={(e)=>videoDrop(e,item.id)}>
  {/* item id is the category id */}
  <div className="d-flex justify-content-between align-items-center">
    <h6 style={{color:'white'}}>{item.categoryName}</h6>
<button className='btn btn-danger' onClick={()=>handleCategoryDelete(item.id)}><i className='fa-solid fa-trash'></i></button>
  </div>
{
  item.allVideos.length>0?
 item.allVideos.map(card=>(
  <CategoryCard video={card} onDelete={()=>handleCategoryVideoDelete(item.id,card.id)}/>
 )):<p>Nothing to display</p>
}
</div>
      )):<p>No Category Found</p>
    }
   
    <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
        <Modal.Header closeButton >
          <Modal.Title><i class='fa-solid fa-list text-warning me-3'></i><span className='textstyle'>ADD CATEGORY</span></Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
            <p className='textstyle' style={{fontWeight:'700'}}>Please fill the form</p>
        <Form className='border border-secondary p-3 rounded' data-bs-theme='light'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter category name" onChange={(e)=>setCategoryName(e.target.value)} />
      
      </Form.Group>

      
      
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           CANCEL
          </Button>
          <Button variant="primary" onClick={handleAddCategory} className='btn btn-warning'>
         ADD
          </Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>
      </>

  )
}

export default Category