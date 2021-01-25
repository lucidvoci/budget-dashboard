import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { wrapper } from '../state/store'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />

export default wrapper.withRedux(WrappedApp)
