import { Card } from 'react-bootstrap'
import { Link } from 'react-router'
import Rating from './Rating'
const Product = ({ product }) => {
  return ( 
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/products/${product._id}`}>
          <Card.Img
            className='rounded '
            src={product.image}
            alt={product.name}
          />
        </Link>
        <Card.Body>
          <Link to={`/products/${product._id}`}>
            <Card.Title as='div' className='product-title'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as='div'>
            <Rating 
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product
