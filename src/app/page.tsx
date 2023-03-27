"use client"
import { Roboto, Baloo_2 } from 'next/font/google'
import Image from 'next/image'
import { Header } from './components/header'
import CoffeeCup from './assets/coffeehome.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from './components/coffeeCard'
import { coffeeMenu } from './utils/coffeeMenu'

const roboto = Roboto({ subsets: ['latin'], weight: ["400", "700"], variable: "--text" })
const baloo_2 = Baloo_2({ subsets: ['latin'], weight: ["700", "800"], variable: "--header" })

export default function Home() {
  return (
    <>
      <Header/>
      <div className='flex justify-between px-40 pt-[94px] pb-[108px] heigh-[544px]'>

        <div className="">
          <div>
            <h1 className={`${baloo_2.className} text-base-title text-5xl leading-[160%] font-extrabold`}>Encontre o café perfeito<br/> para qualquer hora do dia</h1>
            <p 
              className={`${roboto.className} text-base-subtitle text-xl pt-4`}
            >Com o Coffee Delivery você recebe seu café onde estiver, a<br/> qualquer hora</p>
          </div>

          <div
            className={`${roboto.className} mt-16 grid grid-cols-2 gap-5 text-base-text text-base`}
          >
            <span className='flex items-center'>
              <span className='bg-yellow-dark text-background mr-3 p-2 rounded-full'>
                <ShoppingCart weight='fill'/>
              </span>
              Compra simples e segura
            </span>
            <span className='flex items-center'>
              <span className='mr-3 p-2 bg-base-text text-background rounded-full'>
                <Package weight='fill'/>
              </span>
              Embalagem mantém o café intacto
            </span>
            <span className='flex items-center'>
              <span className='bg-yellow text-background mr-3 p-2 rounded-full'>
                <Timer weight='fill'/>
              </span>
              Entrega rápida e rastreada
            </span>
            <span className='flex items-center'>
              <span className='bg-purple text-background mr-3 p-2 rounded-full'>
                <Coffee weight='fill'/>
              </span>
              O café chega fresquinho até você
            </span>
          </div>
        </div>
        <div>
          <Image src={CoffeeCup} alt="copo de café"/>
        </div>
      </div>
      
      {/* Lista de cafés */}
      <div className='mx-40 pt-8 flex flex-col'>
        <h2 className={`${baloo_2.className} mb-[54px] text-[32px] text-base-subtitle font-extrabold`}>
          Nossos cafés
        </h2>
        <div className='grid grid-cols-4 gap-x-[32px] gap-y-5'>
          {coffeeMenu.map(item => 
            <CoffeeCard
              coffeeDescription={item.coffeeDescription}
              coffeeId={item.coffeeId}
              coffeeImg={item.coffeeImg}
              coffeeLabel={item.coffeeLabel}
              coffeePrice={item.coffeePrice}
              coffeeName={item.coffeeName}
              key={item.coffeeId}
            />
          )}
        </div>
        <br />
      </div>
    </>
  )
}
