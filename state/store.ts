import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promise from 'redux-promise-middleware'
import reducer from './reducer'
import { State } from '../utils/types'
import { MakeStore, createWrapper } from 'next-redux-wrapper'
import { useDispatch } from 'react-redux'
import logger from 'redux-logger'

const makeStore: MakeStore<State> = () => createStore(reducer, composeWithDevTools(applyMiddleware(promise, logger)))

export const wrapper = createWrapper<State>(makeStore, { debug: true })
