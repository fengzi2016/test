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
    console.log(opt.body)
    return fetch(url,opt)
    .then(
        
        response => {
            if(response.ok){
                return response.json().then(json => {
                    console.log(response.status)
                    switch(response.status) {
                        case 200:
                            return json;
                        case 304:
                            throw Error("304");
                        case 404:
                            throw Error("404");
    
                    }
                })
            }else{
                
                return response;
            }
            
        })
}

let service = {

    logup (body){
       return  Fetch("http://localhost:8080/ServletDemo/api/TestUser?action=0",{
              method:'POST',
              data:body
      })
    },
    login (body) {
        return    Fetch("http://localhost:8080/ServletDemo/api/TestUser?action=1",{
            method:'POST',
            data:body
        })
    },
  
    
    fetch (body) {
        return  Fetch("http://localhost:8080/ServletDemo/api/TestRecords?action=1",{
            method:'POST',
            data:body
               
             }
            )
    },
    createRecord (body){
        return Fetch("http://localhost:8080/ServletDemo/api/TestQuestions?action=0",{
            method:'POST',
            data:body
        })
    },
    commitRecord (body){
        return Fetch("http://localhost:8080/ServletDemo/api/TestRecords?action=3",{
            method:'POST',
            data:body
        })
    }

    
}
export  default service;