import { Link, useParams } from 'react-router'
import { Col, Row, ListGroup, Button, Card, Image } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductDetails = () => {
  const { id: productId } = useParams()

  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getProduct = async () => {
      try {
        setIsLoading(false)
        const { data } = await axios.get(`/api/products/${productId}`)
        setProduct(data)
        setIsLoading(true)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [productId])

  if (!isLoading) {
    return <h2>Loading...</h2>
  }
  return (
    <>
      <>
        <Link className='btn btn-light my-3' to='/'>
          Go Back
        </Link>
        {!product ? (
          <h2>Product not found</h2>
        ) : (
          <Row>
            <Col md={5}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>{product.description}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      className='btn-block'
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}
      </>
    </>
  )
}

export default ProductDetails
