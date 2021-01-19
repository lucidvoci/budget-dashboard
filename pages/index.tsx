import Layout from '../components/Layout'
import Link from 'next/link'

const Dashboard = () => (
    <Layout>
        <div>
            <Link href="/detail"> Detail </Link>
            <h1> Hello world </h1>
            Welcome to Dashboard
        </div>
    </Layout>
)

export default Dashboard
