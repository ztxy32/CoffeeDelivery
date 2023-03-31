"use client"
import Image from "next/image"
import Logo from "../assets/Logo.png"
import { MapPin, ShoppingCart } from "phosphor-react"
import { Roboto } from 'next/font/google'
import Link from "next/link"
const roboto = Roboto({ subsets: ['latin'], weight: ["400"]})

interface HeaderProps{
    cartQuantity?: number
}

export function Header({ cartQuantity }:HeaderProps){
    return(
        <div className="h-26 flex px-40 py-8 justify-between bg-background sticky top-0 z-50">
            <Link href="/">
                <Image src={Logo} alt="" className="w-[85px] h-[40px]" />
            </Link>
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
                <Link 
                    href={{ pathname: "./pages/checkout" }}
                    className="bg-yellow-light w-[38px] h-[38px] flex items-center justify-center rounded-md cursor-pointer"
                >
                    <ShoppingCart 
                        color="#C47F17" 
                        weight="fill"
                        className="m-2 text-xl"
                    />
                    {
                        cartQuantity! > 0 && 
                        <span className="w-4 h-4 bg-yellow-dark absolute top-7 right-[154px] rounded-full justify-center items-center text-xs text-white text-center">
                            {cartQuantity}
                        </span>
                        }
                </Link>
            </div>
        </div>
    )
}