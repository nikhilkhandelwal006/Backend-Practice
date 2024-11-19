const http=require('http')
const fs=require('fs')

const index=fs.readFileSync('index.html','utf-8')
const data=fs.readFileSync('data.json',"utf-8")

const server=http.createServer((req,res)=>{
    console.log(req.url)
    // console.log('server started')
    // res.setHeader('Dummy','DummyValue')
    // // res.setHeader('content-type','text/html')
    //  res.setHeader('content-type','application/json')
    // res.end(data)




  switch(req.url){
    case '/':
        res.setHeader('content-type','text/html')
        res.end(index)
        break;
       
    case '/api':
        res.setHeader('content-type','application/json')
        res.end(data)
        break;  
        
    default :
        res.writeHead(404)
        res.end()  
        break;  
  }









})

server.listen(8080)