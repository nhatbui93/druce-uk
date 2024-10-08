import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ProgressBar from "@badrap/bar-of-progress";
import { fontSans, fontHeading } from "@/lib/fonts";
import Router from "next/router";
import { DefaultSeo } from "next-seo";
import { siteConfig } from "@/config/site";
const progress = new ProgressBar({
  size: 2,
  color: "#002664",
  className: "bar-of-progress",
  delay: 100,
});


// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== "undefined") {
  progress.start();
  progress.finish();
}

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.finish());
Router.events.on("routeChangeError", () => progress.finish());



export default function App({ Component, pageProps }: AppProps) {
  return <>

    <style jsx global>{`
        html {
          --font-sans: ${fontSans.style.fontFamily};
          --font-heading: ${fontHeading.style.fontFamily};
        }
      `}</style>

    <DefaultSeo
      openGraph={{
        type: "website",
        locale: "en",
        url: `${siteConfig.url}`,
        siteName: `${siteConfig.name}`,
        description: `${siteConfig.description}`,
        images: [
          {
            url: `${siteConfig.image}`,
            width: 1200,
            height: 630,
            type: "image/jpeg",
          },
        ],
      }}
      title={siteConfig.name}
      description={siteConfig.description}
      canonical={`${siteConfig.url}`}
    />
    <Component {...pageProps} />
  </>;
}
