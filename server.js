const express=require("express")
const contactRouter=require('./routs/contactRouts')
const dotenv=require("dotenv").config()
const app=express()
app.use(express.json())
app.use('/api/contacts',contactRouter)


const port=process.env.PORT||3000
//app.get('/api/contacts',(req,res)=>{        

  //  res.status(200).json({"message":"get all contacts"})
//})

    
    app.listen(port,()=>{
        console.log(`server is running ${port}`)
    })
    
