import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-md items-center'>
      <Image  src="/mylogoo.png" alt="Header Image" width={150} height={100} />
      <button className='bg-purple-400 h-10 px-4 rounded-md' ><b>Get Started</b></button>
    </div>
  )
}

export default Header
