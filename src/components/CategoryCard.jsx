import React from 'react'


function CategoryCard({video,onDelete}) {
  return (
    <div className='video-card d-flex border rounded justify-content-around align-items-center mt-2'>
    <h6 className='text-light'>{video.caption}</h6>
    {/* Display other video details as needed */}
    <button className='btn text-light '  onClick={onDelete}>
      <i className='fa-solid fa-trash' style={{color:'red'}}></i>
    </button>
  </div>
  )
}

export default CategoryCard