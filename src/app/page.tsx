import { Roboto } from 'next/font/google'
import { Baloo_2 } from 'next/font/google'
import Image from 'next/image'
import { Header } from './components/header'
import CoffeeCup from './assets/coffeehome.png'

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"], variable: "--text" })
const baloo_2 = Baloo_2({ subsets: ['latin'], weight: ["700", "800"], variable: "--header" })

export default function Home() {
  return (
    <>
      <Header/>
      <div className='flex justify-between mx-40 mt-24'>

        <div className="">
          <div>
            <h1 className={`${baloo_2.className} text-base-title text-5xl`}>Encontre o café perfeito<br/> para qualquer hora do dia</h1>
            <p 
              className='text-base-subtitle text-xl'
            >Com o Coffee Delivery você recebe seu café onde estiver, a<br/> qualquer hora</p>
          </div>

          <div
            className="mt-16"
          >
            <span>Compra simples e segura</span>
            <span>Embalagem mantém o café intacto</span>
            <span>Entrega rápida e rastreada</span>
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
        <div>
          <Image src={CoffeeCup} alt="copo de café"/>
        </div>

      </div>
    </>
  )
}
