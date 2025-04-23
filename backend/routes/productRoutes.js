import { Router } from 'express'
import products from '../data/products.js'
import { getProduct, getProducts } from '../controllers/productController.js'

const productRouter = Router()

productRouter.get('/', getProducts)

productRouter.get('/:id', getProduct)

export default productRouter
