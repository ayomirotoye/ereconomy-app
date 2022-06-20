import '../assets/styles/css/globals.css';
import '../assets/styles/css/svgStyles.css';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../state/store'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, myThemes } from '../assets/styles/themes/theme.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={myThemes}>
        <GlobalStyles />
        <main className="border-none body-font font-sanSerif">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
