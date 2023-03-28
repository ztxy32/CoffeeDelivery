import { Roboto } from "next/font/google"
import { MapPinLine } from "phosphor-react"
const roboto = Roboto({subsets: ["latin"], weight: ["400","700"]})

export function AddressSection(){
    return(
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
    )
}