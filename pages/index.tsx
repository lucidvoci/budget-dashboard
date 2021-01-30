import * as React from 'react'
import Link from 'next/link'
import { Button } from 'antd'

const Dashboard = () => (
  <>
    <img src="images/piggy-bank.png" alt="Logo" />
    <div>
      <Button type="primary">Button</Button>
      <Link href="/detail/1">
        <a> Detail </a>
      </Link>
      <h1> Hello world </h1>
      Welcome to Dashboard
    </div>
  </>
)

export default Dashboard
