import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { selectBasketItems } from '../redux/basketSlice'
import { signIn, signOut, useSession } from 'next-auth/react';
import ModalNav from './ModalNav';

const Header = () => {

  const { data: session } = useSession();
  const items = useSelector(selectBasketItems)

  return (
    <header className='absolute top-0 z-30 flex w-full items-center justify-between bg-transparent p-4'>
      
      <div className='flex items-center justify-center md:w-1/5 pl-6'>
        <Link href='/'>
          <div className='relative w-5 cursor-pointer opacity-100 h-10 transition hover:opacity-75'>
              <Image 
                src={'/logoAHwhite.png'} 
                alt={'logoAH'} 
                objectFit='contain' 
                layout='fill' 
                style={{ transform: 'scale(3.5)' }}
              />
          </div>
        </Link>
      </div>
      <div id='linksHeader' className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
        <ModalNav title='Calculá tu carta'/>
        <ModalNav title='Tienda'/>
        <ModalNav title='Blog'/>
        <ModalNav title='Contacto'/>
      </div>
      <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
        <MagnifyingGlassIcon className='headerIcon' style={{ color: 'white' }}/>
        <Link href='/checkout'>
          <div className='relative cursor-pointer'>
            {items.length > 0 && (
              <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full
              bg-gradient-to-r from-pink-500 to-violet-500 text-white text-[12px] font-bold'>
                {items.length}
              </span>
            )}
            <ShoppingBagIcon className='headerIcon' style={{ color: 'white' }}/>
          </div>
        </Link>
        { session ? (
          <Image 
            src={
              session.user?.image || 
              '/appleIconBlack.png'} 
            alt='user'
            className='cursor-pointer rounded-full'
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <UserCircleIcon className='headerIcon'
            style={{ color: 'white' }}
            onClick={() => signIn()}
          />
        )}
        
      </div>
    </header>
  )
}

export default Header