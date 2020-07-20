import axios from 'axios'  
import qs from 'qs'
import apiConfig from '../../config/api.config'

//创建axios实例
var service = axios.create({
    baseURL: apiConfig.baseUrl, 
    timeout: 5000, 
	headers: {
		// application/json
		// 'application/x-www-form-urlencoded'
		'content-type': 'application/json',
		"token":'14a1347f412b319b0fef270489f'
	}
}) 

export default { 
  service,  
  //get请求
  get(url, data) {
	  console.log(qs.stringify(data))
	  let setdata=qs.stringify(data)
	  if(setdata.length>0){
		  setdata='?'+setdata
	  }
      return service({
        url: url+setdata,
        method: 'get',
        // data:qs.stringify(data)
      })
   },
   //post请求
   post(url, data) {
	   // console.log(data)
       return service({
         url: url,
         method: 'post',
         data
		 // :qs.stringify(data)
       })
    }
   
}

