// import Link from "next/link";
import Image from "next/image";
import valuesPic from "../public/values.png";

export default function Home_comp2() {
    return (
      <div class="min-w-screen min-h-screen flex flex-col md:flex-row items-center bg-pink-200 dark:bg-gray-100">
        <div class="container flex flex-col justify-center items-start pt-12 pb-24 ml-5 md:ml-8 lg:ml-24 my-auto">
          <h2 className="font-bold md:ml-16 text-2xl md:text-3xl lg:text-5xl tracking-tight text-black">
            Philosophy & values
          </h2>
          <p class="font-medium text-base md:text-base md:w-1/2 md:ml-24 lg:text-lg text-black tracking-widest leading-relaxed capitalize mt-5">
            I think everyone wants the same thing - relationship with humanity,
            peace with the metaphysical, and experience with the universe.
            <br />I try to grasp these things with my values: authenticity,
            creativity, & hospitality.
          </p>
          <div class="inline-flex flex-col w-36 h-7 ml-5 md:ml-36 mt-3 border border-gray-500 items-center text-black font-normal text-lg leading-relaxed lowercase -mb-20">
            <p class="text-black font-semibold text-lg leading-relaxed lowercase">
              More about me
            </p>
          </div>
        </div>
        <div>
          <Image
            className="w-full h-full md:min-h-max md:min-w-max"
            src={valuesPic}
            alt="Picture of the author"
            placeholder="blur"
          />
        </div>
      </div>
    );
}