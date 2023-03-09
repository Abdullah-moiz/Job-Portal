import '@/styles/globals.css'
import { store } from '@/Store/store'
import { Provider } from 'react-redux'


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}