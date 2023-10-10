import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, UserCircleIcon } from '@heroicons/react/24/outline'

const Header = () => {

  const session = false;

  return (
    <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4'>
      <div className='flex items-center justify-center md:w-1/5'>
        <Link href='/'>
          <div className='relative w-5 cursor-pointer opacity-75 h-10 transition hover:opacity-100'>
              <Image src={'/appleIconBlack.png'} alt={'appleIcon'} objectFit='contain' layout='fill' style={{ transform: 'scale(1.5)' }}/>
          </div>
        </Link>
      </div>
      <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
        <a className='headerLink'>Product</a>
        <a className='headerLink'>Explore</a>
        <a className='headerLink'>Support</a>
        <a className='headerLink'>Business</a>
      </div>
      <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
        <MagnifyingGlassIcon className='headerIcon'/>
        <Link href='/'>
          <div className='relative cursor-pointer'>
            <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full
              bg-gradient-to-r from-pink-500 to-violet-500'>
              5
            </span>
            <ShoppingBagIcon className='headerIcon'/>
          </div>
        </Link>
        { session ? (
          <UserIcon className='headerIcon'/>
        ) : (
          <UserCircleIcon className='headerIcon'/>
        )}
      </div>
    </header>
  )
}

export default Header