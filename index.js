const express=require('express')
 const app=express()
  const port=process.env.PORT || 1000 
  const recipe_info=require('./chef.json')
  app.get('/',(req,res)=>{
     res.send('Recipe wass running') 
    })
    app.get('/chef_recipe',(req,res)=>{
        res.send(recipe_info)
    })
   app.listen(port,()=>{
     console.log(`This server is running with ${port} port`); 
    })