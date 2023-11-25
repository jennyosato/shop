import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-white px-2.5 flex flex-col gap-[53px] text-black">
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold text-black font-montserrat">
        Follow us
      </h2>
      <div className="flex gap-[31px]">
       <a href="#">
        <Image src='/insta.svg'width={36} height={28} alt="intstgram logo" />
       </a>
       <a href="#">
        <Image src='/whatsapp.svg'width={30} height={31} alt="Whatsapp logo" />
       </a>
       <a href="#">
        <Image src='/twitter.svg'width={30} height={31} alt="Twitter logo" />
       </a>
       <a href="#">
        <Image src='/linkedin.svg'width={30} height={31} alt="LinkedIn logo" />
       </a>
      </div>
    </div>
    <div className="flex flex-col gap-[53px] font-montserrat md:flex-row md:justify-between md:px-4">
      <div className="text-black">
        <h2 className="text-4xl font-semibold  text-black">Company</h2>
        <ul
          role="list"
          className="flex flex-col gap-[15px] font-[montserrat] text-2xl py-[15px]"
        >
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Shop</Link>
          </li>
          <li>
            <Link href="#">Search</Link>
          </li>
          <li>
            <Link href="#">Sign in</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-4xl font-semibold text-black">Resources</h2>
        <ul
          role="list"
          className="flex flex-col gap-[15px] font-[montserrat] text-2xl py-[15px]"
        >
          <li>
            <Link href="#">Become a seller</Link>
          </li>
          <li>
            <Link href="#">Help and support</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-4xl font-semibold text-black">Legal</h2>
        <ul
          role="list"
          className="flex flex-col gap-[15px] font-[montserrat] text-2xl py-[15px]"
        >
          <li>
            <Link href="#">Terms and Condition</Link>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <span className="text-xs font-[arimo] font-bold text-black text-center mb-[77px]">
      Copyright © 2023 Shoptinga inc. All rights reserved.
    </span>
  </footer>
  )
}

export default Footer