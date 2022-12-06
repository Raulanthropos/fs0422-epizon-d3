import { Col, Row, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction, addToCartActionAsync } from '../redux/actions'

const BookDetail = ({ bookSelected }) => {
  const dispatch = useDispatch()
  // dispatch will allow this component to dispatch actions!
  // in order to make them reach the reducer(s)
  const username = useSelector((state) => state.user.name)
  // username when the app loads is an empty string
  const areBooksError = useSelector((state) => state.book.isError)
  const areBooksLoading = useSelector((state) => state.book.isLoading)

  return (
    <div className="mt-3 mb-4 mb-lg-0">
      {bookSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{bookSelected.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img
                  className="book-cover"
                  src={bookSelected.imageUrl}
                  alt="book selected"
                />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="font-weight-bold">Description:</span>&nbsp;
                {bookSelected.description}
              </p>
              <p>
                <span className="font-weight-bold">Price:</span>&nbsp;
                {bookSelected.price}$
              </p>
              {username ? (
                <Button
                  color="primary"
                  onClick={() => {
                    dispatch(addToCartActionAsync(bookSelected))
                  }}
                >
                  ADD TO CART
                </Button>
              ) : (
                <div>Please, login to add this book to your cart!</div>
              )}
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            {areBooksError ? (
              <Alert variant="danger" className="text-center">
                Whoopsie, something went wrong 🥲
              </Alert>
            ) : (
              <>{!areBooksLoading && <h3>Start by clicking on a book!</h3>}</>
            )}
          </Col>
        </Row>
      )}
    </div>
  )
}

export default BookDetail
