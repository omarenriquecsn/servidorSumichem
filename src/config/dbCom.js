const mongoose = require("mongoose");

const dbCom = async ()=>{
     await mongoose.connect("mongodb+srv://omarenriquecs:P2wEdgjBpWWBxUtS@prueba.1w2j9.mongodb.net/Sumichen")
}


module.exports = {dbCom}
