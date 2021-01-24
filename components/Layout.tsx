import Header from './Header'
import Head from 'next/head'
import styles from './layout.module.sass'

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Budget</title>
      {/*<link rel="icon" href="/favicon.ico" />*/}
    </Head>
    <Header title={'Header...'} />
    {children}
  </div>
)

export default Layout
