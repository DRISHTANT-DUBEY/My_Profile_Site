// import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/me.png";

export default function Home_comp1() {
    // const myLoader = ({ src, width, quality }) => {
    //   return `https://drishtantdubey.com/${src}?w=${width}&q=${quality || 75}`;
    // };
    return (
      <div class="container mx-auto grid grid-rows-2 items-center -mb-96 md:my-3 lg:my-3 lg:-mb-52">
        <div className="container mx-auto flex flex-col md:flex-row items-center lg:ml-24 -mb-36 md:-mb-2 lg:-mb-2">
          <div class="flex flex-col w-full lg:w-auto justify-center items-start pt-12 pb-24 px-6 lg:z-10 lg:-mr-12">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl tracking-tight text-black dark:text-white">
              Hello I’m
            </h2>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-8xl tracking-tight mb-4 text-black dark:text-white lg:w-auto ">
              Drishtant Dubey
            </h1>
            <div class="grid grid-cols-2 gap-x-24 md:gap-x-36 lg:gap-x-36">
              <div>
                <h2 className="font-bold text-base md:text-lg lg:text-2xl tracking-tight mb-4 text-black dark:text-white">
                  A Passionate
                </h2>
              </div>
              <div className="grid grid-rows-4 gap-y-1 -ml-10 md:-ml-9 lg:-ml-8">
                <svg
                  class="stroke-current stroke-2 text-black dark:text-white h-9 md:h-10 lg:h-16 w-9 md:w-10 lg:w-16"
                  viewBox="0 0 69 67"
                >
                  <path d="M67.9004 60.0407L67.9004 60.0385L67.8054 17.1946H66.8054L67.8054 17.1924L67.8054 17.1934C67.8048 14.0424 65.3656 11.9967 62.6275 11.9967C59.8667 11.9967 57.4971 14.2927 57.4971 17.0121V30.564V30.5837L57.4979 30.6033L58.2455 49.6038L52.4915 43.3478L52.4703 43.3247L52.4476 43.303L9.95707 2.55662C8.95039 1.58914 7.66726 1 6.36803 1C3.65049 1 1.00039 3.30008 1.00039 6.15228C1.00039 7.5039 1.56125 8.7143 2.58903 9.70224L2.58949 9.70267L45.0809 50.4955L45.1017 50.5154L45.1236 50.5342L51.5236 56.0055L32.805 55.2542L32.785 55.2534H32.7649H17.62C14.9289 55.2534 12.4421 57.4822 12.4421 60.3145C12.4421 63.0627 14.7939 65.33 17.8099 65.33H62.3901C63.9443 65.33 65.3345 64.8557 66.3448 63.9065C67.3622 62.9507 67.9004 61.6007 67.9004 60.0407ZM59.291 50.7405L59.3517 52.2837L58.3062 51.147L59.291 50.7405Z" />
                </svg>
                <h2 className="font-bold text-base md:text-lg lg:text-2xl tracking-tight mb-4 ml-10 md:ml-10 lg:ml-16 text-black dark:text-white">
                  Developer
                </h2>
                <h2 className="font-bold text-base md:text-lg lg:text-2xl tracking-tight mb-4 ml-10 md:ml-10 lg:ml-16 md:-mt-5 lg:-mt-8 text-black dark:text-white">
                  UX/UI-Designer
                </h2>
                <h2 className="font-bold text-base md:text-lg lg:text-2xl tracking-tight mb-4 ml-10 md:ml-10 lg:ml-16 md:-mt-10 lg:-mt-16 text-black dark:text-white">
                  ML-Enthusiast
                </h2>
              </div>
            </div>
            <div className="mb-20 -mt-32 md:-mt-36 lg:-mt-36">
              <svg
                class="w-36 md:w-60 lg:w-80 h-36 md:h-60 lg:h-80"
                viewBox="0 0 84 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="42"
                  cy="42"
                  r="41"
                  stroke="url(#paint0_linear)"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="2"
                    y1="37.6"
                    x2="82.0723"
                    y2="52.546"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.934098" stop-color="#BABABA" />
                    <stop
                      offset="0.945358"
                      stop-color="#BABABA"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
              <h2 className="font-normal hover:font-bold ml-1 -mt-20 md:-mt-32 lg:-mt-44 md:ml-7 lg:ml-10 text-xs md:text-sm lg:text-lg tracking-tight text-black dark:text-white hover:underline">
                CLICK FOR CREATIVITY &rArr;
              </h2>
            </div>
          </div>
          <div class="w-full md:w-2/3 lg:w-1/3 -mt-12 md:-mt-36 lg:-mt-52 lg:py-6 lg:-ml-12">
            <Image
              className="self-end md:self-end"
              src={profilePic}
              alt="Picture of the author"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center lg:ml-24 -mt-36">
          <div class="flex flex-col w-full lg:w-auto justify-center items-start pt-12 pb-24 px-6 lg:-mr-12">
            <h2 className="font-bold underline text-lg md:text-2xl lg:text-4xl tracking-tight text-black dark:text-white">
              About Me:
            </h2>
            <ul class="list-outside md:list-inside md:ml-10 md:pr-36 font-bold text-lg md:text-2xl lg:text-4xl tracking-tight text-black dark:text-white">
              <li>I'm a Developer & UX/UI Designer.</li>
              <li>I’m dreamer and a fanatic of all digital things.</li>
              <li>
                I have done many good works as experience in consulting in
                almost all areas of digital and development stratiges.
              </li>
              <li>I love Minimal Designs as my practice.</li>
            </ul>
          </div>
        </div>
      </div>
    );
}
