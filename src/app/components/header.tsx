"use client"
import Image from "next/image"
import Logo from "../assets/Logo.png"
import { MapPin, ShoppingCart } from "phosphor-react"
import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: ["400"]})

export function Header(){
    return(
        <div className="h-26 flex flex-1 px-40 py-8 justify-between bg-background">
            <Image src={Logo} alt="" className="w-[85px] h-[40px]" />
            <div className="flex gap-3">
                <span 
                    className={`${roboto.className} flex items-center justify-center bg-purple-light text-purple-dark p-2 h-[38px] rounded-md`}
                >
                    <MapPin 
                        color="#8047F8" size={18} 
                        weight="fill"
                        className="m-1"
                    />
                    São Paulo, SP
                </span>
                <span 
                    className="flex bg-yellow-light p-2 w-[38px] h-[38px] center justify-center rounded-md cursor-pointer"
                >
                    <ShoppingCart 
                        color="#C47F17" 
                        weight="fill"
                        className="m-1"
                    />
                </span>
            </div>
        </div>
    )
}