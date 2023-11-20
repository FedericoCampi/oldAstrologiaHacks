import Image from 'next/image'
import React  from 'react'
import StarsCanvas from './StarsCanvas'
import Header from './Header'
import Basket from './Basket'

const Landing = () => {
  return (
    
    <section className='sticky top-0 mx-auto flex h-screen w-full items-center
        justify-between flex-col'>
        <div className='h-full w-full'>
            <Header/>
            <Basket/>
            
        
        <div className=' w-[100%] h-[100%]'>
            <div className='flex flex-col h-[75%] justify-center items-center'>
                <p className='text-center text-white text-[80px] opacity-100 transition hover:opacity-75 tracking-tight'>
                    Astro guía al alcance de todos
                </p>
            </div>
            <div className='flex flex-col items-center'>
                    <Image 
                        className='opacity-100 transition hover:opacity-75'
                        width={130}
                        height={130}
                        src={'/logoAHwhite.png'} 
                        alt={'logoAH'}
                    />
                    <p className='text-center text-white font-apercu opacity-100 transition hover:opacity-75'>
                        astrologíahacks
                    </p>
                </div>
                <StarsCanvas/>
            </div>
        </div>
        
        
    </section>
  )
}

export default Landing