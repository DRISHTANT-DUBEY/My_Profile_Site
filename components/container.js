import Head from 'next/head';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";

import Footer from "@/components/footer";

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();

  return (
    <div className="max-w-full bg-white dark:bg-black selection:bg-gray-800">
      <Head>
        <title>Drishtant Dubey:Profile Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex items-center justify-between w-full max-w-9xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-60 dark:text-gray-100 z-10 lg:z-20">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-4 h-4 text-gray-800 dark:text-gray-200"
            >
              {resolvedTheme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        <div>
          <NextLink href="#experience">
            <a className="bg-transparent hover:bg-red-100 dark:hover:text-gray-900 text-base sm:text-xl lg:text-2xl p-1 text-gray-900 sm:p-4 dark:text-gray-100">
              experience
            </a>
          </NextLink>
          <NextLink href="/work">
            <a className="bg-transparent hover:bg-red-100 dark:hover:text-gray-900 text-base sm:text-xl lg:text-2xl p-1 text-gray-900 sm:p-4 dark:text-gray-100">
              work
            </a>
          </NextLink>
          <NextLink href="#projects">
            <a className="bg-transparent hover:bg-red-100 dark:hover:text-gray-900 text-base sm:text-xl lg:text-2xl p-1 text-gray-900 sm:p-4 dark:text-gray-100">
              projects
            </a>
          </NextLink>
          <NextLink href="#contact">
            <a className="bg-transparent hover:bg-red-100 dark:hover:text-gray-900 text-base sm:text-xl lg:text-2xl p-1 text-gray-900 sm:p-4 dark:text-gray-100">
              contact
            </a>
          </NextLink>
        </div>
      </nav>
      <main
        id="skip"
        className="flex flex-col justify-center px-1  space-x-1 bg-white dark:bg-black"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}