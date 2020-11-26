const express=require('express');
const app=express();
const path=require('path');
const port=process.env.PORT ||80;


app.use('/static',express.static('static'));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'));
})

app.listen(port,()=>{
    console.log(`successfuly started the server at port ${port}`);
})