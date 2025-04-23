import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModal.js'

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.send(products)
})

export const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    return res.json(product)
  }
  res.status(404).send({ message: 'Product not found' })
})
