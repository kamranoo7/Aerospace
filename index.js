let express=require("express")
const { connection } = require("./db")
const { userRouter } = require("./Route/user.routes")
const { carRouter } = require("./Route/car.routes")
const { auth } = require("./Middleware/auth.middleware")
let cors=require("cors")

const { sellerRouter } = require("./Route/seller.routes")
let app=express()
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
app.use("/seller",sellerRouter)

app.use("/car",carRouter)

//Server connection
app.listen(process.env.port,async()=>{
    try{
await connection
console.log("Connected to DB")
    }catch(err){
        console.log(err)
        console.log("Not Connected To DB")
    }
    console.log("Server is running")
})