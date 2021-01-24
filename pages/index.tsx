import Layout from '../components/Layout'
import Link from 'next/link'

const Dashboard = () => (
  <Layout>
    <img src="images/piggy-bank.png" alt="Logo" />
    <div>
      <Link href="/detail/1"><a>  Detail </a></Link>
      <h1> Hello world </h1>
      Welcome to Dashboard
    </div>
  </Layout>
)

export default Dashboard
