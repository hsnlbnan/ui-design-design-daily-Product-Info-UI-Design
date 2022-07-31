import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Day 1 | UiDesignDaily</title>
      </Head>
      <div className="flex flex-col items-center justify-center font-poppins bg-[#EEF2F9] h-[100vh] w-[100vw]">
        <div className="bg-white rounded-lg shadow-bgShadow p-8 shadow-[#B3C1D9] flex flex-col md:flex-row">
          <div className="my-0 mx-auto md:mr-8">
            <Image
              src="/headPhone.png"
              alt="headphone"
              layout="fixed"
              width="250px"
              height="223px"
            />
          </div>
          <div className="shrink-0">
            <div className="text-sm text-white rounded-full bg-mainColor px-2 py-1 inline-flex">
              Free shipping
            </div>
            <div className="text-mainColor text-[24px] max-w-[370px] font-semibold mt-3 mb-8">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </div>
            <div className="text-mainColor text-lg	">1 599,-</div>
            <div className="text-mainColor text-5xl font-bold">799,-</div>
            <div className="text-mainColor opacity-60 text-sm">
              The offer is valid until April 3 or as long as stock lasts!
            </div>
            <button className="bg-secondary text-white w-full py-4 rounded-lg shadow-customShadow mt-8 mb-8 hover:bg-secondaryDark transition linear duration-200">
              Add to cart
            </button>
            <div className="flex items-center mb-8">
              <span className="w-4 h-4 bg-green inline-flex rounded-full mx-2"></span>
              50+ pcs. in stock.
            </div>
            <div className="flex gap-4">
              <button className="flex items-center text-xs p-4 border-2 border-border rounded-lg w-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-4"
                >
                  <path
                    d="M9.83333 26.6667H23.1667"
                    stroke="#191847"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 7.99999L16.5 6.66666L24.5 7.99999"
                    stroke="#191847"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 4V26.6667"
                    stroke="#191847"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 16L8.5 8L4.5 16C4.5 17.0609 4.92143 18.0783 5.67157 18.8284C6.42172 19.5786 7.43913 20 8.5 20C9.56087 20 10.5783 19.5786 11.3284 18.8284C12.0786 18.0783 12.5 17.0609 12.5 16Z"
                    stroke="#191847"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.5 16L24.5 8L20.5 16C20.5 17.0609 20.9214 18.0783 21.6716 18.8284C22.4217 19.5786 23.4391 20 24.5 20C25.5609 20 26.5783 19.5786 27.3284 18.8284C28.0786 18.0783 28.5 17.0609 28.5 16Z"
                    stroke="#191847"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add to cart
              </button>
              <button className="flex text-xs items-center p-4 border-2 border-border rounded-lg w-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-4"
                >
                  <path
                    d="M26.5 18.096L16.5 28L6.5 18.096C5.84041 17.4542 5.32086 16.6827 4.97406 15.8302C4.62727 14.9777 4.46075 14.0626 4.48498 13.1426C4.50922 12.2226 4.72368 11.3175 5.11488 10.4845C5.50607 9.65139 6.06551 8.90834 6.75798 8.30211C7.45045 7.69588 8.26094 7.23959 9.13842 6.96198C10.0159 6.68437 10.9413 6.59145 11.8565 6.68907C12.7716 6.78669 13.6567 7.07274 14.4558 7.52921C15.255 7.98568 15.951 8.60267 16.5 9.34133C17.0514 8.60803 17.7482 7.99643 18.5468 7.54481C19.3454 7.09319 20.2287 6.81127 21.1412 6.7167C22.0538 6.62212 22.9761 6.71693 23.8504 6.99519C24.7246 7.27345 25.532 7.72917 26.2221 8.33382C26.9121 8.93847 27.4699 9.67905 27.8606 10.5092C28.2512 11.3393 28.4663 12.2412 28.4924 13.1583C28.5185 14.0754 28.355 14.988 28.0122 15.839C27.6693 16.69 27.1545 17.4611 26.5 18.104"
                    stroke="#191847"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
