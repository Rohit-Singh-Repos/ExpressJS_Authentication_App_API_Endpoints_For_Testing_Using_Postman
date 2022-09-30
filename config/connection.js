const mongoose = require("mongoose");

const connectToDB = async() => {
    try {
        const DB_OPTIONS = {
            dbName:process.env.DATABASE_NAME
        }
        await mongoose.connect(process.env.CONNECTION_URL,DB_OPTIONS,(error) => {   
            if(error){
                console.log("Error while connecting",error)
            }else{
                console.log("Successfully Connected")
            }
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDB;