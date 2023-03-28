import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react"
import { Roboto } from "next/font/google"

const roboto = Roboto({subsets: ["latin"], weight: ["400","700"]})

export function PaymentSection(){
    return(
        <div className="bg-base-card mt-3 p-10 rounded-md">
            <div className="flex flex-row mb-8">
                <CurrencyDollar className="text-purple" size={22}/>
                <span className={`${roboto.className} flex flex-col pl-2 font-normal`}>
                    <p className="text-base-subtitle text-base">
                        Pagamento
                    </p>
                    <p className="text-base-text text-sm">
                        O pagamento é feito na entrega. Escolha a forma que deseja pagar
                    </p>
                </span>
            </div>
            <div className="flex flex-row gap-3">
                <button className={`${roboto.className} bg-base-button hover:bg-base-hover transition-colors p-4 flex flex-row items-center text-base-text text-xs rounded-md`}>
                    <CreditCard className="mr-3 text-purple text-base"/>
                    CARTÃO DE CRÉDITO
                </button>
                <button className={`${roboto.className} bg-base-button hover:bg-base-hover transition-colors p-4 flex flex-row items-center text-base-text text-xs rounded-md`}>
                    <Bank className="mr-3 text-purple text-base"/>
                    CARTÃO DE DÉBOTO
                </button>
                <button className={`${roboto.className} bg-base-button hover:bg-base-hover transition-colors p-4 flex flex-row items-center text-base-text text-xs rounded-md`}>
                    <Money className="mr-3 text-purple text-base"/>
                    DINHEIRO
                </button>
            </div>
        </div>
    )
}