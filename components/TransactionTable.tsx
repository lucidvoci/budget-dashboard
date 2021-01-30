import * as React from 'react'
import { Collapse, Table } from 'antd'
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { Transaction } from '../utils/types'

interface TransactionTableProps {
  futureTransactions: Transaction[]
  pastTransactions: Transaction[]
  dispatchSubmit: (id: string) => void
  dispatchRemove: (id: string) => void
}

interface TableRow {
  id: string
  date: string
  description: string
  sum: number
  recurring: string
  actions: {
    dispatchSubmit: () => void
    dispatchRemove: () => void
  }
}

export const tableColumns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Sum',
    dataIndex: 'sum',
    key: 'sum',
  },
  {
    title: 'Recurring',
    dataIndex: 'recurring',
    key: 'recurring',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: ({ dispatchSubmit, dispatchRemove }) => {
      return (
        <>
          {dispatchSubmit ? <PlusCircleOutlined onClick={() => dispatchSubmit()} /> : ''}
          {dispatchRemove ? <DeleteOutlined onClick={() => dispatchRemove()} /> : ''}
        </>
      )
    },
  },
]

export const tableData = (transactions: Transaction[], dispatchSubmit?, dispatchRemove?): TableRow[] => {
  return transactions.map((t) => {
    return {
      key: t.id,
      id: t.id,
      type: t.type,
      date: t.date,
      description: t.description,
      sum: t.sum,
      recurring: t.recurring,
      actions: {
        dispatchSubmit: dispatchSubmit ? () => dispatchSubmit(t.id) : null,
        dispatchRemove: dispatchRemove ? () => dispatchRemove(t.id) : null,
      },
    }
  })
}

export const TransactionTable = ({
  futureTransactions,
  pastTransactions,
  dispatchSubmit,
  dispatchRemove,
}: TransactionTableProps) => {
  return (
    <Collapse>
      <Collapse.Panel header="Future Transaction" key="1">
        <Table
          dataSource={tableData(futureTransactions, dispatchSubmit, dispatchRemove)}
          columns={tableColumns}
          pagination={false}
        />
      </Collapse.Panel>
      <Collapse.Panel header="Past Transaction" key="2">
        <Table dataSource={tableData(pastTransactions)} columns={tableColumns} pagination={false} />
      </Collapse.Panel>
    </Collapse>
  )
}
