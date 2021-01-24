import { State } from '../utils/types'
import { AnyAction } from 'redux'
import {HYDRATE} from 'next-redux-wrapper';
import { ADD_DEPOSIT, ADD_EXPENSE } from './actions/ActionConstants'

const initialState: State = {
  lastOperation: 'NONE',
  currentSum: 0,
}

const reducer = (state: State = initialState, action: AnyAction) => {
  console.log('-', state.currentSum)
  console.log('+', action.payload)
  console.log('?', state.currentSum - action.payload)
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
        currentSum: state.currentSum + action.payload
      }
    case ADD_EXPENSE:
      return {
        ...state,
        lastOperation: 'EXPENSE',
        currentSum: state.currentSum - action.payload
      }
    default:
      return state
  }
}

export default reducer
