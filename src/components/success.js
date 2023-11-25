import Image from 'next/image'
import React from 'react'

const Success = () => {
  return (
    <div>
        <Image src='/success.svg' alt='check' />
        <h2>Awesome you're #1,000 on the Shoptinga waitlist</h2>
        <p>invite people to move up in line</p>

    </div>
  )
}

export default Success