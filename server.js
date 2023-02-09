const express = require("express");
const cors = require("cors")
const { connection } = require("./config/db");
const { userController } = require("./routes/user.routes");

const app = express();
const PORT = 8080;

app.use(express.json())
app.use(cors())

app.use("/userdata",userController)

app.get("/", (req,res) => {
    res.send("home page")
})


app.listen(PORT,async() => {
    try{
        await connection;
        console.log("Connected to DB")
    }catch(err){
        console.log("Errot to connect DB")
        console.log(err)
    }
    console.log(`Listening on PORT ${PORT}`)
})