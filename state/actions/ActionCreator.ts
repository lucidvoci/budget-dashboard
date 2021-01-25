import { ADD_DEPOSIT, ADD_EXPENSE } from './ActionConstants'
import axios from 'axios'

const getSum = () => axios.get('http://localhost:3050/current-sum')
  .then(response => response.data)

export const addDeposit = (depositDetails) => {
  return {
    type: ADD_DEPOSIT,
    payload: getSum,
  }
}

export const addExpense = (depositDetails) => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3050/current-sum')
      console.log(response.data)
      dispatch({
        type: ADD_EXPENSE,
        payload: depositDetails.sum,
      })
    } catch (error) {
      console.log(error)
    }
    return 'done'
  }
}
