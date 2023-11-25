import Collapsible from "@/components/collapsible";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="mb-[51px]">
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
            <button className="outline-none text-white -ml-4 text-[13px] text-center flex justify-center items-center gap-[5px] p-3 rounded-[10px] bg-[#FEA500]">
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
        <section className="inline-flex flex-col font-[montserrat] items-center justify-center w-full bg-white min-h-[614px]">
          <div className="py-[22px]">
            <h2 className="text-black text-center font-[montserrat] text-[23px] font-semibold leading-[30px] tracking-[0.2px]">
              Start <span className="text-[#FEA302]">selling</span> your product
              by creating an account in less than 5 minutes
            </h2>
          </div>
          <div className="flex flex-col space-y-[34px] p-2.5 ">
            <div className="flex items-start gap-[5px]">
              <p className="inline-flex py-2.5 px-[15px] font-semibold font-montserrat text-black flex-col justify-center items-center gap-[10px] rounded-[14px] check">
                1
              </p>

              <div className="flex flex-col gap-[10px]">
                <h2 className="text-[18px] font-bold leading-[30px] tracking-[0.2px]">
                  Create an account
                </h2>
                <p className="self-stretch text-black font-montserrat font-medium leading-6 tracking-[0.2px] ">
                  create a free shoptinga account if you're a new user or login
                  if you're a registered user.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[5px]">
              <p className="inline-flex py-2.5 px-[15px] font-semibold font-montserrat text-black flex-col justify-center items-center gap-[10px] rounded-[14px] check">
                2
              </p>

              <div className="flex flex-col gap-[10px]">
                <h2 className="text-[18px] font-bold leading-[30px] tracking-[0.2px]">
                  Create your store
                </h2>
                <p className="self-stretch text-black font-medium font-montserrat leading-6 tracking-[0.2px] ">
                  Setup your store, with product photos and specifications
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[5px]">
              <p className="inline-flex py-2.5 px-[15px] font-semibold font-montserrat text-black flex-col justify-center items-center gap-[10px] rounded-[14px] check">
                3
              </p>
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-[18px] font-bold leading-[30px] tracking-[0.2px]">
                  Start selling
                </h2>
                <p className="self-stretch text-black font-montserrat font-medium leading-6 tracking-[0.2px] ">
                  Share your store link, start sellng and accept payment in
                  digital or physical currency
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full mt-[62px]">
            <button className="w-[169px] h-[60px] items-center justify-center flex px-5 bg-black text-white rounded-lg text-sm font-bold">
              Start selling now
            </button>
          </div>
        </section>
        <section className="min-h-[320px]  h-auto w-full flex flex-col justify-center gap-5 items-center shrink-0 mr-[19px]">
         
         
          
          <div className="eclipse_bg w-9/12 h-96 flex justify-center items-center relative" >
          <div className="">
            <Image src='/ecllipse.svg' width={136} height={129} alt="" />
          </div>
          <div className="absolute top-[126px] left-[0]">
            <Image src='/Ellipse7.svg' width={75} height={71} alt="" />
          </div>
          <div className="absolute top-[230px] left-[97px]">
            <Image src='/Ellipse8.svg' width={73} height={64} alt="" />
          </div>
          <div className="absolute top-10">
            <Image src='/Ellipse9.svg' width={78} height={70} alt="" />
          </div>
          <div className="absolute top-11">
            <Image src='/Ellipse10.svg' width={81} height={70} alt="" />
          </div>
          <div className="absolute top-10 right-0">
            <Image src='/Ellipse11.svg' width={78} height={71} alt="" />
          </div>
          <div className="absolute left-[60.5px] top-10">
            <Image src='/Ellipse12.svg' width={83} height={69} alt="" />
          </div>
          </div>
          <p className="text-xs text-black text-center font-inter">
            Connect with <span className="text-[#FF8701]">customers</span>{" "}
            around the world{" "}
          </p>
        </section>
        <div className="flex justify-end mt-[23px]">
          <Image src="/group.svg" alt="group icon" width={65} height={64} />
        </div>
        <section className="flex flex-col gap-[42px] font-[spaceMono]">
          <h2 className="font-bold text-center tracking-[0.52px] text-[26px] font-[spaceMono] leading-10 text-black">
            Reasons why you should sell with{" "}
            <span className="text-[#FE7A00]">shoptinga</span>
          </h2>
          <div className="flex flex-col gap-[29px] px-2.5">
            <div className="flex items-start">
              <div className="w-[47px] h-[49.5px] flex shrink-0 relative">
                <div className="box-shadow w-10 h-[30px] flex shrink-0 border-2 rounded-lg border-[#FE7A00] absolute right-0 top-1" />
                <Image
                  src="/desktop.png"
                  alt="desktop-icon"
                  width={38}
                  height={38}
                  className="z-40 mt-4"
                />
              </div>

              <div className="flex flex-col gap-[17px] h-[236px] sm:h-auto">
                <h2 className="text-xl font-bold leading-10 tracking-[0.6px] font-[spaceMono] text-black ">
                  Digital product
                </h2>
                <p className="text-[#57595A] capitalize tracking-[0.14px] leading-[23px] font-bold text-sm">
                  amplify your digital offerings by joining our platform to
                  connect with tech-savvy consumer seeking innovative digital
                  solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex shrink-0 relative">
                <Image
                  src="/shop-icon.svg"
                  alt="shop-icon"
                  width={51}
                  height={45}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-[17px] h-[236px] sm:h-auto">
                <h2 className="text-xl font-bold leading-10 tracking-[0.6px] font-[spaceMono] text-black ">
                  Physical product
                </h2>
                <p className="text-[#57595A] capitalize tracking-[0.14px] leading-[23px] font-bold text-sm">
                  expand your digital your market reach by showcasing your high
                  quality physical product on our platform, reaching eager
                  customer globally
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex shrink-0 relative">
                <Image
                  src="/easy-payment-icon.svg"
                  alt="easy-icon"
                  width={51}
                  height={45}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-[17px] h-[236px] sm:h-auto">
                <h2 className="text-xl font-bold leading-10 tracking-[0.6px] font-[spaceMono] text-black ">
                  Easy Payment method
                </h2>
                <p className="text-[#57595A] capitalize tracking-[0.14px] leading-[23px] font-bold text-sm">
                  optimize your sales with our seamless payment methods,
                  empowering you to receive payments hassle free and efficiently
                  with crptocurrency and fiat money.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex shrink-0 relative">
                <Image
                  src="/fast-delivery-icon.svg"
                  alt="delivery-icon"
                  width={51}
                  height={45}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-[17px] h-[236px] sm:h-auto">
                <h2 className="text-xl font-bold leading-10 tracking-[0.6px] font-[spaceMono] text-black ">
                  Fast delivery
                </h2>
                <p className="text-[#57595A] capitalize tracking-[0.14px] leading-[23px] font-bold text-sm">
                  enhance customer satisfaction by leveraging our rapid delivery
                  service, ensuring your products reach buyers promptly
                  fostering a positive buying experience with our logistic
                  partner quikpik
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-end mt-[23px]">
          <Image src="/group.svg" alt="group icon" width={65} height={64} />
        </div>
        <section className="py-[25px] px-[7px] flex flex-col items-center gap-[38px] rounded-[10px] faq">
          <h2 className="font-semibold text-black font-[montserrat]">FAQs</h2>
          <h3 className="font-semibold text-black font-[montserrat]">
            Frequently asked question
          </h3>
          <div className="border border-white rounded w-[231px] h-auto flex justify-center items-center p-2.5">
            <input
              type="search"
              placeholder="Search"
              className="bg-transparent focus:outline-none placeholder:text-center placeholder:text-black"
            />
          </div>
          <div className="collapsible flex flex-col gap-[20px]">
            <Collapsible
              title="What is Shopringa"
              text="
shoptinga has been crafted as an operating system that seamlessly integrates with both digital and physical products, providing a platform that not only facilities transactions but also enhances the overall experience for both buyers and sellers. this  innovative system is dedicated to creating a sense of ease and empowerment by streamlining the interaction between consumers and empowerment by streamlining between consumers and product in in the ever evolving marketplace."
            />
            <Collapsible
              title={"can i sell physical product on shoptinga?"}
              text="yes, the shoptinga storefront empower you to effortlessly sell physical products, harnessing the capabilities pf the shoptinga platform.
"
            />
            <Collapsible
              title={"is it only fiat i can pay with ?"}
              text="
shoptinga offers a dual payment system, allowing you the flexibility to choose between traditional fiat currency or cryptocurrency for your transactions.
"
            />
            <Collapsible
              title={"what type of digital product can i sell ?"}
              text="
With shoptinga you can sell all kinds of digital products like ebooks, online courses, music, softwares, digital arts, mobile apps, games, movies and tv shows, virtual events and more . 

"
            />
            <Collapsible
              title={"Are there any fees for using shoptinga ?"}
              text="certainly, sellers csn enjoy a complimentary 3 month free trial period with shoptinga. Following this trial, a monthly subscription of 2000 naira is applicable.
"
            />
          </div>

          <button className="w-[195px] h-[60px] font-[monserrat] font-bold text-sm text-center text-[#FF8701] pl-5 pr-[17px] rounded-lg border-[1.5px] border-[#FF8601] flex justify-center items-center">
            See More FAQs
          </button>
        </section>
      </main>
      <footer className="w-full bg-white px-2.5 flex flex-col gap-[53px] text-black">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-semibold text-black font-montserrat">Follow us</h2>
          <div className="flex gap-[31px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="28"
              viewBox="0 0 36 28"
              fill="none"
            >
              <path
                d="M22.3721 7.51661C22.0845 7.51661 21.8516 7.28357 21.8516 6.9961C21.8516 6.70863 22.0845 6.47559 22.3721 6.47559"
                stroke="#FEA500"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.3721 7.51661C22.6596 7.51661 22.8926 7.28357 22.8926 6.9961C22.8926 6.70863 22.6596 6.47559 22.3721 6.47559"
                stroke="#FEA500"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.64551 7.07393C2.64551 4.11528 5.04397 1.7168 8.00264 1.7168H22.2884C25.247 1.7168 27.6455 4.11528 27.6455 7.07393V21.3597C27.6455 24.3183 25.247 26.7168 22.2884 26.7168H8.00264C5.04397 26.7168 2.64551 24.3183 2.64551 21.3597V7.07393Z"
                stroke="#FEA500"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.83594 14.2155C9.83594 14.9127 9.97326 15.6031 10.2401 16.2472C10.5069 16.8914 10.898 17.4767 11.391 17.9697C11.884 18.4627 12.4693 18.8537 13.1134 19.1206C13.7575 19.3874 14.4479 19.5247 15.1452 19.5247C15.8424 19.5247 16.5328 19.3874 17.1769 19.1206C17.821 18.8537 18.4063 18.4627 18.8993 17.9697C19.3923 17.4767 19.7834 16.8914 20.0502 16.2472C20.317 15.6031 20.4544 14.9127 20.4544 14.2155C20.4544 12.8074 19.895 11.457 18.8993 10.4613C17.9037 9.46561 16.5532 8.90625 15.1452 8.90625C13.7371 8.90625 12.3866 9.46561 11.391 10.4613C10.3953 11.457 9.83594 12.8074 9.83594 14.2155Z"
                stroke="#FEA500"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
            >
              <path
                d="M15.4959 1C7.87303 1.00238 1.50432 7.38115 1.50435 15C1.50437 17.7467 2.32163 20.46 3.84701 22.7538L1.5 29L9.35923 27.5783C11.2791 28.5169 13.3872 28.9872 15.4959 28.9886C23.1254 28.9938 29.5 22.6235 29.5 15C29.5 7.38515 23.1231 0.995498 15.4959 1Z"
                stroke="#FEA500"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.2662 21.1647C18.1596 22.3806 20.1336 21.495 21.5084 20.4694C22.4581 19.7609 22.4265 18.3945 21.6155 17.5308L20.0161 15.8276C19.4094 16.4345 18.2272 16.7348 17.4058 16.4848C15.6402 15.9472 14.8992 15.027 14.2986 14.0912C13.6089 13.0165 14.3878 11.4114 14.9945 10.8045L13.2118 9.1766C12.4603 8.49032 11.3187 8.37451 10.663 9.15291C9.36559 10.693 8.5587 13.0311 9.5143 14.5199C11.2297 17.1925 13.5942 19.449 16.2662 21.1647Z"
                stroke="#FFBC3F"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
            >
              <path
                d="M8.9551 21.1671C7.38776 22.6091 5.58878 23.6672 3.66522 24.2781C3.45334 24.3683 3.27028 24.5326 3.14093 24.7486C3.01155 24.9648 2.94215 25.2225 2.94215 25.4865C2.94215 25.7506 3.01155 26.0082 3.14093 26.2244C3.27028 26.4407 3.45334 26.605 3.66522 26.695C18.8544 33.997 28.5123 22.7097 27.0416 10.1883L29.5 4.22324H26.6465C23.0907 -0.89332 13.6523 -0.636206 15.2108 10.2654C15.2108 10.2654 10.1623 11.3196 3.70912 3.889C3.55984 3.71637 3.37144 3.59745 3.16626 3.54637C2.96107 3.49528 2.7477 3.51412 2.55138 3.60069C2.35506 3.68726 2.18403 3.83793 2.05855 4.03486C1.93308 4.23175 1.85841 4.46668 1.84338 4.71176C1.16104 7.99729 1.50251 11.4602 2.80632 14.477C4.11014 17.4938 6.2906 19.8662 8.9551 21.1671Z"
                stroke="#FEA500"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
            >
              <path
                d="M7.51826 3.72888C7.52453 4.47363 7.21363 5.19076 6.65272 5.72532C6.09184 6.25986 5.32598 6.56892 4.52066 6.58569C3.71701 6.55843 2.95542 6.24677 2.39323 5.71507C1.83107 5.18339 1.51129 4.47236 1.5 3.72888C1.53494 3.00454 1.86645 2.31955 2.42738 1.81282C2.98829 1.30609 3.73663 1.01551 4.52066 1C5.30243 1.0158 6.04811 1.3071 6.60529 1.81434C7.16247 2.32158 7.48907 3.00644 7.51826 3.72888ZM1.82282 11.6597C1.82282 10.0181 2.95269 10.274 4.52066 10.274C6.08865 10.274 7.19546 10.0181 7.19546 11.6597V27.6493C7.19546 29.3123 6.06558 28.9711 4.52066 28.9711C2.97575 28.9711 1.82282 29.3123 1.82282 27.6493V11.6597Z"
                stroke="#FEA500"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.8535 11.6595C11.8535 10.7428 12.2224 10.4017 12.7989 10.2951C13.3754 10.1885 15.3584 10.2951 16.0502 10.2951C16.7419 10.2951 17.0186 11.3397 16.9955 12.1285C17.5873 11.3943 18.3729 10.8127 19.2772 10.4394C20.1816 10.0661 21.1744 9.91368 22.1607 9.9966C23.1292 9.94185 24.0994 10.0761 25.0082 10.3906C25.9167 10.7052 26.7439 11.193 27.4353 11.8223C28.1269 12.4516 28.6674 13.2084 29.0219 14.0435C29.3765 14.8786 29.537 15.7734 29.4932 16.6696V27.5851C29.4932 29.2481 28.3865 28.9069 26.8184 28.9069C25.2504 28.9069 24.1437 29.2481 24.1437 27.5851V19.0574C24.1842 18.6185 24.1222 18.1766 23.9617 17.7619C23.8012 17.3472 23.5459 16.9692 23.2135 16.6537C22.8811 16.3382 22.479 16.0926 22.0347 15.9334C21.5905 15.7743 21.1144 15.7054 20.6388 15.7315C20.1654 15.7204 19.6949 15.8024 19.2583 15.9721C18.8218 16.1417 18.4292 16.3952 18.1066 16.7156C17.7839 17.0361 17.5386 17.4163 17.3868 17.831C17.235 18.2457 17.1803 18.6856 17.2262 19.1213V27.6491C17.2262 29.3121 16.0963 28.9709 14.5283 28.9709C12.9603 28.9709 11.8535 29.3121 11.8535 27.6491V11.6595Z"
                stroke="#FEA500"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-[53px] font-montserrat md:flex-row md:justify-between md:px-4">
          <div className="text-black">
            <h2 className="text-4xl font-semibold  text-black">Company</h2>
            <ul role="list" className="flex flex-col gap-[15px] font-[montserrat] text-2xl py-[15px]">
              <li><Link href='#'>Home</Link></li>
              <li><Link href='#'>Shop</Link></li>
              <li><Link href='#'>Search</Link></li>
              <li><Link href='#'>Sign in</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-black">Resources</h2>
            <ul role="list" className="flex flex-col gap-[15px] font-[montserrat] text-2xl py-[15px]">
            <li><Link href='#'>Become a seller</Link></li>
              <li><Link href='#'>Help and support</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-black">Legal</h2>
            <ul role="list" className="flex flex-col gap-[15px] font-[montserrat] text-2xl py-[15px]">
            <li><Link href='#'>Terms and Condition</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
        <span className="text-xs font-[arimo] font-bold text-black text-center mb-[77px]">Copyright © 2023 Shoptinga inc. All rights reserved.</span>
      </footer>
    </>
  );
}
