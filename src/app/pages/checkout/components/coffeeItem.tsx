import Image from "next/image"
import Coffee from "@/app/assets/expresso_tradicional.png"
import { Counter } from "@/app/components/counter"
import { Trash } from "phosphor-react"
import { Roboto } from "next/font/google"

const roboto = Roboto({subsets: ["latin"], weight: ["400","700"]})

export function CoffeeItem(){
    return(
        <div className="flex justify-between py-6">
            <Image src={Coffee} width={64} height={64} alt="" className="mr-5"/>
            <div className="mr-[50px]">
                Expresso Tradicional
                <div className="flex gap-2">
                    <Counter/>
                    <button className="flex items-center bg-base-button hover:bg-base-hover transition-colors p-2 rounded-md">
                        <Trash className="text-purple mr-1 text-base"/>
                        <p className="text-base-text text-xs">REMOVER</p>
                    </button>
                </div>
            </div>
            <p className={`${roboto.className} text-base-text font-bold`}>
                R$ 9,90
            </p>
        </div>
    )
}