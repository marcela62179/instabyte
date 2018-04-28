export default function reducer ( state = {
  user: null,
  loading: false
}, action) {
  switch (action.type) {
    case 'CONTENT_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'CONTENT_LOADED':
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
