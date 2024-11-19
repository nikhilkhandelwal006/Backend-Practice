const fs=require('fs')
const index=fs.readFileSync('index.html','utf-8')
const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
const product=data.products



const express=require("express")
const server=express()
const morgan=require("morgan")

//body parser
server.use(express.json())

server.use(morgan("default"))
server.use(express.static('public'))

server.use((req,res,next)=>{
    console.log(req.method,req.hostname,req.ip, new Date(), req.get('User-Agent'))
    next()
})

const auth=(req,res,next)=>{
    // console.log(req.query)
    if(req.body.password=='123'){
         next()
    }else{
        res.sendStatus(401)
    }
}

// server.use(auth)

//this called as API-or- ENDPOINT-or -ROUTE
server.get('/',auth,(req,res)=>{
    res.json({type:'GET'})
})

server.post('/',auth,(req,res)=>{
    res.json({type:'POST'})
})

server.put('/',(req,res)=>{
    res.json({type:'PUT'})
})

server.delete('/',(req,res)=>{
    res.json({type:'DELETE'})
})

server.patch('/',(req,res)=>{
    res.json({type:'PATCH'})
})

// server.get('/',(req,res)=>{
//     // res.sendStatus(404)
//     // res.json(product);
//     res.status(201).send('hello')
//     // res.sendFile('F:\Nikhil\Practice\Node\Chapter-3\index.html');
// })

server.listen(8080,()=>{
    console.log('listening to port 8080')
})