import Head from "next/head";
import { twMerge } from "tailwind-merge";
import Header from "./Header";
import Footer from "./Footer";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({
  children,
  className = "",
  ...customMeta
}: LayoutProps) {
  const meta = {
    title: "Prime Central London Property Sales and Lettings - Druce",
    description:
      "With headquarters in London and offices in Dubai and Singapore, we have both local knowledge and global reach in luxury residential property",
    image:
      "https://cms-origin-759743025111.s3.amazonaws.com/cms/letting_guide_seo_b08413246a.png",
    type: "website",
    ...customMeta,
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no,  initial-scale=1.0, viewport-fit=cover"
        />
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:url" content="https://www.druce.com/" />

        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Druce" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="distribution" content="Global" />
        <meta name="author" content="Druce" />
        <link
          rel="shortcut icon"
          href="https://www.druce.com/images/favicon.ico"
        />
        <link
          href="https://www.druce.com/images/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />

        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />

        <link
          href="https://www.druce.com/images/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
      </Head>
      <Header />
      <main className={twMerge("wrapper", className)}>{children}</main>
      <Footer />
    </>
  );
}
