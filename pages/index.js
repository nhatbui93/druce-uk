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
    <section className="mx-auto flex items-center justify-center py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 min-h-[600px]">
      <div>
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tight md:text-6xl lg:leading-[1.1]  ">
          Druce New UI
        </h1>
        <span
          className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"
          data-br=":r3:"
          data-brr={1}
          style={{
            display: "inline-block",
            verticalAlign: "top",
            textDecoration: "inherit",
            maxWidth: 700,
          }}
        >
          © 2023 Druce & Co (International) Ltd. All rights reserved. Druce &
          Co (International) Ltd, incorporated and registered in England and
          Wales. Registration Number: 13695288. Registered Office: Montpelier
          House 106 Brompton Road, Knightsbridge, London, England, SW3 1JJ
        </span>
      </div>
    </section>
  );
}
