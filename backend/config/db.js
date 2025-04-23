import mongoose from 'mongoose'
import { MONGODB_URI } from './env.js'

const connectDB = async () => {
  if (!MONGODB_URI) {
    console.log('Please add MONGODB_URI to .env file')
    return
  }

  try {
    if (mongoose.connection.readyState >= 1) {
      console.log('Database already connected')
      return
    }
    await mongoose.connect(MONGODB_URI)
    console.log(`Database Connected`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
