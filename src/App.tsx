import { useEffect } from "react"
import CriptoSearchForm from "./Components/CriptoSearchForm"
import { useCryptoStore } from "./store"

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
      <CriptoSearchForm />
    </div>
    </>
  )
}

export default App
