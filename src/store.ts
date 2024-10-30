import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "./schema/cripto-schema";
import { CryptoCurrency } from "./types";

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    fetchCryptos: () => Promise<void>
}

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    
    const {data : { Data }} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    if(result.success) {
        return result.data
    }

}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({

    cryptoCurrencies: [],
    
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    }
})))