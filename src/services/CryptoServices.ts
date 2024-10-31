import axios from "axios"
import { CryptoCurrenciesResponseSchema } from "../schema/cripto-schema"
import { Pair } from "../types"

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    
    const {data : { Data }} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    if(result.success) {
        return result.data
    }
}

export async function fetchCurrentCryptoPrice(pair : Pair) {

    const {currency, criptocurrency} = pair
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptocurrency}&tsyms=${currency}`
    
    const {data} = await axios(url)
    console.log(data)
    
}