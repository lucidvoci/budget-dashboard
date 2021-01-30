import { Recurring, Transaction } from './types'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

export const getNextTransaction = (transaction: Transaction): Transaction => {
  let date = transaction.date
  switch (transaction.recurring) {
    case Recurring.Weekly:
      date = moment(date, 'DD/MM/YY').add(7, 'd').format('DD/MM/YY')
      return { ...transaction, ...{ date, id: uuidv4() } }
    case Recurring.Monthly:
      date = moment(date, 'DD/MM/YY').add(1, 'M').format('DD/MM/YY')
      return { ...transaction, ...{ date, id: uuidv4() } }
    default:
      return null
  }
}
