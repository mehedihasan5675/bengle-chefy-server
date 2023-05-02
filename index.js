const express=require('express')
 const app=express()
  const port=process.env.PORT || 7000 
  const chefInfo=require('./chef.json')
  app.get('/',(req,res)=>{
     res.send('Recipe wasi runnig') 
    })
    app.get('/chef',(req,res)=>{
        res.send(chefInfo)
    })
    
   app.listen(port,()=>{
     console.log(`This server is running with ${port} port`); 
    })