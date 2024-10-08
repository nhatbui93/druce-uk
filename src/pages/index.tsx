import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                Welcome to @Druce!
              </h2>
              <p className="mb-8 font-light text-gray-500 sm:text-xl">
                We Are Your Lifelong Partner In Your Real Estate Journey.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
