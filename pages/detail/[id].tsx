import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Row, Typography, DatePicker, Button, Popover } from 'antd'
import { TransactionForm } from '../../components/TransactionForm'
import { TransactionTable } from '../../components/TransactionTable'
import { submitTransaction, addTransaction, removeTransaction } from '../../state/actions/ActionCreator'
import { getAllDetails, getDetail } from '../../lib/details'
import { State, Transaction } from '../../utils/types'
import { wrapper } from '../../state/store'

const { Title } = Typography

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllDetails()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(async ({ preview, params }) => {
  const detail = getDetail(params.id)
  return {
    props: {
      detail,
    },
  }
})

const onSelect = (value) => {
  console.log(value.format('YYYY-MM-DD'))
}

const Detail = ({ detail }) => {
  const dispatch = useDispatch()
  const { detailData } = detail
  const { currentSum, futureTransactions, pastTransactions } = useSelector<State, State>((state) => state)

  const dispatchSubmitTransaction = (id: string) => {
    dispatch(submitTransaction(id))
  }

  const dispatchRemoveTransaction = (id: string) => {
    dispatch(removeTransaction(id))
  }

  const dispatchAddTransaction = (transaction: Transaction) => {
    dispatch(addTransaction(transaction))
  }

  return (
    <>
      <Row>
        <Col span={12}>
          <Title> {detailData.title} </Title>
        </Col>
        <Col span={6}>
          <DatePicker onChange={onSelect} format="YYYY-MM-DD" />
        </Col>
        <Col span={6}>
          <Title level={3}> Current sum: {currentSum} </Title>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Popover
            destroyTooltipOnHide
            placement="bottom"
            title={'Add Deposit'}
            content={<TransactionForm type={'Deposit'} dispatch={dispatchAddTransaction} />}
            trigger="click"
          >
            <Button>Add Deposit</Button>
          </Popover>
        </Col>
        <Col span={6}>
          <Popover
            destroyTooltipOnHide
            placement="bottom"
            title={'Add Expense'}
            content={<TransactionForm type={'Expense'} dispatch={dispatchAddTransaction} />}
            trigger="click"
          >
            <Button>Add Expense</Button>
          </Popover>
        </Col>
      </Row>
      <Row>
        <TransactionTable
          futureTransactions={futureTransactions}
          pastTransactions={pastTransactions}
          dispatchSubmit={dispatchSubmitTransaction}
          dispatchRemove={dispatchRemoveTransaction}
        />
      </Row>
    </>
  )
}

export default Detail
