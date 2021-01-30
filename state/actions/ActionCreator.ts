import { SUBMIT_TRANSACTION, ADD_TRANSACTION, REMOVE_TRANSACTION } from './ActionConstants'
import { Transaction } from '../../utils/types'

export const submitTransaction = (transactionId: string) => {
  return {
    type: SUBMIT_TRANSACTION,
    payload: transactionId,
  }
}

export const addTransaction = (transaction: Transaction) => {
  return {
    type: ADD_TRANSACTION,
    payload: transaction,
  }
}

export const removeTransaction = (transactionId: string) => {
  return {
    type: REMOVE_TRANSACTION,
    payload: transactionId,
  }
}
