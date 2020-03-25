import { UPDATE_ECOMMERCE_BASE } from '../actions/main'

const INITIAL_STATE = {
  ecommerceBase: 'ABC'
}

const ecommerceBase = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_ECOMMERCE_BASE:
      return { ...state }

    default:
      return state
  }
}

export default ecommerceBase
