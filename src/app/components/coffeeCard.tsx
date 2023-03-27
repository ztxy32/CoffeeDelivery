import { ShoppingCartSimple } from "phosphor-react"
import { Roboto, Baloo_2 } from 'next/font/google'
import Image, { StaticImageData } from "next/image"
import { Counter } from "./counter"

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"]})
const baloo_2 = Baloo_2({ subsets: ['latin'], weight: ["700", "800"]})

interface coffeeCardProps{
    coffeeLabel: string[]
    coffeeName: string
    coffeeDescription: string
    coffeePrice: number
    coffeeId: number
    coffeeImg: string | StaticImageData
}

export function CoffeeCard({
    coffeeDescription, 
    coffeeImg, 
    coffeeLabel, 
    coffeeName, 
    coffeePrice, 
}: coffeeCardProps){
    return(
        <div 
            className="bg-base-card w-[256px] h-[310px] rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] flex flex-col items-center justify-center mb-5"
        >
            <span className="mt-[-60px] mb-[12px]">
                <Image src={coffeeImg!} alt={coffeeDescription}/>
            </span>
            <div className="flex items-center justify-center text-[10px]">
                {coffeeLabel.map(item => 
                    <span 
                        key={item}
                        className={`${roboto.className} bg-yellow-light py-1 px-2 text-yellow-dark mb-5 mr-1 h-[21px] rounded-[100px] font-bold`}
                    >
                        {item}
                    </span>    
                )}
            </div>

            <p  className={`${baloo_2.className} text-base-subtitle text-xl font-extrabold`}>{coffeeName}</p>
            <p className={`${roboto.className} px-5 text-base-label text-sm mb-[33px]`}>{coffeeDescription}</p>
            <div className="flex flex-row items-center">
                <p className={`${baloo_2.className} text-2xl text-base-text mr-[23px]`}>
                    {new Intl.NumberFormat("pt-Br", {
                        style: "currency",
                        currency: "BRL"
                    }).format(coffeePrice/100)
                    }
                </p>

                <Counter/>

                <button className="bg-purple-dark hover:bg-purple w-[38px] h-[38px] flex items-center justify-center rounded-md cursor-pointer ml-4">
                    <ShoppingCartSimple weight="fill" className="text-base-card"/>
                </button>
            </div>
        </div>
    )
}