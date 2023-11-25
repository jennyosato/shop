import Collapsible from "@/components/collapsible";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collapsibleArr } from "@/utils/data";


export default function Home() {
  const collapsible = collapsibleArr.map(item => (<Collapsible title={item.title} text={item.text} />) )
  return (
    <>
      <main className="mb-[51px]">
        <Header />
        <section className="inline-flex flex-col font-[montserrat] items-center justify-center w-full bg-white min-h-[614px]">
          <div className="py-[22px] w-[326px] md:w-auto">
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
          <div className="eclipse_bg w-9/12 h-96 flex justify-center items-center relative">
            <div className="">
              <Image src="/ecllipse.svg" width={136} height={129} alt="" />
            </div>
            <div className="absolute top-[126px] left-[0]">
              <Image src="/Ellipse7.svg" width={75} height={71} alt="" />
            </div>
            <div className="absolute top-[230px] left-[97px]">
              <Image src="/Ellipse8.svg" width={73} height={64} alt="" />
            </div>
            <div className="absolute top-10">
              <Image src="/Ellipse9.svg" width={78} height={70} alt="" />
            </div>
            <div className="absolute top-11">
              <Image src="/Ellipse10.svg" width={81} height={70} alt="" />
            </div>
            <div className="absolute top-10 right-0">
              <Image src="/Ellipse11.svg" width={78} height={71} alt="" />
            </div>
            <div className="absolute left-[60.5px] top-10">
              <Image src="/Ellipse12.svg" width={83} height={69} alt="" />
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
        {/* Frequently asked questions */}
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
            {collapsible}
          </div>

          <button className="w-[195px] h-[60px] font-[monserrat] font-bold text-sm text-center text-[#FF8701] pl-5 pr-[17px] rounded-lg border-[1.5px] border-[#FF8601] flex justify-center items-center">
            See More FAQs
          </button>
        </section>
      </main>
   <Footer />
    </>
  );
}
