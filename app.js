const express=require("express")

const app=express()

const ejs=require("ejs")

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    const data={
        title: 'My Blog',
        post: [
            {
                title:"Post 1", 
                        body:"This is First Post"
            },
            {
                title:"Post 2",
                body:"This is Second Post"
            }
        ]
    };
    res.render("index",data)
})


app.listen(3000,()=>{
    console.log("Server Running on",3000)
})