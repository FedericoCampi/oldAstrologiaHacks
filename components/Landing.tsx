import Image from 'next/image'
import React  from 'react'
import StarsCanvas from './StarsCanvas'
import Header from './Header'
import Basket from './Basket'
import TextAnimation from './TextAnimation'

const Landing = () => {
  return (
    
    <section className='sticky top-0 mx-auto flex h-screen w-full items-center
        justify-between flex-col'>
        <div className='h-full w-full'>
            <Header/>
            <Basket/>
            <div className=' w-[100%] h-[100%]'>
                <div className='flex flex-col h-[95%] justify-center items-center'>
                    <TextAnimation/>
                    <div className='flex flex-col items-center'>
                        <Image 
                            className='opacity-100 transition hover:opacity-75 w-[80px] h-[60px] sm:w-[100px] sm:h-[60px]'
                            width={120}
                            height={80}
                            src={'/logoAHwhite.png'} 
                            alt={'logoAH'}
                            style={{ transform: 'scale(1)' }}
                        />
                        <p className='text-center text-[13px] text-white font-apercu opacity-100 transition hover:opacity-75'>
                            astrologíahacks
                        </p>
                    </div>
                </div>
            <StarsCanvas/>
            </div>
        </div>
    </section>
  )
}

export default Landing