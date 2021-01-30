import * as React from 'react'
import { Button, DatePicker, Form, Input, InputNumber, Select } from 'antd'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import { Recurring, Transaction, TransactionType } from '../utils/types'

interface TransactionFormProps {
  type: string
  dispatch: (transaction: Transaction) => void
}

export const TransactionForm = ({ type, dispatch }: TransactionFormProps) => {
  const [form] = Form.useForm()

  const onFinish = (values: any): void => {
    console.log(values)
    dispatch({
      id: uuidv4().toString(),
      description: values.description,
      type: TransactionType[values.type],
      date: values.date.format('DD/MM/YY'),
      sum: values.sum,
      recurring: Recurring[values.recurring],
    })
  }

  return (
    <Form form={form} name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item initialValue={type} name="type" hidden={true} />
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Description must be provided!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item initialValue="Once" label="Recurring" name="recurring" rules={[{ required: true }]}>
        <Select>
          <Select.Option value="Once">Once</Select.Option>
          <Select.Option value="Weekly">Weekly</Select.Option>
          <Select.Option value="Monthly">Monthly</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Sum" name="sum" rules={[{ required: true, message: `${type} sum must be provided!` }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item
        initialValue={moment()}
        label="Date"
        name="date"
        rules={[{ required: true, message: 'Date must be provided!' }]}
      >
        <DatePicker defaultValue={moment()} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button
          onClick={() => {
            form.resetFields()
          }}
        >
          Clear
        </Button>
      </Form.Item>
    </Form>
  )
}

export default TransactionForm
