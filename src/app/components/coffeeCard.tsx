import { ShoppingCartSimple } from "phosphor-react"
import { Roboto, Baloo_2 } from 'next/font/google'
import Image from "next/image"
import ExpressCoffee from "../assets/expresso_tradicional.png"
import { Counter } from "./Counter"

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"]})
const baloo_2 = Baloo_2({ subsets: ['latin'], weight: ["700", "800"]})

export function CoffeeCard(){
    return(
        <div 
            className="bg-base-card w-[256px] h-[310px] rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] flex flex-col items-center justify-center"
        >
            <Image className="mt-[-40px] mb-3" src={ExpressCoffee} alt=""/>
            <span 
                className={`${roboto.className} bg-yellow-light py-1 px-2 text-yellow-dark mb-5 h-[21px] rounded-[100px] flex items-center justify-center`}
            >
                TRADICIONAL
            </span>
            <p  className={`${baloo_2.className} text-base-subtitle text-xl font-extrabold`}>Expresso Tradicional</p>
            <p className={`${roboto.className} px-5 text-base-label text-sm mb-[33px]`}>O tradicional café feito com água quente e grãos moídos</p>
            <div className="flex flex-row items-center">
                <p className={`${baloo_2.className} text-2xl text-base-text mr-[23px]`}>9,90</p>

                <Counter/>

                <span className="bg-purple-dark w-[38px] h-[38px] flex items-center justify-center rounded-md cursor-pointer ml-4">
                    <ShoppingCartSimple weight="fill" className="text-base-card"/>
                </span>
            </div>
        </div>
    )
}