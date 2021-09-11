//import Link from "next/link";
import Image from "next/image";
import works from "../public/works.png";
import proj1 from "../public/proj1.png";
import proj2 from "../public/proj2.png";
import proj3 from "../public/proj3.png";
export default function Home_comp4() {
    return (
      <div class="min-w-screen min-h-screen flex flex-col md:flex-row items-center mt-5">
        <div class="container flex flex-wrap overflow-hidden font-bold tracking-tight text-black dark:text-white">
          <div class="flex flex-wrap overflow-hidden">
            <div class="my-8 px-8 w-full overflow-hidden md:my-10 md:px-10 md:w-full lg:my-16 lg:px-16 lg:w-full xl:my-32 xl:px-32 xl:w-full items-center ">
              <div class="relative w-2/3 h-56 ml-24 lg:ml-64 self-center">
                <Image
                  className="w-full h-full md:min-h-max md:min-w-max"
                  src={works}
                  alt="Picture of the author"
                  placeholder="blur"
                />
                <p class="-ml-20 md:-ml-28 absolute min-w-max left-0 top-0 text-3xl md:text-6xl text-indigo-600 dark:text-white">
                  Featured Works:
                </p>
              </div>
            </div>

            <div class="my-8 -mt-28 md:mt-0 px-8 w-full overflow-hidden md:my-10 md:px-10 md:w-full lg:my-1 lg:px-16 lg:w-full xl:my-32 xl:px-32 xl:w-full">
              <div class="inline-flex flex-row w-full md:w-max h-72 self-center">
                <Image
                  className="w-auto"
                  src={proj1}
                  alt="Picture of the author"
                  placeholder="blur"
                />
                <div class="container flex flex-col justify-center items-start -ml-24 md:-ml-96 lg:-ml-20 px-3 w-max md:w-auto my-auto bg-pink-200 dark:bg-gray-900 z-0 h-52 mix-blend-normal dark:mix-blend-lighten">
                  <h2 className="font-bold md:ml-1 text-xl tracking-tight text-black dark:text-white">
                    Amazon Clone
                  </h2>
                  <p class="font-medium text-base md:w-1/3 md:ml-5 leading-relaxed capitalize tracking-tight text-green-500 dark:text-gray-400 mt-1">
                    I worked with React.js on making a clone for amazon website
                    with features like cart, stripe payments added and mobile
                    app for both Android and iOS. This project lasted for 6
                    months.
                  </p>
                </div>
              </div>
            </div>

            <div class="my-8 px-8 w-full overflow-hidden md:my-10 md:px-10 md:w-full lg:my-1 lg:px-16 lg:w-full xl:my-32 xl:px-32 xl:w-full">
              <div class="inline-flex flex-row w-full md:w-max h-72 self-center">
                <Image
                  className="w-auto"
                  src={proj2}
                  alt="Picture of the author"
                  placeholder="blur"
                />
                <div class="container flex flex-col justify-center items-start -ml-24 md:-ml-96 lg:-ml-20 px-3 w-max md:w-auto my-auto bg-pink-200 dark:bg-gray-900 z-0 h-52 mix-blend-normal dark:mix-blend-lighten">
                  <h2 className="font-bold md:ml-1 text-xl tracking-tight text-black dark:text-white">
                    Zoom Clone
                  </h2>
                  <p class="font-medium text-base md:w-1/3 md:ml-5 leading-relaxed capitalize tracking-tight text-green-500 dark:text-gray-400 mt-1">
                    I worked with React.js  extensively making a clone of 
                    zoom app using electron mobile app with react native 
                    for both Android and iOS. This project lasted for 2
                    months.
                  </p>
                </div>
              </div>
            </div>

            <div class="my-8 px-8 w-full overflow-hidden md:my-10 md:px-10 md:w-full lg:my-1 lg:px-16 lg:w-full xl:my-32 xl:px-32 xl:w-full">
              <div class="inline-flex flex-row w-full md:w-max h-72 self-center">
                <Image
                  className="w-auto"
                  src={proj3}
                  alt="Picture of the author"
                  placeholder="blur"
                />
                <div class="container flex flex-col justify-center items-start -ml-24 md:-ml-96 lg:-ml-20 px-3 w-max md:w-auto my-auto bg-pink-200 dark:bg-gray-900 z-0 h-52 mix-blend-normal dark:mix-blend-lighten">
                  <h2 className="font-bold md:ml-1 text-xl tracking-tight text-black dark:text-white">
                    Spotify Clone
                  </h2>
                  <p class="font-medium text-base md:w-1/3 md:ml-5 leading-relaxed capitalize tracking-tight text-green-500 dark:text-gray-400 mt-1">
                    Spotify UI/UI was recreated to bring my 
                    frontend skills to test and create and 
                    clone of spotify using react.js and 
                    Spotify API. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

