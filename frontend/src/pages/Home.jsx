import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'

const Home = () => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery()

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        isError?.data?.message || isError.error
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  )
}

export default Home
