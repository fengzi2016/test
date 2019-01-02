import Cookie from '../common/cookie';


function Fetch(url,opt={}) {
    opt.method = opt.method || 'GET';
    opt.headers = {
        // Accept:'application/json',
        "Content-Type": "text/plain",

    };
    if(opt.token) {
        opt.headers.token = opt.token;
    }

    opt.body = JSON.stringify(opt.data) || null;
    return fetch(url,opt)
    // .then(
        
    //     response => {
    //         if(response.ok){
    //             return response.json().then(json => {
                    
    //                 switch(response.status) {
    //                     case 200:
    //                         return json;
    //                     // case 502:
    //                     //  console.log(response.text);
    
    //                 }
    //             })
    //         }else{
                
    //             return response.text();
    //         }
            
    //     })
}

let service = {

    LOG_UP (body){
        return dispatch => {
            return  Fetch("http://localhost:8080/ServletDemo/api/TestUser?action=0",{
              method:'POST',
              data:body
              }).then(response =>{
                  if(!response.ok){
                      dispatch({type:"LOGUP_FAILURE",payload:{text:response.text(),status:response.status}})
  
                  }else{
                      dispatch({type:"LOGUP_SUCCESS",payload:response.json().then(json=>json).then(result=>{
                        
                          var keyArr = Object.keys(result[0]);
                          keyArr.forEach((key)=>{
                            Cookie.setCookie(key,result[0][key])
                        })
                            
                      })})
                  }
                  
              })
          } 
    },
    LOG_IN (body) {
        return dispatch => {
          return  Fetch("http://localhost:8080/ServletDemo/api/TestUser?action=1",{
            method:'POST',
            data:body
            }).then(response =>{
                if(!response.ok){
                    dispatch({type:"LOGIN_FAILURE",payload:{text:response.text(),status:response.status}})

                }else{
                    dispatch({type:"LOGIN_SUCCESS",payload:response.json().then(json=>json).then(result=>{
                      
                        var keyArr = Object.keys(result[0]);
                        keyArr.forEach((key)=>{
                        
                        Cookie.setCookie(key,result[0][key])
                      })
                          
                    })})
                }
                
            })
        } 
    },
    FETCH_TEST_LIST (body) {
        return dispatch => {
          return  Fetch("http://localhost:8080/ServletDemo/api/TestUser?action=1",{
            method:'POST',
            data:body
            }).then(response =>{
                if(!response.ok){
                    dispatch({type:"FETCH_TEST_LIST_FAILURE",payload:{text:response.text(),status:response.status}})
                }else{
                    dispatch({type:"FETCH_TEST_LIST_SUCCESS",payload:response.json().then(json=>json).then(result=>{
                      
                        var keyArr = Object.keys(result[0]);
                        keyArr.forEach((key)=>{
                        
                        Cookie.setCookie(key,result[0][key])
                      })
                          
                    })})
                }
                
            })
        }
    }
    
}
export  default service;