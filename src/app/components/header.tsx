"use client"
import Image from "next/image"
import Logo from "../assets/Logo.png"
import { MapPin, ShoppingCart } from "phosphor-react"

export function Header(){
    return(
        <div className="h-28 flex flex-1 px-40 py-8 justify-between bg-background">
            <Image src={Logo} alt="" />
            <div className="flex gap-3">
                <span 
                    className="flex center justify-center bg-purple-light text-purple-dark p-2 w-36 h-10 rounded"
                >
                    <MapPin 
                        color="#8047F8" size={18} 
                        weight="fill"
                        className="m-1"
                    />
                    São Paulo, SP
                </span>
                <span 
                    className="flex bg-yellow-light p-2 w-10 h-10 center justify-center rounded"
                >
                    <ShoppingCart 
                        color="#C47F17" 
                        size={18} 
                        weight="fill"
                        className="m-1 cursor-pointer"
                    />
                </span>
            </div>
        </div>
    )
}