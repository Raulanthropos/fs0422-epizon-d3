import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCartAction } from '../redux/actions'

// Cart now needs to read/"write" to the store, reading the value
// of cart.content and being able to dispatch an action for removing
// an element from the cart!

const Cart = () => {
  const cart = useSelector((state) => state.cart.content)
  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {cart.map((book, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(removeFromCartAction(i))
                }}
              >
                <FaTrash />
              </Button>
              <img
                className="book-cover-small"
                src={book.imageUrl}
                alt="book selected"
              />
              {book.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="font-weight-bold mb-3 ml-4">
          TOTAL:{' '}
          {cart.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
          $
        </Col>
      </Row>
    </Row>
  )
}

export default Cart
