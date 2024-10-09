import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

const Page = (props : any) => {
  const { children, className = "" } = props;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no,  initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
};

export default Page;
