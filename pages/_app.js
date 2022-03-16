import '../styles/globals.css'
import {ThirdwebWeb3Provider} from '@3rdweb/hooks'

/* The Chain Id 4 represents the rinkeby network
The injected connector is the web3 connection method used by Metamask*/

const supportedChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
    supportedChaiIds={supportedChainIds}
    connectors={connectors}>
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
