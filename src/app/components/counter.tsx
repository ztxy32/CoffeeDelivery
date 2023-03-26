import { Minus, Plus } from "phosphor-react"
import { useState } from "react"
import { Roboto, Baloo_2 } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"]})

export function Counter() {
    const [quantity, setQuantity] = useState(0)
    function handleIncrease(){
        setQuantity(quantity+1)
    }
    function handleDecrease(){
        setQuantity(quantity-1)
    }
    return(
        <div className="flex w-[72px] h-[38px] bg-base-button py-[12px] px-2 flex items-center justify-center rounded-md">
            <button onClick={handleDecrease}>
                <Minus className="text-purple"/>
            </button>
            <p className={`${roboto.className} text-base text-base-title mx-1`}>{quantity}</p>
            <button onClick={handleIncrease}>
                <Plus className="text-purple"/>
            </button>
        </div>
    )
}