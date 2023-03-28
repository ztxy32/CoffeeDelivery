"use client"
import { Header } from "@/app/components/header"
import { Baloo_2 } from "next/font/google"
import { AddressSection } from "./components/addressSection"
import { PaymentSection } from "./components/paymentSection"
import { SelectedCoffeesCard } from "./components/selectedCoffeesCard"

const baloo_2 = Baloo_2({subsets: ["latin"], weight: ["700"]})

export default function Checkout(){
    return(
        <>
            <Header/>
            <div className="flex mt-10 mx-40">
                <div className="mr-[32px]">
                    <h1 className={`${baloo_2.className} text-base-subtitle mb-4`}>
                        Complete teu pedido
                    </h1>
                    <AddressSection/>
                    <PaymentSection/>
                </div>
                <div>
                    <h1 className={`${baloo_2.className} text-base-subtitle mb-4`}>
                        Cafés selecionados
                    </h1>
                    <SelectedCoffeesCard/>
                </div>
            </div>
        </>
    )
}