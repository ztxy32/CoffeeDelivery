"use client"
import { Header } from "@/app/components/header"
import { Baloo_2, Roboto } from "next/font/google"
import Image from "next/image"
import { MapPinLine, Trash, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react"
import Coffee from "@/app/assets/expresso_tradicional.png"
import { Counter } from "@/app/components/counter"

const baloo_2 = Baloo_2({subsets: ["latin"], weight: ["700"]})
const roboto = Roboto({subsets: ["latin"], weight: ["400","700"]})

export default function Checkout(){
    return(
        <>
            <Header/>
            <div className="flex mt-10 mx-40">

                {/*div complete seu pedido*/}
                <div className="mr-[32px]">
                    <h1 className={`${baloo_2.className} text-base-subtitle mb-4`}>
                        Complete teu pedido
                    </h1>

                    {/* card endereço de entrega */}
                    <div className="bg-base-card p-10 rounded-md">
                        <div className="flex flex-row mb-8">
                            <MapPinLine className="text-yellow" size={22}/>
                            <span className={`${roboto.className} flex flex-col pl-2 font-normal`}>
                                <p className="text-base-subtitle text-base">
                                    Endereço de entrega
                                </p>
                                <p className="text-base-text text-sm">
                                    Informe o endereço onde deseja receber seu pedido
                                </p>
                            </span>
                        </div>

                        {/* Input section */}
                        <div className="flex flex-col">
                            <input 
                                type="text" 
                                name="CEP" 
                                placeholder="CEP"
                                className="bg-base-input p-3 mb-4 rounded" 
                            />
                            <input 
                                type="text" 
                                name="Rua" 
                                placeholder="Rua" 
                                className="bg-base-input p-3 mb-4 rounded" 
                            />

                            <span className="flex">
                                <input 
                                    type="text" 
                                    name="Numero" 
                                    placeholder="Número" 
                                    className="bg-base-input p-3 mb-4 rounded mr-3" 
                                />
                                <input 
                                    type="text" 
                                    name="Complemento" 
                                    placeholder="Complemento" 
                                    className="bg-base-input p-3 mb-4 rounded flex-1" 
                                />
                            </span>
                            
                            <span className="flex">
                                <input 
                                    type="text" 
                                    name="Bairro" 
                                    placeholder="Bairro" 
                                    className="bg-base-input p-3 mb-4 rounded mr-3 w-[200px]" 
                                />
                                <input 
                                    type="text" 
                                    name="Cidade" 
                                    placeholder="Cidade" 
                                    className="bg-base-input p-3 mb-4 rounded mr-3" 
                                />
                                <input 
                                    type="text" 
                                    name="UF" 
                                    placeholder="UF" 
                                    className="bg-base-input p-3 mb-4 rounded w-[60px]" 
                                />
                            </span>
                        </div>
                        
                    </div>

                    {/* Card de pagamento */}
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

                        {/* Botões de metodo de pagamento*/}
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
                </div>

                {/*div pai cafés seleccionados*/}
                <div>
                    <h1 className={`${baloo_2.className} text-base-subtitle mb-4`}>
                        Cafés selecionados
                    </h1>

                    {/*Card de cafés selecionados*/}
                    <div className="bg-base-card p-10 rounded-tl-md rounded-tr-[44px] rounded-br-md rounded-bl-[44px]">
                        
                        {/*div item seleccionado*/}
                        <div className="divide-base-button divide-y">
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
                        </div>

                        {/*div total*/}
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
                </div>
            </div>
        </>
    )
}