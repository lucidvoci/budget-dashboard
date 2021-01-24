import { detailType } from '../utils/types'

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

export const getDetail = (id: string | string[]): detailType => {
  switch (id) {
    case '1':
      return { id, detailData: { title: 'first page', text: 'wecome to first page' } }
    case '2':
      return { id, detailData: { title: 'second page', text: 'wecome to second page' } }
  }
}
