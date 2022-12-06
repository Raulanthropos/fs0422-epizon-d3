import { GET_BOOKS, GET_BOOKS_ERROR, GET_BOOKS_LOADING } from '../actions'

const initialState = {
  // we're already in the "book" slice of the Redux store
  stock: [],
  isLoading: true,
  isError: false,
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        stock: action.payload,
      }

    case GET_BOOKS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        // isLoading: !state.isLoading, this is an example for making this
        // work without an explicit payload for the action of type GET_BOOKS_LOADING
      }

    case GET_BOOKS_ERROR:
      return {
        ...state,
        isError: action.payload,
      }

    default:
      return state
  }
}

export default bookReducer
