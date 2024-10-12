import axios from "axios"

//create an function commonApi,reqbody details we take from the form
export const commonApi=async(httpMethod,url,reqBody)=>{
    //create an obj
let reqConfig={
     method:httpMethod,
     url:url,
     data:reqBody,
     //mandatory  to say the type of data
     Headers:{
        "Content-Type":"application/json"
     }
}
return await axios(reqConfig).then((result)=>{
    return result;
}).catch((err)=>{
    return err;
})
}
