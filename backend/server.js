import express from 'express'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRouter from './routes/productRoutes.js'
import { PORT } from './config/env.js'
import connectDB from './config/db.js'

connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRouter)

const port = PORT || 5000

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running in on port ${port}`)
})
