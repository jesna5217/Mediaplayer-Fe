import { serverURL } from "./serverURL";
import { commonApi } from "./commonApi";

//upload video

export const uploadVideo=async(reqBody)=>{
    //to insert so post
  return  await commonApi('POST',`${serverURL}/video`,reqBody)
    // data will be stored to videos db,see json server
}
//this function wil be called when upload button is clicked



//get all videos

export const getAllVideos=async()=>{
    return await commonApi('GET',`${serverURL}/video`,"")
}

//delete video

export const deleteVideo=async(id)=>{
  //id is passed as we are deleting a specific video
  return await commonApi('DELETE',`${serverURL}/video/${id}`,{})
}

//add to watch history

export const addToHistory=async(reqBody)=>{
  return await commonApi("POST",`${serverURL}/history`,reqBody)
}

//to get history

export const getHistory=async()=>{
  return await commonApi("GET",`${serverURL}/history`,"")
}

//to delete history by id

export const deleteHistory=async(id)=>{
  return await commonApi('DELETE',`${serverURL}/history/${id}`,{})
}

//add category
export const addCategory=async(reqBody)=>{
  return await commonApi("POST",`${serverURL}/category`,reqBody);
}

//to get all category
export const getAllCategory=async()=>{
  return await commonApi("GET",`${serverURL}/category`,"")
}

//to delete category

export const deleteCategory=async(id)=>{
  return await commonApi('DELETE',`${serverURL}/category/${id}`,{})

}
//to get video detalils by id to insert to category
export const getAllVideosById=async(id)=>{
  return await commonApi('GET',`${serverURL}/video/${id}`,"")
}

//update category with video details

export const updateCategory=async(data,id)=>{
  return await commonApi('PUT',`${serverURL}/category/${id}`,data)
}
