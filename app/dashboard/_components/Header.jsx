import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
        {/* <h3>AI Course</h3> */}
        <Link href='/'>
        <Image src={'/logo.png'} width={50} height={50} className='block md:hidden'/></Link>
        <div className='flex-grow'></div>
        <UserButton/>
    </div>
  )
}

export default Header