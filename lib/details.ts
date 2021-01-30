import { BudgetDetail, Color } from '../utils/types'

export const getAllDetails = () => {
  return [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
  ]
}

export const getDetail = (id: string | string[]): BudgetDetail => {
  switch (id) {
    case '1':
      return { id, detailData: { title: 'Cottage', color: Color.Green } }
    case '2':
      return { id, detailData: { title: 'Budget', color: Color.Purple } }
    default:
      return { id: '0', detailData: { title: 'Error Page', color: Color.Red } }
  }
}
