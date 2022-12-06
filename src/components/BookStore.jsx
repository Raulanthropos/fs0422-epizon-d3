import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import BookList from './BookList'
import BookDetail from './BookDetail'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksAction } from '../redux/actions'

const BookStore = () => {
  const [bookSelected, setBookSelected] = useState(null)

  const dispatch = useDispatch()
  const booksFromRedux = useSelector((state) => state.book.stock)
  // re-wiring the BookStore component, reading the books not from its
  // local state anymore but from the Redux Store

  useEffect(() => {
    dispatch(getBooksAction())
  }, [])

  const changeBook = (book) => setBookSelected(book)

  return (
    <Row className="center-row">
      <Col lg={4}>
        <BookList
          bookSelected={bookSelected}
          changeBook={changeBook}
          books={booksFromRedux}
        />
      </Col>
      <Col lg={8}>
        <BookDetail bookSelected={bookSelected} />
      </Col>
    </Row>
  )
}

export default BookStore
