//import Link from "next/link";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);
export default function Footer() {
  return (
    <footer class="bg-gray-300 dark:bg-gray-800 w-full py-8">
      <div class="max-w-screen-xl mx-auto px-4">
        <ul class="max-w-screen-md mx-auto text-lg font-medium flex flex-wrap justify-between">
          <li class="my-2">
            <ExternalLink href="https://www.kaggle.com/drishtantdubey">
              <a class="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Kaggle
              </a>
            </ExternalLink>
          </li>
          <li class="my-2">
            <ExternalLink href="https://dribbble.com/Drishtant/">
              <a class="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Dribble
              </a>
            </ExternalLink>
          </li>
          <li class="my-2">
            <ExternalLink href="https://github.com/DRISHTANT-DUBEY/">
              <a class="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Github
              </a>
            </ExternalLink>
          </li>
          <li class="my-2">
            <ExternalLink href="https://www.linkedin.com/in/drishtant-dubey-631249189">
              <a class="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                LinkedIn
              </a>
            </ExternalLink>
          </li>
        </ul>
        <div class="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <ExternalLink href="https://dribbble.com/Drishtant/">
            <a class="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <svg
                width="20"
                height="19"
                class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 48 47"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.1242 0.0248413C11.3102 0.0248413 0.82608 10.509 0.82608 23.323C0.82608 36.137 11.3102 46.6211 24.1242 46.6211C36.9382 46.6211 47.4224 36.137 47.4224 23.323C47.4224 10.509 36.9382 0.0248413 24.1242 0.0248413ZM43.3452 22.1581C38.2972 21.3815 33.8318 21.3815 29.5604 21.9639C29.1721 20.799 28.5897 19.8283 28.0072 18.6634C32.4727 16.7218 36.1616 14.0037 38.6856 10.7032C41.4037 14.0037 43.151 17.8867 43.3452 22.1581ZM35.7733 8.17919C33.4435 11.2856 30.1429 13.6154 26.0657 15.3628C24.1242 11.6739 21.9886 8.17919 19.4646 4.68447C21.0178 4.29617 22.571 4.10202 24.1242 4.10202C28.5897 4.10202 32.6669 5.65522 35.7733 8.17919ZM15.3874 6.23768C17.9114 9.53825 20.2412 13.033 22.1827 16.7218C17.5231 18.0809 11.8927 18.6633 5.48571 18.8575C6.84477 13.2271 10.5336 8.76164 15.3874 6.23768ZM4.90325 23.323V22.7405C12.281 22.7405 18.8821 21.9639 24.1242 20.2166C24.5125 21.1873 25.095 22.1581 25.4833 22.9347C18.8821 25.0703 13.4459 29.1475 9.36873 35.5545C6.65061 32.2539 4.90325 27.9826 4.90325 23.323ZM12.281 38.4668C16.164 32.4481 21.0178 28.5651 27.0365 26.8177C28.7838 31.4773 30.1429 36.3311 30.9195 41.379C24.5125 43.7088 17.5231 42.5439 12.281 38.4668ZM34.8025 39.2434C34.0259 34.5837 32.6669 30.1183 31.1137 25.8469C34.8025 25.2645 38.6855 25.4586 43.151 26.2352C42.1803 31.6715 39.268 36.3311 34.8025 39.2434Z" />
              </svg>
            </a>
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/drishtant-dubey-631249189">
            <a class="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
              </svg>
            </a>
          </ExternalLink>
          <ExternalLink href="https://github.com/DRISHTANT-DUBEY/">
            <a class="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
              >
                <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
              </svg>
            </a>
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/drishtant-dubey-631249189">
            <a class="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
              </svg>
            </a>
          </ExternalLink>
          <ExternalLink href="https://www.kaggle.com/drishtantdubey">
            <a class="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="currentColor"
                class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              >
                <defs>
                  <path id="B" d="M31.5 15.978h289v130.044h-289z" />
                </defs>
                <path
                  transform="matrix(.527027 0 0 .527027 -30.632288 -22.45559)"
                  d="M105.75 102.968c-.06.238-.298.357-.713.357H97.1c-.477 0-.89-.208-1.248-.625L82.746 86.028l-3.655 3.477v12.93c0 .595-.298.892-.892.892h-6.152c-.595 0-.892-.297-.892-.892V43.5c0-.593.297-.89.892-.89H78.2c.594 0 .892.298.892.89v36.288l15.692-15.87c.416-.415.832-.624 1.248-.624h8.204c.356 0 .593.15.713.445.12.357.09.624-.09.803L88.274 80.588l17.297 21.488c.237.238.297.535.18.892"
                />
              </svg>
            </a>
          </ExternalLink>
        </div>
        <div class="font-bold text-black dark:text-gray-200 pt-10 sm:pt-12 flex items-center justify-center">
          Created by Drishtant Dubey
        </div>
      </div>
    </footer>
  );
}
