import '../styles/globals.css'
import { LoginContext } from '../context/loginContext'

function MyApp({ Component, pageProps }) {
  return (
    <LoginContext>
       <Component {...pageProps} />
    </LoginContext>
  )
}

export default MyApp
