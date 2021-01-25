import { State } from '../utils/types'
import { AnyAction } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { ADD_DEPOSIT, ADD_EXPENSE, ADD_DEPOSIT_FULFILLED } from './actions/ActionConstants'

const initialState: State = {
  lastOperation: 'NONE',
  currentSum: 0,
}

const reducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      }
    case ADD_DEPOSIT:
      return {
        ...state,
        lastOperation: 'DEPOSIT',
        currentSum: state.currentSum + action.payload,
      }
    case ADD_DEPOSIT_FULFILLED:
      return {
        ...state,
        lastOperation: 'ADD_DEPOSIT_FULFILLED',
        currentSum: state.currentSum + action.payload,
      }
    case ADD_EXPENSE:
      return {
        ...state,
        lastOperation: 'EXPENSE',
        currentSum: state.currentSum - action.payload,
      }
    default:
      return state
  }
}

export default reducer
