import { Recurring, TransactionType } from './types'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

const futureTransaction = {
  id: uuidv4(),
  type: TransactionType.Deposit,
  description: 'Initial Future Deposit',
  sum: 1000,
  date: moment().format('DD/MM/YY'),
  recurring: Recurring.Once,
}

const futureTransaction2 = {
  id: uuidv4(),
  type: TransactionType.Deposit,
  description: 'Second Deposit',
  sum: 2000,
  date: moment().format('DD/MM/YY'),
  recurring: Recurring.Once,
}

const pastTransaction = {
  id: uuidv4(),
  type: TransactionType.Deposit,
  description: 'Past Deposit',
  sum: 5000,
  date: moment().format('DD/MM/YY'),
  recurring: Recurring.Once,
}

const pastTransaction2 = {
  id: uuidv4(),
  type: TransactionType.Expense,
  description: 'Past Expense',
  sum: 5000,
  date: moment().format('DD/MM/YY'),
  recurring: Recurring.Once,
}

export const futureTransactions = [futureTransaction, futureTransaction2]
export const pastTransactions = [pastTransaction, pastTransaction2]
