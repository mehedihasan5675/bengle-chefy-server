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
    app.get('/chef/:id',(req,res)=>{
        const id=parseInt(req.params.id);
        if(id===0){
            res.send(chefInfo)
        }
        const searchChefId=chefInfo.find(f=>f._id===id)
        res.send(searchChefId)
        console.log(id);
        
    })
   app.listen(port,()=>{
     console.log(`This server is running with ${port} port`); 
    })