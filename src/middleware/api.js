

function Fetch(url,opt={}) {
    opt.method = opt.method || 'GET';
    opt.headers = {
        Accept:'application/json',
        "Content-Type":"application/json"
    };
    if(opt.token) {
        opt.headers.token = opt.token;
    }
    opt.body = JSON.stringify(opt.data) || null;
    return fetch(url,opt).then(
        response => {
            return response.json().then(json => {
                switch(response.status) {
                    case 200:
                        return json;
                    case 502:
                     console.log(response.text);

                }
            })
        }
    )
}

let service = {
    login(body) {
        return Fetch("",{
            method:'POST',
            data:body
        })
    }
}
export  default service;