const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
      userdataf :{}
})

const UserModel = mongoose.model("data1",userSchema)


module.exports = {
    UserModel
}