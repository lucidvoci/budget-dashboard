import { GetStaticPaths } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../../components/Layout'
import { getAllDetails, getDetail } from '../../lib/details'
import { State } from '../../utils/types'
import { wrapper } from '../../state/store'
import { addDeposit, addExpense } from "../../state/actions/ActionCreator";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllDetails()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = wrapper.getStaticProps(
  ({store, preview, params}) => {
    console.log('2. Page.getStaticProps uses the store to dispatch things');
    store.dispatch(addExpense({sum: 10}));

    const detail = getDetail(params.id)
    return {
      props: {
        detail,
      },
    }
  }
);

const Detail = ({ detail }) => {
  const dispatch = useDispatch()
  const { detailData } = detail
  const { lastOperation, currentSum } = useSelector<State, State>(state => state);
  return (
    <Layout>
      <div>
        <h1> {detailData.title} </h1>
        {detailData.text}<br/>
        Last operation: { lastOperation } <br/>
        Current sum: { currentSum }<br/>
        <a onClick={() => dispatch(addDeposit({sum: 10}))}>
          Deposit
        </a>
        /
        <a onClick={() => dispatch(addExpense({sum: 20}))}>
          Expense
        </a>
      </div>
    </Layout>
  )
}

export default Detail
