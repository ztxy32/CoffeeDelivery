import { Roboto } from "next/font/google"
import { CoffeeItem } from "./coffeeItem"

const roboto = Roboto({subsets: ["latin"], weight: ["400","700"]})

export function SelectedCoffeesCard(){
    return(
        <div className="bg-base-card p-10 rounded-tl-md rounded-tr-[44px] rounded-br-md rounded-bl-[44px]">
            <CoffeeItem/>
            <div>
                <span className={`${roboto.className} flex justify-between mt-6 text-base-text font-normal mb-3`}>
                    <p className="text-sm">Total de itens</p>
                    <p className="text-base">R$ 29,70</p>
                </span>

                <span className={`${roboto.className} flex justify-between text-base-text font-normal mb-3`}>
                    <p className="text-sm">Entrega</p>
                    <p className="text-base">R$ 3,50</p>
                </span>

                <span className={`${roboto.className} flex justify-between text-base-text font-bold text-xl mb-3`}>
                    <p>Total</p>
                    <p>R$ 33,20</p>
                </span>
            </div>
            <button className={`${roboto.className} bg-yellow hover:bg-yellow-dark transition-colors flex flex-1 items-center justify-center text-white w-[368px] py-3 font-bold text-sm rounded-md mt-6`}>
                CONFIRMAR PEDIDO
            </button>
        </div>
    )
}