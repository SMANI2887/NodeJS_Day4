import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
try {
    
    mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`)
}catch(error){
    console.log(error)
}

export default mongoose