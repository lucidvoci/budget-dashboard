import { State, TransactionType } from '../utils/types'
import { AnyAction } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { pastTransactions, futureTransactions } from '../utils/test-data'
import { getNextTransaction } from '../utils/transactions'
import { ADD_TRANSACTION, SUBMIT_TRANSACTION, REMOVE_TRANSACTION } from './actions/ActionConstants'

const initialState: State = {
  id: '0',
  currentSum: 0,
  pastTransactions,
  futureTransactions,
}

const reducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      }
    case ADD_TRANSACTION:
      return {
        ...state,
        futureTransactions: [...state.futureTransactions, action.payload],
      }
    case REMOVE_TRANSACTION:
      return {
        ...state,
        futureTransactions: state.futureTransactions.filter((t) => t.id != action.payload),
      }
    case SUBMIT_TRANSACTION:
      const transaction = state.futureTransactions.find((t) => t.id === action.payload)
      const recurringTransaction = getNextTransaction(transaction)
      return {
        ...state,
        pastTransactions: [...state.pastTransactions, transaction],
        futureTransactions: [
          ...state.futureTransactions.filter((t) => t.id != transaction.id),
          ...(recurringTransaction ? [recurringTransaction] : []),
        ],
        currentSum:
          transaction.type === TransactionType.Deposit
            ? state.currentSum + transaction.sum
            : state.currentSum - transaction.sum,
      }
    default:
      return state
  }
}

export default reducer
