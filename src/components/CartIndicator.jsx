import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { setUsernameAction, setUsernameActionAsync } from '../redux/actions'
import { useState } from 'react'

// useSelector is a Redux Hook coming from the bindings library
// that can grant to this component "read access" to the Redux Store

const CartIndicator = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [value, setValue] = useState('')
  // value keeps track of the content of the input field!
  // it's just a controlled form :)

  const cartLength = useSelector((state) => state.cart.content.length)
  // now cartLength is always going to be a digit: the length of the
  // content array sitting in the cart slice of the Store
  const username = useSelector((state) => state.user.name)

  // even if we are now working with different reducers managing separate slices,
  // the "store" argument in useSelector still point to the "joined" store!

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setUsernameActionAsync(value))
  }

  return (
    <div className="ml-auto mt-3 mb-4">
      {username ? (
        <div>
          <span>Hello, {username}!</span>
          <Button
            color="primary"
            onClick={() => navigate('/cart')}
            className="ml-2"
          >
            <FaShoppingCart />
            <span className="ml-2">{cartLength}</span>
          </Button>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Login here!"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Form.Group>
        </Form>
      )}
    </div>
  )
}

export default CartIndicator
