'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

import { HeaderProps } from './types'

export default function Header({ session }: HeaderProps) {
  return (
    <header className='border-b p-4 flex items-center justify-between'>
      <Link className='text-blue-600 font-bold text-2xl' href='/'>
        Marketplace
      </Link>

      <nav className='flex gap-4 *:rounded'>
        <button className='border border-blue-600 text-blue-600 inline-flex gap-1 items-center px-4 mr-4'>
          <FontAwesomeIcon className='h-4' icon={faPlus} />
          <span>Post an ad</span>
        </button>

        <span className='border-r'></span>

        {!session?.user && (
          <>
            <button className='border-0 text-gray-600'>Sign up</button>

            <button
              className='bg-blue-600 text-white border-0 px-6'
              onClick={() => signIn('google')}
            >
              Login
            </button>
          </>
        )}

        {session?.user && (
          <>
            <Link href={'/account'}>
              <Image
                className='rounded-md'
                src={session.user.image as string}
                alt='Avatar'
                width={36}
                height={36}
              />
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}
