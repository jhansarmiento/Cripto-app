import axios from "axios"
import { CryptoCurrenciesResponseSchema } from "../schema/cripto-schema"

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    
    const {data : { Data }} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    if(result.success) {
        return result.data
    }

}