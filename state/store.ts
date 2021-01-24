import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'
import { State } from '../utils/types'
import { MakeStore, createWrapper} from 'next-redux-wrapper'
import logger from 'redux-logger'
import { useDispatch } from 'react-redux'

const makeStore: MakeStore<State> = () =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)))

export const wrapper = createWrapper<State>(makeStore, { debug: true })
