const express = require("express")
const dotenv = require("dotenv").config()

const app = express()

const PORT = 8100

app.listen(PORT, ()  =>{
    console.log(`Server started running on ${PORT}`)
})

app.get("/string", (request, response)=>{
    response.json("Sending back a simple string as the response")
})

app.get("/object", (request, response)=>{
    response.json({
        "name": "Lawrence Onyekachukwu Gift"
         })
})

app.get("/array", (request, response)=>{
    response.json(["Access Bank", "Union Bank", "Wema Bank", "Zenith Bank"])
})
