export enum Recurring {
  Once = 'Once',
  Weekly = 'Weekly',
  Monthly = 'Monthly',
}

export enum TransactionType {
  Deposit = 'Deposit',
  Expense = 'Expense',
}

export type Transaction = {
  id: string
  type: TransactionType
  description: string
  date: string
  sum: number
  recurring: Recurring
}

export interface State {
  id: string
  currentSum: number
  futureTransactions: Transaction[]
  pastTransactions: Transaction[]
}

export type BudgetDetail = {
  id: string
  detailData: {
    title: string
    color: Color
  }
}

export enum Color {
  Purple,
  Green,
  Red,
  Yellow,
}
