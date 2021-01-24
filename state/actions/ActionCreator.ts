import { ADD_DEPOSIT, ADD_EXPENSE } from './ActionConstants'

export const addDeposit = (depositDetails) => {
  return {
    type: ADD_DEPOSIT,
    payload: depositDetails.sum,
  }
}

export const addExpense = (depositDetails) => {
  return {
    type: ADD_EXPENSE,
    payload: depositDetails.sum,
  }
}
