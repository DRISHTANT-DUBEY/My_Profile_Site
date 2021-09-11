import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <Container title="404 – Drishtant Dubey">
      <div class="bg-indigo-900 relative overflow-hidden h-screen border-2 border-dashed rounded-2xl">
        <img
          src="/8.svg"
          class="filter grayscale absolute h-full w-full object-cover"
        />
        <div class="inset-0 bg-black opacity-25 absolute"></div>
        <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div class="w-full font-mono flex flex-col items-center relative z-0 md:z-10">
            <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">
              You&#x27;re alone here
            </h1>
            <p class="font-extrabold text-8xl my-44 text-white animate-bounce">
              404
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-3 self-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          451 – Some Technical Issue
        </h1>
        <p className="font-medium text-gray-600 dark:text-gray-400 mb-8">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-400 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
