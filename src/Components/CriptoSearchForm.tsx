import { useCryptoStore } from "../store";
import { currencies } from "../data";
import { ChangeEvent, FormEvent, useState } from "react";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {

  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies)

  // State
  const [pair, setPair] = useState<Pair>({
    currency: '',
    criptocurrency: ''
  })

  // Form Validation
  const [error, setError] = useState('')

  // Handles changes in the select form
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form Validation
    if(Object.values(pair).includes('')) {
      setError('Todos Los Campos Son Necesarios')
      return
    }
    setError('')
  }
  
  return (
    <form 
      className="form"
      onSubmit={handleSubmit}  
    >
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Moneda: </label>
        <select 
          name="currency" 
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">CriptoMoneda: </label>
        <select 
          name="criptocurrency" 
          id="criptocurrency"
          onChange={handleChange}
          value={pair.criptocurrency}
        >
          <option value="">-- Seleccione --</option>
          {cryptoCurrencies.map(crypto => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  );
}
