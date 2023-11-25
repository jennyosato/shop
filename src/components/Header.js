'use client'
import React, {useState} from 'react'
import Image from 'next/image'

const Header = () => {
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const handleClick = () => {
      
    }
  return (
    <div
    style={{
      backgroundImage:
        "linear-gradient(180deg, rgba(21, 20, 18, 0.50) 0%, rgba(14, 13, 12, 0.50) 100%), url('/bg-img.png')",
    }}
    className="w-full h-[656px] bg-no-repeat bg-cover bg-center "
  >
    <div className="w-full min-h-[89px] h-auto mb-[63px] py-0 pl-0.5 pr-[34px] flex justify-between items-center shrink-0">
      <div className="w-[127px] h-[67px] max-w-full relative">
        <Image src="/logo_img.png" alt="logo" fill />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
      >
        <path
          d="M19.1661 0.975586H7.84741C2.93096 0.975586 0 3.69339 0 8.25228V18.7352C0 23.3066 2.93096 26.0244 7.84741 26.0244H19.1525C24.069 26.0244 27 23.3066 27 18.7477V8.25228C27.0135 3.69339 24.0825 0.975586 19.1661 0.975586ZM20.2601 20.0753H6.75337C6.19959 20.0753 5.74036 19.6495 5.74036 19.136C5.74036 18.6225 6.19959 18.1967 6.75337 18.1967H20.2601C20.8139 18.1967 21.2731 18.6225 21.2731 19.136C21.2731 19.6495 20.8139 20.0753 20.2601 20.0753ZM20.2601 14.4393H6.75337C6.19959 14.4393 5.74036 14.0135 5.74036 13.5C5.74036 12.9865 6.19959 12.5607 6.75337 12.5607H20.2601C20.8139 12.5607 21.2731 12.9865 21.2731 13.5C21.2731 14.0135 20.8139 14.4393 20.2601 14.4393ZM20.2601 8.80335H6.75337C6.19959 8.80335 5.74036 8.37752 5.74036 7.86402C5.74036 7.35052 6.19959 6.92469 6.75337 6.92469H20.2601C20.8139 6.92469 21.2731 7.35052 21.2731 7.86402C21.2731 8.37752 20.8139 8.80335 20.2601 8.80335Z"
          fill="white"
        />
      </svg>
    </div>
    <div className="w-full min-h-[201px] mb-[105px] h-auto flex flex-col items-center gap-[30px] shrink-0">
      <p className="text-sm tracking-[0.14px] text-white text-center">
        Unlock Your Business Potential with Shoptinga storefront
      </p>
      <h2 className="text-center text-2xl font-semibold text-white">
        Join the waitlist !!!{" "}
      </h2>
      <p className="text-xl font-medium text-center pl-5 pr-6 text-white w-[379px] h-[93px] md:w-auto md:h-auto">
        Don't wait any longer - join our waitlist today and be the first
        to be informed about our latest update
      </p>
    </div>
    <div className="flex justify-center min-w-[350px]">
      <input
        type="email"
        placeholder="Email"
        className="px-2 md:w-[400px] rounded-[12px] focus:outline-none placeholder:font-[montserrat] placeholder:text-black placeholder:text-[13px]"
      />
      <button onClick={handleClick} className="outline-none text-white -ml-4 text-[13px] text-center flex justify-center items-center gap-[5px] p-3 rounded-[10px] bg-[#FEA500]">
        Join Now{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
        >
          <path
            d="M12.7441 8.16504L20.7441 16.165L12.7441 24.165"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>{" "}
      </button>
    </div>
  </div>
  )
}

export default Header