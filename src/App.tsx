import { useEffect } from "react"
import CryptoSearchForm from "./Components/CryptoSearchForm"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./Components/CryptoPriceDisplay"

function App() {

  const fetchCryptos = useCryptoStore(state => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <>
    <div className="container">
      <h1 className="app-title">Cotizador De <span>Cripto Monedas</span></h1>
    </div>

    <div className="content">
      <CryptoSearchForm />
      <CryptoPriceDisplay />
    </div>
    </>
  )
}

export default App
